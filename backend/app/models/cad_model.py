from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class CADModel(Base):
    __tablename__ = "cad_models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    parameters = Column(Text)  # JSON string
    file_path = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    
    user = relationship("User", back_populates="cad_models")