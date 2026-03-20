from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

class ZoneData(BaseModel):
    zone: str

@app.post("/risk-score")
def calculate_risk(data: ZoneData):
    # Mock AI Risk Score
    risk_score = round(random.uniform(0.3, 0.9), 2)
    return {"risk_score": risk_score}