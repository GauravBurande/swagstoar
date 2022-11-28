import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingBag } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='flex  flex-col md:flex-row shadow-md text-gray-400 bg-gray-900 body-font px-5 py-2 justify-center md:justify-start items-center'>
      <div className="logo flex items-center">
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

      <div className="cart absolute right-0 top-7 mx-8">
        <Link href={'/'}>
        <GiShoppingBag className='text-2xl'/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
