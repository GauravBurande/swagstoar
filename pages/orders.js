import React, { useEffect } from 'react'
import Order from "../models/Order"
import mongoose from "mongoose";
import { useRouter } from 'next/router';

const Orders = ({ user, orders }) => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const router = useRouter()

    return (
        <div className='bg-gray-900 text-white'>
            <div className="container items-center justify-center mx-auto">
                <h1 className='flex py-8 font-medium items-center justify-start text-2xl'>Your Orders</h1>
                <div className="items">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                    #
                                                </th>
                                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                    First
                                                </th>
                                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                    Last
                                                </th>
                                                <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                    Handle
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-white border-b transition duration-300 ease-in-out hover:bg-gray-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">1</td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Mark
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Otto
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    @mdo
                                                </td>
                                            </tr>
                                            <tr className="text-white border-b transition duration-300 ease-in-out hover:bg-gray-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">2</td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Jacob
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Thornton
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    @fat
                                                </td>
                                            </tr>
                                            <tr className="text-white border-b transition duration-300 ease-in-out hover:bg-gray-800">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">3</td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Larry
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    Wild
                                                </td>
                                                <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                    @twitter
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGO_URI)
    }

    let orders = await (Order.find())

    return {
        props: { orders: JSON.parse(JSON.stringify(orders)) }
    }
}

export default Orders
