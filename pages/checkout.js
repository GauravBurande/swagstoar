import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Checkout = ({ cart, addToCart, clearCart, removeFromCart, subTotal, user }) => {

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

  const [pinCode, setPinCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [toggleBtn, setToggleBtn] = useState(false)
  const [orderID, setOrderId] = useState(false)

  const handleChange = async (e) => {

    if (e.target.name === 'address') {
      setAddress(e.target.value)
    }
    else if (e.target.name === 'pincode') {
      setPinCode(e.target.value)

      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes(e.target.value)) {
          setCity(pinJson[e.target.value][0])
          setState(pinJson[e.target.value][1])
        } else {
          setCity("We don't")
          setState("deliver here.")
        }
      } else {
        setCity('')
        setState('')
      }
    }
  }


  const dummyPay = async () => {
    if (localStorage.getItem('token')) {
      let oid = Math.floor(Math.random() * Date.now());
      setOrderId(oid)
      const data = { cart, subTotal, oid, email: user.email, address, pinCode }
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/postorder`, {
        method: 'POST',
        headers: {
          "Content-Type": "application-json"
        },
        body: JSON.stringify(data)
      })

      let response = await res.json()

      if (!response.success) {
        toast.error(response.error, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      setTimeout(() => {
        if (response.success) {
          toast("This is just for my portfolio, there's no need to pay, I don't have any actual physical products to sell. Please click on view order and wait until I redirect you to the order confirmation page.", {
            position: "top-left",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setToggleBtn(true)
          setTimeout(() => {
            clearCart()
          }, 10000);
        }
      }, 100);



    } else {
      toast.error("You need to sign in first.", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const redirectToOrder = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`, {
      method: 'POST',
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(orderID)
    })

    let response = await res.json()

    toast("Please wait, redirecting....", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });


    setTimeout(() => {
      router.push('/order?id=' + response.id)
      setToggleBtn(false)
    }, 3000);
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
          autoClose={20000}
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
                  <input onChange={handleChange} value={user.email} type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
                </div>
              </div>
            </div>

            <div className="px-2 w-full">
              <div className=" mb-4">
                <label htmlFor="address" className="leading-7 text-sm text-gray-400">Address</label>
                <textarea onChange={handleChange} value={address} type="address" id="address" name="address" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                  <input onChange={handleChange} value={pinCode} type="text" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <p className='text-xs p-2'>Try banglore's pincode: 560017</p>
                </div>
              </div>
            </div>

            <div className="mx-auto flex">
              <div className="px-2 w-1/2">
                <div className="mb-4">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-400">City</label>
                  <input value={city} type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="mb-4">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-400">State</label>
                  <input value={state} type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
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
                          <div className='font-medium w-2/3 pr-6'>{cart[k].name}</div>
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
                {!toggleBtn && <button onClick={dummyPay} disabled={address.length < 3} className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex disabled:text-white text-black bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Pay</button>}
                {toggleBtn && <button onClick={redirectToOrder} className="lg:mt-2 xl:mt-0 items-center flex-shrink-0 inline-flex disabled:text-black text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">View Order</button>}
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
