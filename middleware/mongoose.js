import mongoose from "mongoose";

const connectDb = handler => (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log('mongo already connected')
        return handler(req, res)
    }
    mongoose.connect(process.env.MONGO_URI)
    console.log('mongo connected')
    return handler(req, res);
}

export default connectDb;