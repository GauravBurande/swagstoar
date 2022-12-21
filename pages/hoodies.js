import React from 'react'
import Link from 'next/link'
import Product from "../models/Product"
import mongoose from "mongoose";

const Hoodies = ({ hoodies }) => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {hoodies.length == 0 && <p className='flex mx-auto px-10 items-center text-xl h-60'>Sorry to inform you that all of the HOODIES are currently out of stock. New stock is coming soon.</p>}
            {hoodies.map((item) => {
              return (
                <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl">
                  <Link href={`/product/${item.slug}`}>
                    <div className="block static h-55 rounded overflow-hidden">
                      <img alt="tshirt" className="object-cover object-center w-full h-full block" src={item.image} />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">HOODIES</h3>
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

  let hoodies = await (Product.find({ category: 'hoodie' }))
  return {
    props: { hoodies: JSON.parse(JSON.stringify(hoodies)) }
  }
}

export default Hoodies
