import connectDb from "../../middleware/mongoose"
import Order from "../../models/Order"
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const token = JSON.parse(req.body).token
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY)
        let orders = await (Order.find({ email: data.email }))

        res.status(200).json({ success: true, orders })
    } else {
        res.status(400).json({ success: false, message: "this method is not allowed" })
    }
}

export default connectDb(handler);