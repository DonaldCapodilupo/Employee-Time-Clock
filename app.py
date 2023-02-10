from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)


@app.route('/', methods=["POST","GET"])
def main():

    if request.method == "POST":
        if request.form['submit_button'] == "Punch In":
            print(request.form.get("todays_employees"))
            print(request.form)
            return render_template("main.html")

        elif request.form['submit_button'] == "Punch Out":
            return render_template("main.html")

    else:


        return render_template("main.html")


if __name__ == '__main__':
    app.run()
