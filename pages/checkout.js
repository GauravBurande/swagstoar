import React from 'react'
import Link from 'next/link';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className='container  text-gray-400 m-auto bg-gray-900'>
      <div className="px-4 md:w-1/3 mx-auto">
        <h1 className='text-sm px-2 py-8'>Checkout</h1>
        <h2 className='font-semibold text-xl my-4 px-2'>Delivery Details</h2>
        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="name" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className=" mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-400">Address</label>
            <textarea type="address" id="address" name="address" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-400">City</label>
              <input type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

        </div>
        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="state" className="leading-7 text-sm text-gray-400">State</label>
              <input type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-400">Pincode</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>

        <div className="cart-payment mx-auto">
          <h2 className='font-semibold text-xl px-4 mt-10'>Review Cart Items & Pay</h2>
          <div className="sideCart p-6">
            <ol>
              {Object.keys(cart) == 0 && <div className='my-4'>
                Your cart is empty.
              </div>}

              <div className="cartItems">
                {Object.keys(cart).map((k) => {
                  return <li key={k}>
                    <div className="item flex my-10">
                      <div className='font-medium w-2/3 md:w-auto pr-6'>{cart[k].name}</div>
                      <div className=' flex justify-center items-center space-x-3 text-3xl'>
                        <AiFillMinusCircle onClick={() => { removeFromCart(k, 1) }} className='text-purple-500 cursor-pointer' />
                        <span className='text-lg'>{cart[k].qty}</span>
                        <AiFillPlusCircle onClick={() => { addToCart(k, 1) }} className='text-purple-500 cursor-pointer' />
                      </div>
                    </div>
                  </li>
                })}
              </div>
            </ol>
            <div className="total font-bold mb-4">Amount: ${subTotal}</div>
            <button className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Pay </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
