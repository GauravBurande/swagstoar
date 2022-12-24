import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    const email = req.body.email
    const encryptPass = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString()
    if (req.method === 'POST') {

        const updatingPass = await User.findOneAndUpdate({ email }, { "password": encryptPass })

        res.status(200).json({ success: true, updatingPass })
    } else {
        res.status(400).json({ success: false, error: 'this method is not allowed' })
    }
}

export default connectDb(handler);