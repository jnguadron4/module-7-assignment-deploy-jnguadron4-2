import express from 'express'
import type { Request, Response } from 'express';
import sqlite3 from "sqlite3";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// Port 5000 was not working. It was causing errors. Updated the port to 5001
const port = process.env.PORT || 5001;

// Database connection
const db = new sqlite3.Database("./db/assigment-5.db", (err) => { 
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Api routes
app.get("/api/data", (req: Request, res: Response) => {
  db.all("SELECT * FROM Projects", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });

      return;
    }

    res.json(rows);
  });
});

// Handle all other routes and return the React app
app.get("*", (req: Request, res: Response) => {
  res.send("Welcome to your backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});