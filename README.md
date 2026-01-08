👤 User Manager App (Express + MySQL + jQuery + AJAX)

A simple full-stack User Manager application built using Node.js, Express, MySQL, jQuery, and AJAX.
This project demonstrates how frontend and backend communicate asynchronously without page reload.

🚀 Features

➕ Add new users

📄 View user list from database

🔄 AJAX-based operations (no page reload)

🎨 Clean UI with CSS styling

🗄 MySQL database integration

🛠 Tech Stack

Frontend

HTML5

CSS3

jQuery

AJAX

Backend

Node.js

Express.js

MySQL (mysql2)

CORS

📂 Project Structure
jquery-ajax-express-user-manager/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
└── README.md

🗄 Database Setup

Create database and table in MySQL:

CREATE DATABASE userdb;

USE userdb;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/jquery-ajax-express-user-manager.git
cd jquery-ajax-express-user-manager

2️⃣ Install Dependencies
npm install

3️⃣ Update Database Credentials

Edit in server.js:

host: "localhost",
user: "root",
password: "password",
database: "userdb"

4️⃣ Run Server
node server.js


Server will start at:

http://localhost:6950

🌐 API Endpoints
➤ Get All Users
GET /users

➤ Add New User
POST /users


Request Body

{
  "name": "Rahul"
}

🧠 How It Works (Flow)
User Action → jQuery Event
→ AJAX Request → Express API
→ MySQL Database → JSON Response
→ UI Update (No Reload)

🎨 UI Preview

Light blue background

Simple form to add users

Button to show user list

Clean & beginner-friendly design

📌 Future Improvements

❌ Delete user

✏ Update user

🔍 Search user

✔ Input validation

🌙 Dark mode

🤝 Contribution

Feel free to fork this repository and improve the project.
Pull requests are welcome 😊

📄 License

This project is open-source and free to use for learning purposes.

⭐ Support

If you like this project, give it a ⭐ on GitHub!