import Link from 'next/link';
import React from 'react'

const SocialTree = ({social}) => {
    const {
        facebook,
        twitter,
        instagram,
        youtube,
        linkedin,
        github
    } = social;
    return (
        <>
            <div className="social flex flex-row justify-center my-4 pb-20">
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://twitter.com/${twitter}`}>
                    <img className='w-6' src="/svg/socials/twt.svg"/>
                </Link>
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://linkedin.com/${linkedin}`}>
                    <img className='w-6' src="/svg/socials/lnkdn.svg"/>
                </Link>
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://github.com/${github}`}>
                    <img className='w-6' src="/svg/socials/github.svg"/>
                </Link>
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://facebook.com/${facebook}`}>
                    <img className='w-6' src="/svg/socials/facebook.svg"/>
                </Link>
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://instagram.com/${instagram}`}>
                    <img className='w-6' src="/svg/socials/instagram.svg"/>
                </Link>
                <Link className=' rounded-full p-2 transition-all duration-500 hover:scale-110 shadow  mx-1 select-none' target='_blank' href={`https://youtube.com/${youtube}`}>
                    <img className='w-6' src="/svg/socials/yt.svg"/>
                </Link>
                
                
            </div>
        </>
    )
}

export default SocialTree