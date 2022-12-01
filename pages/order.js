import React from 'react'

const Order = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">SWAGSTOAR</h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">Order ID: #8977</h1>
              <p className="leading-relaxed mb-4 text-sm">Your order has been placed successfully.</p>
              <div className="orderItem">
                <h2 className='text-lg text-white'>Docker Kill - Unisex Jersey Short Sleeve Tee</h2>
                <div className="flex border-t border-gray-800 py-2">
                  <span className="text-gray-500">Color</span>
                  <span className="ml-auto text-white">Blue</span>
                </div>
                <div className="flex border-t border-gray-800 py-2">
                  <span className="text-gray-500">Size</span>
                  <span className="ml-auto text-white">Medium</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                  <span className="text-gray-500">Quantity</span>
                  <span className="ml-auto text-white">4</span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">$58.00</span>
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order
