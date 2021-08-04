from flask import Flask
from os import path

# defines the flask application and import the configurations
app = Flask(__name__)
app.config.from_pyfile("../config.py")

from application.controllers import routes
