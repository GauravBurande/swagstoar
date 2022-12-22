import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GiShoppingBag } from 'react-icons/gi';
import { CgReorder } from 'react-icons/cg';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import Link from 'next/link';

const Myaccount = ({ toggleCart, user }) => {

    const [myDetails, setMyDetails] = useState()
    const [preview, setPreview] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }

        const fetchUser = async () => {
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(user.email)
            })

            let response = await res.json()
            setMyDetails(response.userDetails)
        }

        fetchUser()
    }, [])

    const toggleDetails = () => {
        setPreview(!preview)
    }

    return (
        <div>
            <div className="container">
                <section className="text-gray-400 body-font bg-gray-900">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">YOUR ACCOUNT</h1>
                            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Hello, {myDetails && myDetails.name}</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                                        <GiShoppingBag className='md:text-2xl hover:text-purple-500' />
                                    </div>
                                    <div className="flex space-x-2 items-center justify-between">
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Visit Your Cart</h2>
                                        <BsFillArrowRightSquareFill onClick={toggleCart} className='md:text-3xl cursor-pointer flex items-center text-purple-400 hover:text-purple-500' />
                                    </div>
                                    <p className="leading-relaxed w-72 text-base">Check your cart, Happy Shopping!</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                                        <svg fill="none" stroke="currentColor" stroke-line-cap="round" stroke-line-join="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex space-x-2 items-center justify-between">
                                        <h2 className="text-lg text-white font-medium title-font mb-2">See Account Details</h2>
                                        <BsFillArrowRightSquareFill onClick={toggleDetails} className={`md:text-3xl cursor-pointer flex items-center transition-all ${preview && 'rotate-90'} text-purple-400 hover:text-purple-500`} />
                                    </div>
                                    <p className="leading-relaxed w-72 text-base">click to preview your account details</p>
                                </div>
                                <div className={`flex items-center transition-all ${!preview && 'opacity-0'} ${!preview && '-translate-y-10'} justify-center space-x-2 my-4`}>
                                    <h3 className='text-xl transition-opacity font-medium text-white'>Your Email</h3>
                                    <p>{myDetails.email}</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-4">
                                        <CgReorder className='md:text-2xl hover:text-purple-500' />
                                    </div>
                                    <div className="flex space-x-2 items-center justify-between">
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Check your Orders</h2>
                                        <Link href={'/orders'}>
                                            <BsFillArrowRightSquareFill className='md:text-3xl cursor-pointer flex items-center text-purple-400 hover:text-purple-500' />
                                        </Link>
                                    </div>
                                    <p className="leading-relaxed w-72 text-base">Click to see your orders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Myaccount
