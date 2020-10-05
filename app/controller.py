from app import app
from flask import render_template, request
from .db import mysql
import geocoder
import pandas as pd

@app.route("/", methods=["GET","POST"])
def main():
    conn = mysql.connect()
    print("Connection to MySQL DB successful")
    cursor = conn.cursor()
    cursor.execute('SHOW DATABASES')
    for db in cursor:
        print(db)
    if request.method == "POST":
        duration = request.form["duration"]
        select_query = """SELECT `Return Kiosk ID`, `Trip Duration Minutes` from mysql_db.`b-cycle` WHERE `Trip Duration Minutes` < %s ORDER BY `Trip Duration Minutes`"""
        cursor.execute(select_query,duration)
        data = cursor.fetchall()
        return render_template("data.html",data=data,duration=duration)

    else:
        return render_template("index.html")


@app.route("/heatmap", methods=["GET","POST"])
def plots():
    conn = mysql.connect()
    cursor = conn.cursor()
    if request.method == "POST":
        # 1. retrieve data based on input dates
        # 2. run geocoding algorithm on data
        # 3. add data to render_template for heatmap
        print("still under development")
    else:
        return render_template("home.html")