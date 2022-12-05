import mongoose from "mongoose";

const connectDb = handler => (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
}

export default connectDb;