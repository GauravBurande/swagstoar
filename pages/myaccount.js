import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Myaccount = () => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])

    const router = useRouter()

    return (
        <div>
            Myaccount
        </div>
    )
}

export default Myaccount
