import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import signupRouter from './Rout/signup';
import signinRouter from './Rout/signin';

const app = express();

app.use(express.json());

app.use('/user', signupRouter);

app.use('/user', signinRouter);

const Mongo = process.env.MONGO_URL;

async function main() {
    try {
        const connected = await mongoose.connect(Mongo || '');
        console.log('connected to mongodb');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

// Call the MongoDB connection function
main();

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
