import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingBag } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const Navbar = () => {

  const cartRef = useRef()

  const toggleCart = () => {
    if (cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.remove('translate-x-full')
    } else if (!cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.add('translate-x-full')
    }
  }

  return (
    <div className='flex  flex-col md:flex-row shadow-md text-gray-400 bg-gray-900 body-font px-5 py-2 justify-center md:justify-start items-center'>
      <div className="logo -mx-3 md:mx-0 flex items-center">
        <Image src="/logo.png" width={60} height={60} alt="Swagstoar" />
        <Link href='/'>
          <span className="ml-3 font-medium text-violet-400 text-xl">SWAGSTOAR</span>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex mx-8 mt-5 md:mt-0 font-semibold space-x-6'>
          <Link href='/tshirts'><li>Tshirts</li></Link>
          <Link href='/hoodies'><li>Hoodies</li></Link>
          <Link href='/stickers'><li>Stickers</li></Link>
          <Link href='/mugs'><li>Mugs</li></Link>
        </ul>
      </div>

      <div onClick={toggleCart} className="cart absolute right-0 top-7 mx-8">
        <GiShoppingBag className='text-2xl cursor-pointer' />
      </div>

      <div ref={cartRef} className="sideCart sm:w-1/2 md:w-1/3 h-full absolute top-0 right-0 shadow-lg bg-gray-800 px-14 py-20 transform transition-transform translate-x-full">
        <h2 className='text-xl font-bold py-5'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-8 right-8 cursor-pointer text-xl text-white"><GrClose /></span>
        <ol>
          <li>
            <div className="item flex my-10">
              <div className='w-2/3 font-medium'>Docker Kill - Unisex Jersey Short Sleeve Tee</div>
              <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
                <span className='text-lg'>1</span>
                <AiFillPlusCircle className='text-purple-500 cursor-pointer' />
              </div>
            </div>
          </li>

          <li>
            <div className="item flex my-10">
              <div className='w-2/3 font-medium'>Docker Kill - Unisex Jersey Short Sleeve Tee</div>
              <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
                <span className='text-lg'>1</span>
                <AiFillPlusCircle className='text-purple-500 cursor-pointer' />
              </div>
            </div>
          </li>

          <li>
            <div className="item flex my-10">
              <div className='w-2/3 font-medium'>Docker Kill - Unisex Jersey Short Sleeve Tee</div>
              <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
                <span className='text-lg'>1</span>
                <AiFillPlusCircle className='text-purple-500 cursor-pointer' />
              </div>
            </div>
          </li>

          <li>
            <div className="item flex my-10">
              <div className='w-2/3 font-medium'>Docker Kill - Unisex Jersey Short Sleeve Tee</div>
              <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
                <span className='text-lg'>1</span>
                <AiFillPlusCircle className='text-purple-500 cursor-pointer' />
              </div>
            </div>
          </li>

          <li>
            <div className="item flex my-10">
              <div className='w-2/3 font-medium'>Docker Kill - Unisex Jersey Short Sleeve Tee</div>
              <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                <AiFillMinusCircle className='text-purple-500 cursor-pointer' />
                <span className='text-lg'>1</span>
                <AiFillPlusCircle className='text-purple-500 cursor-pointer' />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
        <button className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex my-10 mx-4 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"><BsFillBagCheckFill className='mr-2'/>Checkout</button>
        <button className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex my-10 mx-4 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
