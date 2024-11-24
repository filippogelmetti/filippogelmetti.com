import { eventHandler, readBody } from "h3";
import sqlite3 from "sqlite3";

const initDatabase = () => {
  return new Promise<sqlite3.Database>((resolve, reject) => {
    const db = new sqlite3.Database("./emails.db.sqlite", (err) => {
      if (err) return reject(err);
      const createQuery = `
        CREATE TABLE IF NOT EXISTS email_submissions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          status TEXT NOT NULL,
          error_message TEXT,
          submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      db.run(createQuery, (err) => {
        if (err) return reject(err);
        resolve(db);
      });
    });
  });
};

const runQuery = (db: sqlite3.Database, query: string, params: any[]) => {
  return new Promise<void>((resolve, reject) => {
    db.run(query, params, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

export default eventHandler(async (req) => {
  if (req.method === "POST") {
    try {
      const body = await readBody(req);
      const { name, email, message } = body;

      if (!name || !email || !message) {
        throw new Error("All fields (name, email, message) are required.");
      }

      const db = await initDatabase();

      await runQuery(
        db,
        `INSERT INTO email_submissions (name, email, message, status, error_message)
         VALUES (?, ?, ?, ?, ?)`,
        [name, email, message, "pending", null]
      );

      return { success: true, message: "Submission saved successfully." };
    } catch (error) {
      //return { success: false, error: error.message || "An error occurred." };
    }
  } else {
    return { success: false, error: "Only POST requests are allowed." };
  }
});
