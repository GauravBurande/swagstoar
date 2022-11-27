import React from 'react'
import { useRouter } from 'next/router'

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>
      the slug is: {slug}
    </div>
  )
}

export default Slug
