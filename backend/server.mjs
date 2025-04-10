import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const app = express();
const PORT = 5000; // Hardcoded Port

app.use(express.json()); // Middleware to parse JSON
app.use(cors());  // Backend Frontend Connection

// Initialize SQLite Database
const db = await open({
    filename: './database.sqlite',  // SQLite database file
    driver: sqlite3.Database
});

// Create Users Table 
await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`);

console.log("✅ SQLite Database Connected!");

// 1️⃣ Register User
app.post('/signup', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        await db.run(
            `INSERT INTO users (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)`,
            [firstName, lastName, username, email, password]
        );
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Username or Email already exists!" });
    }
});

// 2️⃣ Login User
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and Password required!" });
    }

    try {
        const user = await db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password]);

        if (user) {
            res.json({ message: "Login successful!", user });
        } else {
            res.status(401).json({ error: "Invalid credentials!" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server error!" });
    }
});

// 3️⃣ Get All Users (For Testing)
app.get('/users', async (req, res) => {
    try {
        const users = await db.all("SELECT id, firstName, lastName, username, email FROM users");
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users!" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
