import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="fixed bottom-5 left-1/2 -translate-x-1/2 ">
      <div className=' p-4'>
      <Link className='flex flex-row items-center' target='_blank' href="https://linktr.ee/permouda">
      <img className='hover:rotate-180 duration-500' src="/images/favicon.ico" />
        {/* <h5 className="text-yellow pl-4 font-bold">Try NVSBL</h5> */}
      </Link>
      </div>
    </footer>
  )
}

export default Footer