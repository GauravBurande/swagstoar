// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body)
        const { name, email } = req.body
        const encryptPass = CryptoJS.AES.encrypt(req.body.password, 'haleluyah').toString()
        let u = new User({ name, email, password: encryptPass })
        await u.save()

        res.status(200).json({ success: 'user added to the database' })
    } else {
        res.status(400).json({ error: 'this method is not allowed' })
    }
}

export default connectDb(handler);