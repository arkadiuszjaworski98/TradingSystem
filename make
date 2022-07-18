# localhost for FastAPI server:
open http://127.0.0.1:8000/items/5?q=somequery

#run FastAPI server:
echo  cd /Users/arkadiuszjaworski/PycharmProjects/TradingSystem
cd backend
uvicorn main:app --reload

#run React dev mode:
cd /Users/arkadiuszjaworski/PycharmProjects/TradingSystem/frontend
npm start
