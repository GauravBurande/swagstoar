import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <h2 className='flex items-center justify-center text-4xl text-white font-medium'>You can contact us anywhere!</h2>
            <div className="rounded-lg flex items-center justify-center h-64 overflow-hidden">
              <Image src="/logo.png" width={200} height={200} />
            </div>
            <p className='flex items-center justify-center'>If you have any questions regarding your order, feel free to send email.</p>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">Corporate Address</h2>
                  <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                  <p> DEVSOC ENTERPRISE</p>
                  <p>Plot No. 13-A-2, EDC Complex, Patto Plaza, Panjim - Goa - 403001</p>
                </div>
              </div>
              <div className="sm:w-2/3 flex flex-col items-center justify-center sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p>Phone: 0832 2437470</p>
                <p>Email: contact@swagstoar.vercel.app</p>
                <p>Morning 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
