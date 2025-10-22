from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn

from api.main import router as api_router

app = FastAPI(title="FastAPI REST API", description="A REST API", version="1.0.0")

# -----------------------------
# CORS設定
# -----------------------------
origins = [
    "http://localhost:5173",  # React開発サーバー
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 許可するオリジン
    allow_credentials=True,
    allow_methods=["*"],  # GET, POST, PUT, DELETEなど全て許可
    allow_headers=["*"],  # ヘッダー全て許可
)

app.include_router(api_router, prefix="/api")


@app.get("/", include_in_schema=False)
async def root() -> JSONResponse:
    return JSONResponse({"message": "It worked!!"})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
