// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ "email": req.body.email })

        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET_KEY);
            const decryptPass = bytes.toString(CryptoJS.enc.Utf8)
            if (req.body.password === decryptPass) {
                const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET_KEY);
                res.status(200).json({ success: true, token, email: user.email })
            }
            else {
                res.status(400).json({ success: false, error: 'Invalid credentials!' })
            }
        } else {
            res.status(400).json({ success: false, error: 'No user found!' })
        }
    } else {
        res.status(400).json({ error: 'this method is not allowed' })
    }
}

export default connectDb(handler);