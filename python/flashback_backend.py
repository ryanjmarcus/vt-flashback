import json
import sys
import flask
from flask import request, jsonify
import requests
import pandas as pd
import glob
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

csv_file = pd.read_csv("Grade_Distribution.csv", index_col = False)
csv_json_string = csv_file.to_json(orient = "records", double_precision = 10, default_handler = None)
csv_json = json.loads(csv_json_string)

#read_files = glob.glob("*.json")
#with open("merged_file.json", "wb") as outfile:
#    outfile.write('[{}]'.format(
#        ','.join([open(f, "rb").read() for f in read_files])))

with open('2020_09.json') as file:
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
    
    url = "https://canvas.vt.edu/api/v1/courses?per_page=100"

    if 'token' in request.args:

        token = request.args['token']
    else:
        return "Error: No Token field provided. Please Provide token field"

    headers = {
        'Authorization' : 'Bearer ' + token,
    }

    canvas_courses = requests.request("GET", url, headers=headers)

    canvas_json_courses = json.loads(canvas_courses.text)


    course_object_list = []

    for course in canvas_json_courses:
    
        if "course_code" in course and '_' in course["course_code"]:
            course_values = split_course_code(course["course_code"])

            if course_values:

                course_info_hokiespa = course_search_hokiespa(course_values[0], course_values[1])
                course_info_gpa = course_search_gpa(course_values[0], course_values[1])

                if course_info_hokiespa:
                    
                    assignments = getAssignments(course["id"], token)
                    users = getUsers(course["id"], token)
                    
                    


                    course_object = {
                        "course" : course["name"],
                        "subject" : course_info_hokiespa["subject"],
                        "course_number" : course_info_hokiespa["courseNumber"],
                        "begin_time" : course_info_hokiespa["meetingsFaculty"][0]["meetingTime"]["beginTime"],
                        "users" : users,
                        "user_total" : len(users),
                        "assignment_total" : len(assignments),
                        "teacher" : course_info_hokiespa["faculty"][0]["displayName"]
                    }

                    if course_info_gpa:
                        course_object["credit_hours"] = course_info_gpa["Credits"]
                        course_object["GPA"] = course_info_gpa["GPA"]
                    else:
                        course_object["credit_hours"] = None
                        course_object["GPA"] = None

                    course_object_list.append(course_object)
        

    return jsonify(course_object_list)


def getAssignments(id, token):
    url = "https://canvas.vt.edu/api/v1/courses/" + str(id) + "/assignments?per_page=100"

    headers = {
        'Authorization' : 'Bearer ' + token,
    }

    canvas_courses = requests.request("GET", url, headers=headers)

    assignments = json.loads(canvas_courses.text)

    return assignments


def getUsers(id, token):
    url = "https://canvas.vt.edu/api/v1/courses/" + str(id) + "/users?include%5B%5D=avatar_url&per_page=100"

    headers = {
        'Authorization' : 'Bearer ' + token,
    }

    canvas_courses = requests.request("GET", url, headers=headers)

    users = json.loads(canvas_courses.text)
    user_object_list = []
    for user in users:
                        
        user_object = {
            "user_name" : user["name"],
            "avatar_url" : user["avatar_url"]

        }
        user_object_list.append(user_object)
    count = 2

    while canvas_courses.links['current']['url'] != canvas_courses.links['last']['url']:  
        
        canvas_courses = requests.request("GET", url = canvas_courses.links['next']['url'], headers=headers) 
        users = json.loads(canvas_courses.text)  
        for user in users:
                        
            user_object = {
                "user_name" : user["name"],
                "avatar_url" : user["avatar_url"]

            }
            user_object_list.append(user_object)
        count += 1
    return user_object_list
    


def course_search_gpa(crn, term):
    # Create an empty list for our results
    results = []

    

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for course in csv_json:

        if course['CRN'] == int(crn):
            results.append(course)


    for course in results:
        
        first_year = course["Academic Year"][2:4]
        
        second_year = course["Academic Year"][-2:]
        
        year = term[2:4]
        if year == first_year or year == second_year and course["Term"] == term[-2:]:
            
            return course
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return None






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
            return course
    
    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    return None

def split_course_code(course_code):

    #print(course_code)

    vals = course_code.split('_')


    try:
        crn = int(vals[-2])
        term = int(vals[-1])
        return (vals[-2], vals[-1]) 
    except ValueError:
        return None
    # if len(vals) - 3 >= 0 and isinstance(vals[-2], int) and len(vals) - 2 >= 0 and isinstance(vals[-1], int):
    #     return (vals[-2], vals[-1]) 
    # return None






app.run()

