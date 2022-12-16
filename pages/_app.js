import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })

    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])

  const cartRef = useRef()

  const toggleCart = () => {
    if (cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.remove('translate-x-full')
    } else {
      cartRef.current.classList.add('translate-x-full')
    }
  }

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(Math.round(subt))
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)

    toast('Product added to the cart.', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const clearCart = () => {
    setCart({})
    saveCart({})

    toast('Products are removed from the cart.', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const removeFromCart = (itemCode, qty) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      console.log(newCart[itemCode])
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)

    toast('Product is removed from the cart.', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty: 1, price, name, size, variant }
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  const signout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())

    router.push('/')

    setTimeout(() => {
      toast('You are signed out successfully.', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 50);
  }

  return (
    <>
      <Head>
        <title>Swagstoar - for developers. by developers.</title>
        <meta name="description" content="Swagstoar.vercel.app - wear code t-shirts and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingBar
        color='#fff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={200}
      />
      {key && <Navbar signout={signout} user={user} key={key} cart={cart} toggleCart={toggleCart} cartRef={cartRef} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />}
      <Component cart={cart} buyNow={buyNow} toggleCart={toggleCart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
