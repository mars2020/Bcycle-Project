import mysql.connector
from mysql.connector import Error

def create_connection(host_name, user_name, user_password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute('SHOW DATABASES')
        DB_EXISTS = False
        for db in cursor:
            if db[0] == 'mysql_db':
                DB_EXISTS = True
        if not DB_EXISTS:
            cursor.execute(query)
            print("Database created successfully")
        else:
            print("Database already created")
    except Error as e:
        print(f"The error '{e}' occurred")


connection = create_connection("localhost","root","N33dAj0b!","mysql_db")
create_database_query = 'CREATE DATABASE mysql_db'
create_database(connection,create_database_query)


if connection.is_connected():
    db_Info = connection.get_server_info()
    print("Connected to MySQL Server version ", db_Info)
    cursor = connection.cursor()
    cursor.execute("select database();")
    record = cursor.fetchone()
    print("You're connected to database: ", record)

