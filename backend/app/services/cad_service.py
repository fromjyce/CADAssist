from typing import Optional, Dict, Any
from app.utils.cad_engine import CADEngine
from app.utils.file_handling import save_cad_file, get_cad_file
from app.schemas.cad_model import CADModelCreate, CADModelUpdate
from app.models.cad_model import CADModel as CADModelDB
from sqlalchemy.orm import Session
import json

class CADService:
    def __init__(self):
        self.cad_engine = CADEngine()
        
    def create_model(self, db: Session, model_data: CADModelCreate, user_id: int):
        # Process with AI to get CAD parameters
        cad_parameters = self._process_prompt(model_data.prompt)
        
        # Generate CAD model
        model_path = self.cad_engine.generate_model(cad_parameters)
        
        # Save to database
        db_model = CADModelDB(
            user_id=user_id,
            name=model_data.name or "Unnamed Model",
            description=model_data.description,
            parameters=json.dumps(cad_parameters),
            file_path=model_path
        )
        db.add(db_model)
        db.commit()
        db.refresh(db_model)
        
        return db_model
    
    def update_model(self, db: Session, model_id: int, update_data: CADModelUpdate, user_id: int):
        db_model = db.query(CADModelDB).filter(
            CADModelDB.id == model_id,
            CADModelDB.user_id == user_id
        ).first()
        
        if not db_model:
            return None
            
        # Get current parameters
        current_params = json.loads(db_model.parameters)
        
        # Process modification prompt
        updated_params = self._process_modification(
            current_params, 
            update_data.modification_prompt
        )
        
        # Regenerate model
        model_path = self.cad_engine.generate_model(updated_params)
        
        # Update database
        db_model.parameters = json.dumps(updated_params)
        db_model.file_path = model_path
        db.commit()
        db.refresh(db_model)
        
        return db_model
    
    def _process_prompt(self, prompt: str) -> Dict[str, Any]:
        # This will be integrated with AI service
        # For now, return mock parameters
        return {
            "type": "bracket",
            "dimensions": {
                "length": 100,
                "width": 50,
                "thickness": 10
            },
            "features": ["holes"],
            "constraints": []
        }
    
    def _process_modification(self, current_params: Dict[str, Any], prompt: str) -> Dict[str, Any]:
        # This will be integrated with AI service
        # For now, implement simple modifications
        if "increase length" in prompt.lower():
            current_params["dimensions"]["length"] += 10
        elif "decrease width" in prompt.lower():
            current_params["dimensions"]["width"] = max(10, current_params["dimensions"]["width"] - 10)
        
        return current_params
    
    def export_model(self, db: Session, model_id: int, format: str, user_id: int):
        db_model = db.query(CADModelDB).filter(
            CADModelDB.id == model_id,
            CADModelDB.user_id == user_id
        ).first()
        
        if not db_model:
            return None
            
        return self.cad_engine.export_model(db_model.file_path, format)