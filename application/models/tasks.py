from application.app import app
from flask_sqlalchemy import SQLAlchemy

# defines the database init 
db = SQLAlchemy(app)

# class to hold task data
class Task(db.Model):
    __tablename__ = "tasks"

    task_id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.Boolean)
    task = db.Column(db.Text)

    def __init__(self, status:bool, task:str):
        self.status = status
        self.task = task

