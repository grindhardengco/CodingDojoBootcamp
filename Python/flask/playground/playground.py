from flask import Flask, render_template
app = Flask(__name__)

# @app.route("/<string>/<num>")
# def index(string, num):
#     return render_template("index.html", phrase=string, times=int(num))

@app.route("/<count>/<color>")
def make_box(count, color):
    return render_template("boxed.html", boxes=int(count), paint=color)

if __name__=="__main__":
    app.run(debug=True)