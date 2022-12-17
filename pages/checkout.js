import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Head from 'next/head';
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {

  // const initiatePayment = async () => {

  //   let txnToken;
  //   let oid = Math.floor(Math.random() * Date.now());

  //   // Get a transaction token
  //   const data = { cart, subTotal, oid, email: "email" }
  //   let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': "application-json"
  //     },
  //     body: JSON.stringify(data)
  //   })

  //   let response = await res.json()
  //   console.log(response)

  //   let config = {
  //     "root": "",
  //     "flow": "DEFAULT",
  //     "data": {
  //       "orderId": oid, /* update order id */
  //       "token": txnToken, /* update token value */
  //       "tokenType": "TXN_TOKEN",
  //       "amount": subTotal /* update amount */
  //     },
  //     "handler": {
  //       "notifyMerchant": function (eventName, data) {
  //         console.log("notifyMerchant handler function called");
  //         console.log("eventName => ", eventName);
  //         console.log("data => ", data);
  //       }
  //     }
  //   };
  //   // initialze configuration using init method
  //   window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
  //     // after successfully updating configuration, invoke JS Checkout
  //     window.Paytm.CheckoutJS.invoke();
  //   }).catch(function onError(error) {
  //     console.log("error => ", error);
  //   });
  // }

  const router = useRouter()

  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'address') {
      setAddress(e.target.value)
    }
  }

  const dummyPay = async () => {

    let oid = JSON.stringify(Math.floor(Math.random() * Date.now()));

    const data = { cart, subTotal, oid, email, address }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/postorder`, {
      method: 'POST',
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(data)
    })

    let response = await res.json()
    console.log(response)


    setTimeout(() => {
      toast("This is just for my portfolio, there's no need to pay, I don't have any actual physically products to sell.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 1300);

    router.push('/order')
  }

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous" /> */}
      <div className='bg-gray-900'>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className='container text-gray-400 m-auto'>
          <div className="px-4 md:w-1/3 mx-auto">
            <h1 className='text-sm px-4 py-8'>Checkout</h1>
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
                  <input onChange={handleChange} type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>

            <div className="px-2 w-full">
              <div className=" mb-4">
                <label htmlFor="address" className="leading-7 text-sm text-gray-400">Address</label>
                <textarea onChange={handleChange} type="address" id="address" name="address" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-400">Pincode</label>
                  <input type="text" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>

            <div className="mx-auto flex">
              <div className="px-2 w-1/2">
                <div className="mb-4">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-400">State</label>
                  <input value={state} type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="mb-4">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-400">City</label>
                  <input value={city} type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
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
                <button onClick={dummyPay} className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Pay </button>
                {/* <button onClick={initiatePayment} className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Pay </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
