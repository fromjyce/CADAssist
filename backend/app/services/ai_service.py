from openai import OpenAI
from app.config import settings
from typing import Dict, Any
import json

class AIService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)
        self.system_prompt = """
        You are a CAD modeling assistant that converts natural language descriptions 
        into precise CAD model parameters. Your responses must be in JSON format.
        
        Example input: "Create a bracket with 100mm length, 50mm width, and 10mm thickness"
        Example output: {
            "type": "bracket",
            "dimensions": {
                "length": 100,
                "width": 50,
                "thickness": 10
            },
            "features": [],
            "constraints": []
        }
        """
    
    def process_prompt(self, prompt: str) -> Dict[str, Any]:
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": prompt}
            ],
            response_format={ "type": "json_object" }
        )
        
        try:
            return json.loads(response.choices[0].message.content)
        except json.JSONDecodeError:
            return {
                "error": "Failed to parse AI response",
                "response": response.choices[0].message.content
            }
    
    def process_modification(self, current_params: Dict[str, Any], modification_prompt: str) -> Dict[str, Any]:
        current_params_str = json.dumps(current_params)
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": f"Current model parameters: {current_params_str}"},
                {"role": "user", "content": f"Modification requested: {modification_prompt}"}
            ],
            response_format={ "type": "json_object" }
        )
        
        try:
            return json.loads(response.choices[0].message.content)
        except json.JSONDecodeError:
            return current_params  # Fallback to original if modification fails