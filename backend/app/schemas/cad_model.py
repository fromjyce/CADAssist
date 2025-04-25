from pydantic import BaseModel
from typing import Optional

class CADModelBase(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

class CADModelCreate(CADModelBase):
    prompt: str

class CADModelUpdate(BaseModel):
    modification_prompt: str

class CADModel(CADModelBase):
    id: int
    user_id: int
    parameters: dict
    file_path: str
    
    class Config:
        from_attributes = True