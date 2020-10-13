from flask import Flask

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

print(f"Flask ENV set to: {app.config['ENV']}")


#from app import db
from app import controller
from app import views
from app import model