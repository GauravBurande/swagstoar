// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body)

        let user = await User.findOne({ "email": req.body.email })

        const bytes = CryptoJS.AES.decrypt(user.password, 'haleluyah');
        const decryptPass = bytes.toString(CryptoJS.enc.Utf8)

        if (user) {
            if (req.body.password === decryptPass) {
                const token = jwt.sign({ email: user.email, name: user.name }, 'haleluyah');
                res.status(200).json({ success: true, token })
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