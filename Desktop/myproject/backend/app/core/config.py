import os
from pydantic import Field
from pydantic_settings import BaseSettings
from typing import Optional
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings(BaseSettings):
    # API settings
    API_HOST: str = Field(default=os.getenv("API_HOST", "127.0.0.1"))
    API_PORT: int = Field(default=int(os.getenv("API_PORT", "8000")))
    
    # Redis settings
    REDIS_HOST: str = Field(default=os.getenv("REDIS_HOST", "localhost"))
    REDIS_PORT: int = Field(default=int(os.getenv("REDIS_PORT", "6379")))
    
    # Celery settings
    CELERY_BROKER_URL: str = Field(default=os.getenv("CELERY_BROKER_URL", "redis://localhost:6379/0"))
    CELERY_RESULT_BACKEND: str = Field(default=os.getenv("CELERY_RESULT_BACKEND", "redis://localhost:6379/0"))
    
    # API keys
    ANTHROPIC_API_KEY: Optional[str] = Field(default=os.getenv("ANTHROPIC_API_KEY", ""))
    GOOGLE_API_KEY: Optional[str] = Field(default=os.getenv("GOOGLE_API_KEY", ""))
    CEREBRAS_API_KEY: Optional[str] = Field(default=os.getenv("CEREBRAS_API_KEY", ""))
    TRELLIS_API_KEY: Optional[str] = Field(default=os.getenv("TRELLIS_API_KEY", "d5a562295638093603d83855ea6c67500ba3557510d4ea1aa0218b05dfb9d1e8"))

    class Config:
        env_file = ".env"

settings = Settings()
