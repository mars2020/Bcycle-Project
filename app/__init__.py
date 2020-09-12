from flask import Flask

app = Flask(__name__)

import app.controller
import app.model
import app.view