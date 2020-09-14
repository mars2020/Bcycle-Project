from flask import Flask

app = Flask(__name__)

from app import db
from app import controller
from app import views
from app import model