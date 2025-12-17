import express from 'express';
import path from 'path';
import cors from 'cors';
import { ENV } from './config/env.js';


const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "*", // Allow all origins for now, or specify your Vercel URL
  credentials: true
}));

const __dirname = path.resolve();

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});
// make our app ready fro deployment 

if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../admin/dist')))
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname,"../admin","dist","index.html"));  
  });
}


app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT} `);
});  