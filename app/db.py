from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import pymysql
import secrets

# connection string for SQLAlchemy
conn = "mysql+pymysql://{user}:{pw}@{host}/{db}".format(user=secrets.dbuser,pw=secrets.dbpass,host=secrets.dbhost,db=secrets.dbname)

engine = create_engine(conn,convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,autoflush=False,bind=engine))
print(engine.table_names())

Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    import app.model
    Base.metadata.create_all(bind=engine)
