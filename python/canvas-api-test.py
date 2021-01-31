import requests
def access_canvas_courses():
    
    url = "https://canvas.vt.edu/api/v1/courses"

    token = "4511~SsI750mQ6uLCXvAYdilWU7Xz9CO2h4BLFA5y2y9xMNztFbGePiUHQcLULGaMC6sC"

    headers = {
        'Authorization' : 'Bearer ' + token
    }
    

    canvas_courses = requests.request("GET", url, headers=headers)
    print(canvas_courses.text)


access_canvas_courses()