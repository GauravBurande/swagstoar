import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingBag } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal, toggleCart, cartRef, user, signout }) => {

  const router = useRouter()

  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleCheckout = () => {
    subTotal != 0 ? toggleCart() : emptyCart()
    if (user.value && subTotal != 0) {
      router.push('/checkout')
    } else {
      setTimeout(() => {
        toast('Please sign in first!', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, 1000);
    }
  }

  const emptyCart = () => {
    setTimeout(() => {
      toast('The cart is empty!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 100);
  }

  return (
    <div className='flex sticky z-10 top-0 flex-col md:flex-row shadow-2xl text-gray-400 bg-gray-900 body-font px-5 py-2 justify-center md:justify-start items-start md:items-center'>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="logo md:mx-0 flex items-center">
        <Image src="/logo.png" width={50} height={50} alt="Swagstoar" />
        <Link href='/'>
          <span className="ml-3 font-medium focus:outline-none text-violet-400 md:text-xl">SWAGSTOAR</span>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex mx-8 mt-5 md:mt-0 font-semibold space-x-6'>
          <Link className='hover:text-purple-500' href='/tshirts'><li>Tshirts</li></Link>
          <Link className='hover:text-purple-500' href='/hoodies'><li>Hoodies</li></Link>
          <Link className='hover:text-purple-500' href='/stickers'><li>Stickers</li></Link>
          <Link className='hover:text-purple-500' href='/hats'><li>Hats</li></Link>
        </ul>
      </div>

      <div className="cart absolute right-0 top-3 md:top-4 mx-4 md:mx-8 flex items-center space-x-3">
        {user.value && <MdAccountCircle onClick={toggleDropdown} className='md:text-2xl hover:text-purple-500 cursor-pointer' />}
        {dropdown && <div className="absolute -right-3 top-9 rounded-sm px-4 py-2 w-32 bg-white text-black text-sm">
          <ul className='cursor-pointer'>
            <Link href={'/myaccount'}><li className='py-1 hover:text-purple-500'>My Account</li></Link>
            <Link href={'/orders'}><li className='py-1 hover:text-purple-500'>Orders</li></Link>
            <a onClick={() => { signout(), toggleDropdown() }}><li className='py-1 hover:text-purple-500'>Sign Out</li></a>
          </ul>
        </div>}
        {!user.value && <Link href={'/signin'}>
          <button className='text-white text-sm rounded-sm p-2 bg-purple-500 focus:outline-none hover:bg-purple-700'>Sign In</button>
        </Link>}
        <GiShoppingBag onClick={toggleCart} className='md:text-2xl hover:text-purple-500 cursor-pointer' />
      </div>

      <div ref={cartRef} className={`sideCart overflow-y-scroll sm:w-1/2 md:w-1/3 h-[100vh] fixed top-0 right-0 shadow-lg bg-gray-800 px-14 py-20 transform transition-transform translate-x-full`}>
        <h2 className='text-xl font-bold py-5 text-purple-700'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-8 right-6 cursor-pointer text-xl text-white"><GrClose /></span>
        <ol>
          {Object.keys(cart) == 0 && <div className='my-4 text-white'>
            Your cart is empty.
          </div>}

          <div className="cartItems">
            {Object.keys(cart).map((k) => {
              return <li key={k}>
                <div className="item flex my-10">
                  <div className='w-2/3 font-medium'>{cart[k].name}</div>
                  <div className='w-1/3 flex justify-center items-center space-x-3 text-3xl'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1) }} className='text-purple-500 cursor-pointer' />
                    <span className='text-lg'>{cart[k].qty}</span>
                    <AiFillPlusCircle onClick={() => { addToCart(k, 1) }} className='text-purple-500 cursor-pointer' />
                  </div>
                </div>
              </li>
            })}
          </div>
          <div className="total font-bold mb-4">Amount: ${subTotal}</div>

        </ol>
        <div className="flex">
          <button onClick={handleCheckout} className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 text-black inline-flex my-10 mr-4 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"><BsFillBagCheckFill className='mr-2' />Checkout</button>
          <button onClick={() => { if (subTotal != 0) { clearCart() } else { emptyCart(), toggleCart() } }} className="lg:mt-2 xl:mt-0 items-center text-black flex-shrink-0 inline-flex my-10 mx-4 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
