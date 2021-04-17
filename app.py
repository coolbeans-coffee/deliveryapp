from flask import Flask, render_template
app = Flask(__name__)
@app.route('/') # URL Route
def home(): # Build a function called "home"
    return render_template('home.html') # Return strings to a desired url

if __name__ == '__main__':
    app.run(debug=True)