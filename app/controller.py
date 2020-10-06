from app import app
from flask import render_template, request
from .db import mysql
import datetime
from .classes.google_api_client import GoogleApiClient


# Standard functions

def printing_cursor(result):
    """ Printing """
    print('---------- Cursor Query Data -----------')
    print("length : {}".format(len(result)))
    print(type(result[0][0]))
    for row in result:
        print(row)


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

    GOOGLE_API_KEY="AIzaSyCJvRWDITYU9P60_euI_M3JFdVZn-WSnl4"
    data = []
    conn = mysql.connect()
    print("Connection to MySQL DB successful")
    cursor = conn.cursor()

    if request.method == "POST":
        # 1. retrieve data based on input dates
        start_date = request.form["start-date"]
        end_date = request.form["end-date"]
        #col_values = ['Checkout Kiosk', 'Return Kiosk', 'Trip Duration']
        start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d').strftime('%m/%d/%y')
        end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d').strftime('%m/%d/%y')
        print("start date: {}".format(start_date))
        print("end date: {}".format(end_date))
        select_query = """SELECT `Checkout Kiosk`, `Return Kiosk`, `Trip Duration Minutes` from mysql_db.`b-cycle` WHERE `Checkout Date` BETWEEN %s and %s"""
        cursor.execute(select_query,(start_date,end_date))
        query = cursor.fetchall()
        printing_cursor(query)

        # 2. run geocoding algorithm on data
        for address in query:
            client1 = GoogleApiClient(api_key=GOOGLE_API_KEY,address=address[0])
            client2 = GoogleApiClient(api_key=GOOGLE_API_KEY,address=address[1])
            if client1.lat is not None and client1.lng is not None:
                data.append({"lat": client1.lat, "lng": client1.lng})
            if client2.lat is not None and client2.lng is not None:
                data.append({"lat": client2.lat, "lng": client2.lng})
        # testing
        # return render_template("data.html",col_values=col_values,data=query)

        query_data = {
            'data':data
        }
        print(data)

        return render_template("heatmap.html",query_data=query_data)
    else:
        return render_template("home.html")
