from application.app import app
from application.models.tasks import db

# start the application
if __name__ == "__main__":
    app.run()
    db.create_all()