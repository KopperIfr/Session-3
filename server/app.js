import express from 'express';
import dotenv from 'dotenv';
import controller from './controllers/controller.js';

dotenv.config();
const app = express();

app.post('/sign-in', controller.signIn);
app.post('/sign-up', controller.signUp);
app.post('/sign-out', controller.signOut);

app.listen(3002, () => {
    console.log('Server listening on port 3002..');
});