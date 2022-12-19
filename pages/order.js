import React from 'react'
import Order from "../models/Order"
const mongoose = require('mongoose')
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = ({ order }) => {

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="container  -translate-y-20 px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">SWAGSTOAR</h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">Order ID: #{order.orderId}</h1>
              <p className="leading-relaxed mb-4 text-sm">Your order has been placed successfully.</p>

              {Object.keys(order.products).map((cartItem) => {
                const products = order.products

                return (
                  <div key={cartItem}>
                    <div className="orderItem">
                      <h2 className='text-lg text-white'>{cartItem}</h2>
                      <div className="flex border-t border-gray-800 py-2">
                        <span className="text-gray-500">Color</span>
                        <span className="ml-auto text-white">{products[cartItem].variant}</span>
                      </div>
                      <div className="flex border-t border-gray-800 py-2">
                        <span className="text-gray-500">Size</span>
                        <span className="ml-auto text-white">{products[cartItem].size}</span>
                      </div>
                      <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                        <span className="text-gray-500">Quantity</span>
                        <span className="ml-auto text-white">{products[cartItem].qty}</span>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">${order.amount}.00</span>
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/logo.png" />
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

  const id = context.query.id

  let order = await Order.findById(id)
  return {
    props: { order: JSON.parse(JSON.stringify(order)) }
  }
}

export default MyOrder
