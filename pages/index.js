import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsFillArrowRightSquareFill } from "react-icons/bs"
import { BiWorld } from "react-icons/bi"
import { RiCustomerService2Fill } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index => index - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index => index + 1
    setCurrentIndex(newIndex)
  }

  const slides = [
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow3.jpg?v=129585312461960446661508875741",
    },
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow2.jpg?v=101943486768698265101508875741"
    },
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow4.jpg?v=151179491050839487471508876810"
    }
  ]
  return (
    <>
      <div className="max-w-[100vw] h-[30vh] md:h-[35rem] relative group">
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-center bg-cover transition-all duration-500" />
        <div onClick={prevSlide}>
          <BsArrowLeftCircleFill className="text-2xl text-white hover:text-[2rem] md:text-5xl hidden group-hover:block hover:text-purple-500 transition-all md:hover:text-[3.5rem] absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer" />
        </div>
        <div onClick={nextSlide}>
          <BsArrowRightCircleFill className="text-2xl text-white hover:text-[2rem] md:text-5xl hidden group-hover:block hover:text-purple-500 transition-all md:hover:text-[3.5rem] absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer" />
        </div>
      </div>

      <div>
        <p className='py-3 text-center'>FREE SHIPPING ON ORDERS OVER $100</p>
      </div>
      <div>
        <p className='py-3 text-center bg-purple-500 text-white'>BUY SWAG FOR YOUR HACKATHONS 🚀</p>
      </div>

      <div className='flex justify-center items-center py-10 flex-wrap'>
        <div className='text-center overflow-hidden py-3'>
          <img src="https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/bannerhome_image1.jpg?v=173571093199059753591507534209" alt="breaking code" />
          <Link href={'/tshirts'}><p className='font-bold cursor-pointer hover:text-purple-500'>T-SHIRTS</p></Link>
        </div>
        <div className='text-center overflow-hidden py-3'>
          <img src="https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/bannerhome_image2.jpg?v=67734096113345905361507534209" alt="breaking code" />
          <Link href={'/hoodies'}><p className='font-bold cursor-pointer hover:text-purple-500'>HOODIES</p></Link>
        </div>
        <div className='text-center overflow-hidden py-3'>
          <img src="https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/bannerhome_image3.jpg?v=19766206500465796351507534209" alt="breaking code" />
          <Link href={'/hats'}><p className='font-bold cursor-pointer hover:text-purple-500'>HATS</p></Link>
        </div>
      </div>

      <div className='py-5 text-gray-400 bg-gray-900 '>
        <h2 className='text-center text-white py-3 font-bold text-3xl'>NEW PRODUCTS</h2>

        <section className="body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-h-[40vh] shadow-2xl">
                <Link href={`/product/learn-to-code`}>
                  <div className="block static h-55 rounded overflow-hidden">
                    <img alt="tshirt" className="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/1056/4958/products/mockup-0e03044e_1024x1024.jpg?v=1527664988" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">HOODIES</h3>
                    <h2 className="text-white title-font text-lg font-medium">Learn To Code Retro 80's Theme Pullover</h2>
                    <p className="mt-1">$35.00</p>
                  </div>
                </Link>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-h-[40vh] shadow-2xl">
                <Link href={`/product/hustle-pullover`}>
                  <div className="block static h-55 rounded overflow-hidden">
                    <img alt="tshirt" className="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/1056/4958/products/mockup-5b430a6b_1024x1024.jpg?v=1529125709" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">HOODIES</h3>
                    <h2 className="text-white title-font text-lg font-medium">Hustle Pullover</h2>
                    <p className="mt-1">$35.00</p>
                  </div>
                </Link>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-h-[40vh] shadow-2xl">
                <Link href={`/product/learn-to-code`}>
                  <div className="block static h-55 rounded overflow-hidden">
                    <img alt="tshirt" className="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/1056/4958/products/mockup-9987c01f_1024x1024.jpg?v=1527665005" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">TSHIRTS</h3>
                    <h2 className="text-white title-font text-lg font-medium">O'RLY? Forgetful Developer T-Shirt</h2>
                    <p className="mt-1">$18.00</p>
                  </div>
                </Link>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full min-h-[40vh] shadow-2xl">
                <Link href={`/product/learn-to-code`}>
                  <div className="block static h-55 rounded overflow-hidden">
                    <img alt="tshirt" className="object-cover object-center w-full h-full block" src="https://cdn.shopify.com/s/files/1/1056/4958/products/mockup-abcab8ea_1024x1024.jpg?v=1527664964" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs text tracking-widest title-font mb-1">HATS</h3>
                    <h2 className="text-white title-font text-lg font-medium">Ethereum Flexfit Cap</h2>
                    <p className="mt-1">$25.00</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">GO SHOPPING 🛍</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">You are going to see variaty of products here.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 text-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                    <TbTruckDelivery className='md:text-2xl hover:text-purple-500' />
                  </div>
                  <div className="flex space-x-2 items-center justify-center">
                    <h2 className="text-lg text-white font-medium title-font mb-2">FREE SHIPPING</h2>
                  </div>
                  <p className="leading-relaxed w-72 md:w-full text-base">On orders over $100 (*US Only)</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 text-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                    <RiCustomerService2Fill className='md:text-2xl hover:text-purple-500' />
                  </div>
                  <div className="flex space-x-2 items-center justify-center">
                    <h2 className="text-lg text-white font-medium title-font mb-2">GREAT CUSTOMER SERVICE</h2>
                  </div>
                  <p className="leading-relaxed w-72 md:w-full text-base">Although you'll never need it</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 text-center">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                    <BiWorld className='md:text-2xl hover:text-purple-500' />
                  </div>
                  <div className="flex space-x-2 items-center justify-center">
                    <h2 className="text-lg text-white font-medium title-font mb-2">WORLDWIDE SHIPPING</h2>
                  </div>
                  <p className="leading-relaxed w-72 md:w-full text-base">Actually only in Banglore</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
