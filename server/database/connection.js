import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the Database');
    } catch (error) {
        console.log('Error connecting to database: ', error);
    }
}


export default connectDB;