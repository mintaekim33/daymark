from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Daymark API",
    description="Personal productivity and organization platform",
    version="1.0.0",
)

# Allow the React frontend to communicate with the backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Daymark API",
        "status": "running",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "application": "Daymark",
    }