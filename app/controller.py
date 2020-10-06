from app import app
from flask import render_template, request
from .db import mysql
import datetime
import geocoder 


# Standard functions

def printing_cursor(result):
    """ Printing """
    print('---------- Cursor Query Data -----------')
    print("length : {}".format(len(result)))
    print(type(result[0][0]))
    for row in result:
        print(row)

def geocoding(geocoder,result):
    """ Geocoding function """

    def reformat(location):
        if location.latlng is not None:
            lat,lng = str(location.latlng)[1:-1].split(", ")
            print("new google.maps.LatLng({}, {}),".format(lat,lng))

    for row in range(len(result)):
        checkout_kiosk = geocoder.google(result[row][0], key="")
        return_kiosk = geocoder.google(result[row][1], key="")
        print(checkout_kiosk.latlng)
        reformat(checkout_kiosk)
        reformat(return_kiosk)
    
    """
    #print('latidue: {}, longitude: {}'.format(location.latitude,location.longitude))
    count = 0
    for index,row in df.iterrows():
        checkout_kiosk = geocoder.google("{}".format(row["Checkout Kiosk"]), key=app.config["GOOGLE_API_KEY"])
        return_kiosk   = geocoder.google("{}".format(row["Return Kiosk"]), key=app.config["GOOGLE_API_KEY"])
        count = reformat(checkout_kiosk,count)
        count = reformat(return_kiosk, count)
    """


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
    print("Connection to MySQL DB successful")
    cursor = conn.cursor()

    if request.method == "POST":
        # 1. retrieve data based on input dates
        start_date = request.form["start-date"]
        end_date = request.form["end-date"]
        col_values = ['Checkout Kiosk', 'Return Kiosk', 'Trip Duration']
        start_date = datetime.datetime.strptime(start_date, '%Y-%m-%d').strftime('%m/%d/%y')
        end_date = datetime.datetime.strptime(end_date, '%Y-%m-%d').strftime('%m/%d/%y')
        print("start date: {}".format(start_date))
        print("end date: {}".format(end_date))
        select_query = """SELECT `Checkout Kiosk`, `Return Kiosk`, `Trip Duration Minutes` from mysql_db.`b-cycle` WHERE `Checkout Date` BETWEEN %s and %s"""
        cursor.execute(select_query,(start_date,end_date))
        result = cursor.fetchall()
        printing_cursor(result)

        # 2. run geocoding algorithm on data
        geocoding(geocoder, result)

        return render_template("data.html",col_values=col_values,data=result)
    else:
        return render_template("home.html")
