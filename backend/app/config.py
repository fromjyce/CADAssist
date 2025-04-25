from pydantic import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "CAD-AI-Backend"
    VERSION: str = "1.0.0"
    DEBUG: bool = True
    
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/cadai"
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 1 week
    
    ALLOWED_HOSTS: List[str] = ["*"]
    
    OPENAI_API_KEY: str = "your-openai-key"
    CAD_ENGINE: str = "opencascade"  # or "blender"
    
    class Config:
        env_file = ".env"

settings = Settings()