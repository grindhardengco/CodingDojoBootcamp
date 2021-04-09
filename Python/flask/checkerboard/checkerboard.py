from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def checkerboard1():
    y = 8
    x = 8
    return render_template("index.html", row=y, column=x)

@app.route('/<y>')
def checkerboard2(y):
    y = int(y)
    x = 8
    return render_template("index.html", row=y, column=x)

@app.route('/<y>/<x>')
def checkerboard3(y,x):
    y = int(y)
    x = int(x)
    return render_template("index.html", row=y, column=x)

@app.route('/<y>/<x>/<color0>/<color1>')
def checkerboard4(y,x,color0,color1):
    y = int(y)
    x = int(x)
    return render_template("index_sensei.html", row=y, column=x, color0=color0, color1=color1)


if __name__=="__main__":
    app.run(debug=True)



