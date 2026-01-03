 import cors from 'cors';
import 'dotenv/config';
import express from 'express';

// ⭐ ADD CLERK MIDDLEWARE
import { clerkMiddleware } from "@clerk/express";

const app = express();
const port = process.env.PORT || 4000;

// ENABLE CREDENTIALS FOR CLERK COOKIE SESSION
app.use(cors({
    origin: "http://localhost:5173",     // change to frontend URL in production
    credentials: true
}));

//Clerk middleware globally (does NOT protect routes)
app.use(clerkMiddleware());

// Test route
app.get('/', (req, res) => {
    res.send('API Working with Clerk Auth');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});