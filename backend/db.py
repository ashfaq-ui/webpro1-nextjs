# db.py
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Connect to MongoDB
client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("DB_NAME")]
users_collection = db["users"]

# Helper function to serialize MongoDB objects
def serialize_user(user):
    return {
        "id": str(user["_id"]),
        "firstname": user["firstname"],
        "lastname": user["lastname"],
        "dob": user["dob"],
    }

# Function to add a user
def add_user_to_db(firstname, lastname, dob):
    new_user = {
        "firstname": firstname,
        "lastname": lastname,
        "dob": dob
    }
    result = users_collection.insert_one(new_user)
    return str(result.inserted_id)

# Function to get all users
def get_all_users():
    users = list(users_collection.find())
    return [serialize_user(user) for user in users]