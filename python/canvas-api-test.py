import requests
def access_canvas_courses():
    
    url = "https://canvas.vt.edu/api/v1/courses"

    token = ""

    headers = {
        'Authorization' : 'Bearer ' + token
    }
    

    canvas_courses = requests.request("GET", url, headers=headers)
    print(canvas_courses.text)


access_canvas_courses()