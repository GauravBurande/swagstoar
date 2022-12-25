import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";

const Stickers = ({ stickers }) => {
  return (
    <div className='bg-gray-900'>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {stickers.length == 0 && <p className='flex mx-auto px-10 items-center text-xl min-h-[40vh]'> Sorry to inform you that all of the STICKERS are currently out of stock. New stock is coming soon.</p>}
            {stickers.map((item) => {
              return (
                <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full min-h-[40vh] shadow-2xl">
                  <Link href={`/product/${item.slug}`}>
                    <div className="block static h-55 rounded overflow-hidden">
                      <img alt="tshirt" className="object-cover object-center w-full h-full block" src={item.image} />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">STICKERS</h3>
                      <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                      <p className="mt-1">${item.price}.00</p>
                    </div>
                  </Link>
                </div>)
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI)
  }

  let stickers = await (Product.find({ category: 'sticker' }))
  return {
    props: { stickers: JSON.parse(JSON.stringify(stickers)) }
  }
}

export default Stickers
