import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg flex items-center justify-center h-64 overflow-hidden">
              <Image src="/logo.png" width={200} height={200} />
            </div>
            <h2 className='flex items-center justify-center text-4xl text-white font-medium'>Welcome to SWAGSTOAR!</h2>
            <p className='flex w-1/2 text-center mx-auto py-8 items-center justify-center'>This webapp is built just for my portfolio and to practice, build full stack skills and to learn more. This entire webapp was built as a portfolio project. This website is powered by NextJs + React + MongoDB (MENN stack). For the server side logic, I used NextJs built in SSR, and used TailwindCss for styling ;) !</p>
            <div className="flex flex-col sm:flex-row mt-2 items-center justify-center">
              <Link href={'/hoodies'}><button className='text-white text-sm rounded-sm p-2 bg-purple-500 focus:outline-none hover:bg-purple-700'>Explore Merch</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
