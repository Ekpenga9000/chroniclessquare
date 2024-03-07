import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDb = async () => { 
    mongoose.set('strictQuery', true); 

    if (isConnected) {
        console.log('using existing database connection');
        return;
    }; 

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: process.env.MONGODB_DB,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true; 
        console.log('new database connection');
    } catch (error) {
        console.log('error connecting to database', error);
    }
}