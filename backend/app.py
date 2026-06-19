from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("DB_NAME")]
users_collection = db["users"]

# Helper function to format MongoDB objects
def serialize_user(user):
    return {
        "id": str(user["_id"]),
        "firstname": user["firstname"],
        "lastname": user["lastname"],
        "dob": user["dob"],
    }

# API route to add user data
@app.route("/api/users", methods=["POST"])
def add_user():
    data = request.json
    if not data.get("firstname") or not data.get("lastname") or not data.get("dob"):
        return jsonify({"error": "All fields are required"}), 400

    new_user = {
        "firstname": data["firstname"],
        "lastname": data["lastname"],
        "dob": data["dob"],
    }

    result = users_collection.insert_one(new_user)
    return jsonify({"message": "User added successfully!", "id": str(result.inserted_id)}), 201

# API route to get all users
@app.route("/api/users", methods=["GET"])
def get_users():
    users = list(users_collection.find())
    return jsonify([serialize_user(user) for user in users])

if __name__ == "__main__":
    app.run(port=5000, debug=True)