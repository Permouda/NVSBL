import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

const ShareButton = () => {
    const router = useRouter();
    const copyLink = () => {
        navigator.clipboard.writeText(`http://localhost:${router.query.handle}`);
        toast("copied to clipboard")
    }
  return (
    <>
    <div className='absolute cursor-pointer top-100 right-10 bg-transparenr p-2 rounded-md z-10 shadow-md ' onClick={copyLink}>
        <img className='w-4' src="/svg/share.svg" alt='share' />
    </div>
    </>
  )
}

export default ShareButton