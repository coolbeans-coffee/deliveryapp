from flask import Flask, render_template
app = Flask(__name__)
@app.route('/') # URL Route
def home(): # Build a function called "home"
    return render_template('home.html') # Return strings to a desired url

@app.route('/beans') # URL Route
def beans(): # Build a function called "home"
    return render_template('beans.html') # Return strings to a desired url

@app.route('/delivery') # URL Route
def delivery(): # Build a function called "delivery"
    return render_template('delivery.html') # Return strings to a desired url

@app.route('/menu') # URL Route
def menu(): # Build a function
    return render_template('menu.html') # Return strings to a desired url
    
if __name__ == '__main__':
    app.run(debug=True)