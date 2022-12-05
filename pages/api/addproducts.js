// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/mongoose"
import Product from "../../models/Product"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                description: req.body[i].description,
                image: req.body[i].image,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save()
        }
        res.status(200).json({ success: 'product added to the database' })
    } else {
        res.status(400).json({ error: 'this method is not allowed' })
    }
}

export default connectDb(handler);