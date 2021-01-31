import json
import flask
from flask import request, jsonify
import requests
import pandas as pd
import glob

app = flask.Flask(__name__)
app.config["DEBUG"] = True

csv_file = pd.read_csv("Grade_Distribution.csv", index_col = False)
csv_json_string = csv_file.to_json(orient = "records", double_precision = 10, default_handler = None)
csv_json = json.loads(csv_json_string)

#read_files = glob.glob("*.json")
#with open("merged_file.json", "wb") as outfile:
#    outfile.write('[{}]'.format(
#        ','.join([open(f, "rb").read() for f in read_files])))

with open('2021_01.json') as file:
    merged_json = json.load(file)


# A route to return all of the available entries in our catalog.
@app.route('/api/v1/courses/all', methods=['GET'])
def api_all():
    return jsonify(csv_json)

@app.route('/api/v1/courses/search/all', methods=['GET'])
def api_course_search_all():
    return jsonify(merged_json)

@app.route('/api/v1/canvas/courses', methods=['GET'])
def access_canvas_courses():
    
    url = "https://canvas.vt.edu/api/v1/courses"

    if 'token' in request.args:

        token = request.args['token']
    else:
        return "Error: No Token field provided. Please Provide token field"

    headers = {
        'Authorization' : 'Bearer ' + token,
    }

    canvas_courses = requests.get(url = url, headers = headers, data = {})

    for course in canvas_courses:
        
        print(course)
        if "course_code" in course:
            course_values = split_course_code(course["course_code"])
            course_info_hokiespa = course_search_hokiespa(course_values[0], course_values[1])
            course_info_gpa = course_search_gpa(course_values[0], course_values[1])

        

    return jsonify(canvas_courses)

def course_search_gpa(crn, term):
    # Create an empty list for our results
    results = []

    

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for course in csv_json:
        if course['CRN'] == crn:
            results.append(course)

    for course in results:
        first_year = course["Academic Year"][2:4]
        second_year = course["Academic Year"][-2:]
        year = term[2:4]
        if year == first_year or year == second_year and course["Term"] == term[-2:]:
            return [course]
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return ["Error: Course is not found"]






def course_search_hokiespa(crn, term):
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    
    
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for course in merged_json:
        if course['courseReferenceNumber'] == crn:
            results.append(course)

    for course in results:

        if course["term"] == term:
            return [course]
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return ["Error: Course is not found"]

def split_course_code(course_code):

    print(course_code)

    vals = course_code.split('_')

    return (vals[2], vals[3]) 






app.run()

