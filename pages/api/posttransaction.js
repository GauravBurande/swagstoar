const mongoose = require('mongoose')
import Order from "../../models/Order"

export default async function handler(req, res) {

    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGO_URI)
    }

    let orderID = req.body
    let theOrder = await Order.findOne({ orderId: orderID })
    let id = theOrder._id

    res.status(200).send({ message: "this api redirects to order page", id })
}