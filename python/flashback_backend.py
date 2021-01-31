import json
import flask
from flask import request, jsonify
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

  
@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


# A route to return all of the available entries in our catalog.
@app.route('/api/v1/courses/all', methods=['GET'])
def api_all():

    return jsonify(csv_json)



@app.route('/api/v1/courses/search', methods=['GET'])
def api_course_search():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'crn' in request.args:
        crn = int(request.args['crn'])
    else:
        return "Error: No CRN field provided. Please specify a CRN."

    if 'year' in request.args:
        year = request.args['year']
    else:
        return "Error: No Academic year field provided. Please specify year"
    
    if 'term' in request.args:
        term = request.args['term']
    else:
        return "Error: No Term field provided. Please specify term"
    
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for course in csv_json:
        if course['CRN'] == crn:
            results.append(course)

    for course in results:

        if course["Academic Year"] == year and course["Term"] == term:
            return jsonify([course])
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return "Error: Course is not found"

@app.route('/api/v1/courses/search/all', methods=['GET'])
def api_course_search_all():
    return jsonify(merged_json)


@app.route('/api/v1/courses/search/hokie', methods=['GET'])
def api_course_search_plus():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'crn' in request.args:
        crn = request.args['crn']
    else:
        return "Error: No CRN field provided. Please specify a CRN."
    
    if 'term' in request.args:
        term = request.args['term']

    else:
        return "Error: No Term field provided. Please specify term"
    
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for course in merged_json:
        if course['courseReferenceNumber'] == crn:
            results.append(course)

    for course in results:

        if course["term"] == term:
            return jsonify([course])
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return "Error: Course is not found"


@app.route('/api/v1/canvas/courses/all', methods=['GET'])
def access_canvas_courses():
    
    url = "https://canvas.vt.edu/api/v1/courses?per_page=100"
    if 'token' in request.args:

        token = request.args['token']
    else:
        return "Error: No Token field provided. Please Provide token field"

    headers = {
        'Authorization' : 'Bearer ' + token,
    }

    response = requests.request(url, headers = headers, data = {})

    return jsonify(response)

app.run()


