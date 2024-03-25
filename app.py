from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
import os

app = Flask("__name__", static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(os.getcwd(), "database.db")
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(seconds=10)
db = SQLAlchemy(app)


# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

'''
def adduser() :
    with app.app_context() : 
        new_user = User(email="raphael.soupayavalliama@gmail.com", password="bougfaible974")
        db.session.add(new_user)
        db.session.commit()
'''

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email, password=password).first()
        if user:
            return redirect(url_for('index'))
        else:
            return 'Failed to authentificate'
    return render_template('login.html')


@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__": 
    app.run(debug=True, host="172.17.100.58", port=80)