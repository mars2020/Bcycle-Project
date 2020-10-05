from flask import Flask

app = Flask(__name__)

print(f"Flask ENV set to: {app.config['ENV']}")


#from app import db
from app import controller
from app import views
from app import model