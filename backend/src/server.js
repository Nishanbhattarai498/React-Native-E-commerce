import express from 'express';
import path from 'path';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import{ serve } from "inngest/express";
import {functions,inngest} from "./config/inngest.js";



const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "*", // Allow all origins for now, or specify your Vercel URL
  credentials: true
}));

const __dirname = path.resolve();

app.use(express.json())

app.use(clerkMiddleware());// Clerk middleware

app.use("/api/inngest",serve({client:inngest,functions}))

app.get("/api/health", (req, res) => {

  res.json({ status: "OK" });
});
// make our app ready for deployment 

if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../admin/dist')))
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname,"../admin","dist","index.html"));  
  });
}


app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
    connectDB();
}
  );
  