import mongoose from "mongoose";
const Mongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected Successfully`.bgGreen.white);
  } catch (error) {
    console.error("Database Connection Failed", error);
    process.exit(1);
  }
};
export default Mongoose;
