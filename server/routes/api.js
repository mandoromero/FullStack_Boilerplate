// Import core modules and Express
import express from "express";
import fs from "fs";             // File system to read/write JSON file
import path from "path";         // For working with file paths
import { fileURLToPath } from "url"; // Convert import.meta.url to a file path

// Create a new Express router
const router = express.Router();

// Convert import.meta.url to __dirname (since ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to db.json (used as a simple data store)
const dbPath = path.join(__dirname, "../data/db.json");

// ---------------- GET /message ----------------
// Reads the JSON file and returns the "message" value
router.get("/message", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  res.json({ message: data.message });
});

// ---------------- POST /message ----------------
// Updates the "message" in the JSON file
router.post("/message", (req, res) => {
  const { message } = req.body; // Get message from request body
  fs.writeFileSync(dbPath, JSON.stringify({ message }, null, 2)); // Save to db.json
  res.json({ success: true, message }); // Respond with confirmation
});

export default router;

/*
🧠 Quick summary:
- This router handles a minimal "message" API.
- GET /message → reads db.json and sends the message to the frontend.
- POST /message → updates db.json with a new message sent from the frontend.
- fs.readFileSync/fs.writeFileSync are used for simple file-based persistence (good for small projects/mock data).
- This router can be imported and mounted in server.js like:
    import apiRouter from './routes/api.js';
    app.use('/api', apiRouter);
*/
