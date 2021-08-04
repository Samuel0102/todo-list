from os import environ, path
from dotenv import load_dotenv, find_dotenv
from application.app import app

# load the .env file to get environment variables
path_env = find_dotenv(filename='.env')
load_dotenv(path_env, verbose=False)

path = path.abspath(path.dirname(__file__))

# defines all needed configs of the server application
SECRET_KEY = environ.get("SECRET_KEY")
SQLALCHEMY_DATABASE_URI = f'sqlite:////{path}/application/database/database.db'
SQLALCHEMY_TRACK_MODIFICATIONS = False
