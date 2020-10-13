from flask import Flask
from app.db import db_session



app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

print(f"Flask ENV set to: {app.config['ENV']}")

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

from app import controller
from app import views
from app import model