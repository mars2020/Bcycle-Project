from sqlalchemy import Column, Integer, String
from app.db import Base

class Bcycle(Base):
    __tablename__ = 'bcycle'
    id = Column(Integer, primary_key=True)
    checkout_kiosk = Column(String(50), unique=True)
    return_kiosk = Column(String(120), unique=True)

    def __init__(self, name=None, email=None):
        self.checkout_kiosk = checkout_kiosk
        self.return_kiosk = return_kiosk


