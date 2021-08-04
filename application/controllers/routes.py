from application.app import app
from application.models.tasks import Task, db
from flask import render_template, jsonify, request

# route to load the html template of the page
@app.route("/")
def index():
    return render_template("index.html");

# route to return all of the tasks, saved in database
@app.route("/index")
def get_tasks():
    query_return = db.session.query(Task).all()

    tasks = []

    # return tasks on json type
    for task in query_return:
        task = {"task":task.task, "status":task.status, "id":task.task_id}
        tasks.append(task)

    return jsonify(tasks);

# route to save a new task on the database
@app.route("/add-task", methods=["POST"])
def add_task():
    task_value = request.get_json()

    task = Task(False, task_value["task"])

    db.session.add(task)
    db.session.commit()
    
    return jsonify({"status":"success"})


# route to remove a task from the database
@app.route("/delete-task/<id>", methods=["DELETE"])
def delete_task(id):
    
    try:
        Task.query.filter_by(task_id=id).delete()
        db.session.commit()
        return jsonify({"status":"success"})
    except:
        return jsonify({"status":"failed"})


# route to update the status of the task, if she was checked on the html
@app.route("/update-task/<id>", methods=["PUT"])
def update_task(id):

    status = request.get_json()

    try:
        task_to_update = Task.query.filter_by(task_id=id).first()
        task_to_update.status = status["isTaskChecked"]
        db.session.commit()
        return jsonify({"status":"success"})
    except:
        return jsonify({"status":"failed"})


# route to delete all of the tasks that are completed
@app.route("/delete-tasks", methods=["DELETE"])
def delete_complete_tasks():
    
    try:
        Task.query.filter_by(status=True).delete()
        db.session.commit()
        return jsonify({"status":"success"})
    except:
        return jsonify({"status":"failed"})