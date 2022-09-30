import mongoose from 'mongoose';

const connectDB = async (url: string) => {
  const client = await mongoose.connect(url);
  console.log(`MongoDB Connected:${client.connection.host}`.cyan.underline);
};

export default connectDB;
