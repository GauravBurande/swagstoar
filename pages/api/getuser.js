import connectDb from "../../middleware/mongoose"
import User from "../../models/User"

const handler = async (req, res) => {
    const email = req.body
    if (req.method === 'POST') {

        const userDetails = await User.findOne({ email })

        res.status(200).json({ success: true, userDetails })
    } else {
        res.status(400).json({ success: false, error: 'this method is not allowed' })
    }
}

export default connectDb(handler);