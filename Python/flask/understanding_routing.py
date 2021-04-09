from flask import Flask
app = Flask(__name__)

from flask import json
from werkzeug.exceptions import HTTPException

@app.route('/')
def hello():
        return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string>')
def say(string):
    return f"Hi {string}!"

@app.route('/repeat/<count>/<word>')
def repeat(count, word):
    # for i in range(1,int(count)):
        return word * int(count)

@app.errorhandler(HTTPException)
def handle_exception(e):
    return "Sorry!  Not available.  Try again!"


if __name__=="__main__":
    app.run(debug=True)