import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application-json"
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            })

            let response = await res.json()
            setOrders(response.orders)
        }

        if (!localStorage.getItem('token')) {
            router.push('/')
        } else {
            fetchOrders()
        }
    }, [])

    const router = useRouter()

    return (
        <div className='bg-gray-900 text-white'>
            <div className="container items-center justify-center mx-auto">
                <h1 className='flex py-8 px-4 font-medium items-center justify-start text-2xl'>Your Orders</h1>
                <div className="items">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            {orders.length !== 0 &&
                                                <tr>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                        # ORDER ID
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                        Address
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                        Amount
                                                    </th>
                                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                                        Details
                                                    </th>
                                                </tr>}
                                        </thead>
                                        <tbody>
                                            {orders.length === 0 &&
                                                <tr className="text-white h-32 border-b transition duration-300 ease-in-out hover:bg-gray-800">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">No order</td>
                                                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                        There are no orders.
                                                    </td>
                                                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                        Please buy something.
                                                    </td>
                                                    <td className="text-sm text-blue-500 cursor-pointer font-light px-6 py-4 whitespace-nowrap">
                                                        <Link href={'/hoodies'}>Visit the shopping area.</Link>
                                                    </td>
                                                </tr>}
                                            {orders.map((orderItem) => {
                                                return (
                                                    <tr key={orderItem._id} className="text-white border-b transition duration-300 ease-in-out hover:bg-gray-800">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{orderItem.orderId}</td>
                                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                            {orderItem.email}
                                                        </td>
                                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                            {orderItem.address}
                                                        </td>
                                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                            {orderItem.amount}
                                                        </td>
                                                        <td className="text-sm text-blue-500 cursor-pointer font-light px-6 py-4 whitespace-nowrap">
                                                            <Link href={'/order?id=' + orderItem._id}>View</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })}

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

export default Orders
