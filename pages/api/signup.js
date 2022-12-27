// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body
        const encryptPass = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString()
        let u = new User({ name, email, password: encryptPass })
        await u.save()

        res.status(200).json({ success: true, message: 'user added to the database' })
    } else {
        res.status(400).json({ error: 'this method is not allowed' })
    }
}

export default connectDb(handler);