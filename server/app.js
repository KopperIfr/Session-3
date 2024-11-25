// 1. Imports..

import express from 'express';
import dotenv from 'dotenv';
import controller from './controllers/controller.js';
import connectDB from './database/connection.js';


// 2. Initializing variables..
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;


// 3. Middleware functions..


// 4. Routes..
app.post('/sign-in', controller.signIn);
app.post('/sign-up', controller.signUp);
app.post('/sign-out', controller.signOut);


// 5. Server listening.. 
app.listen(3002, () => {
    console.log('Server listening on port 3002..');
});