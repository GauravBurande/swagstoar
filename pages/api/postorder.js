import connectDb from "../../middleware/mongoose"
import Order from "../../models/Order"
import pincodes from "../../pincodes.json"

const handler = async (req, res) => {
    const data = JSON.parse(req.body)
    if (!Object.keys(pincodes).includes(data.pinCode)) {
        res.status(400).json({ success: false, error: "Sorry, Currently we don't deliver to this place." })
        return
    }
    if (req.method == 'POST') {
        let order = new Order({
            email: data.email,
            orderId: data.oid,
            products: data.cart,
            address: data.address,
            amount: data.subTotal,
            status: 'pending'
        })

        await order.save()

        res.status(200).json({ success: true, message: "The order has been placed" })
    } else {
        res.status(400).json({ success: false, message: "This method is not allowed." })
    }
}

export default connectDb(handler);