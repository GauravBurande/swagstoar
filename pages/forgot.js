import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [changeUI, setChangeUI] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const handleEmailInput = (e) => {
        e.preventDefault()
        setChangeUI(!changeUI)
    }

    const handlePassInput = async (e) => {
        e.preventDefault()

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgotpass`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        let response = await res.json()

        if (response.success) {
            toast('Your password is changed successfully.', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setTimeout(() => {
                router.push('/signin')
            }, 2200);
        } else {
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
    }

    const getEmailUI = <>
        <div className='bg-gray-900'>
            <div className="flex min-h-full text-white textwh items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto hidden md:block h-12 w-auto" src="/logo.png" alt="Your Company" />
                        <div className="font-medium hidden md:block text-center -ml-1 text-violet-400 text-xl">SWAGSTOAR</div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Enter your Email</h2>
                        <p className="mt-2 text-center text-sm">
                            Or
                            <Link href="/signin" className="font-medium text-purple-600 hover:text-purple-500"> Sign In</Link>
                        </p>
                    </div>
                    <form onSubmit={handleEmailInput} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="space-y-4 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-purple-900 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email address" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>


    const passwordUI = <>
        <div className='bg-gray-900'>
            <div className="flex min-h-full text-white textwh items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto hidden md:block h-12 w-auto" src="/logo.png" alt="Your Company" />
                        <div className="font-medium hidden md:block text-center -ml-1 text-violet-400 text-xl">SWAGSTOAR</div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Enter your new Password</h2>
                    </div>
                    <form onSubmit={handlePassInput} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="space-y-4 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="password" className="sr-only">Your new Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="password" required className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-purple-900 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your new Password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Set new password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

    return (
        <>
            {changeUI ? passwordUI : getEmailUI}
        </>

    )
}

export default Forgot
