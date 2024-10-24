import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Mobile/Logo.svg'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => { 
    return (
        <div className='bg-[#1E0C06] rounded-b-2xl absolute z-10 w-[100%] top-0'>
            <div className="p-5 md:p-10 flex justify-between items-center">
                <Link href="/"><Image src={Logo} alt='Logo' className='' /></Link>
                <div className="text-[#F5F5F5] text-lg space-x-5 hidden lg:block font-semibold">
                    <Link href="/gallery" className='hover:text-xl hover:text-[#A3B8D7]'>Gallery</Link>
                    <Link href="/prices" className='hover:text-xl hover:text-[#A3B8D7]'>Prices for services</Link>
                    <Link href="/about" className='hover:text-xl hover:text-[#A3B8D7]'>About us</Link>
                    <Link href="/contact" className='hover:text-xl hover:text-[#A3B8D7]' >Contact</Link>
                </div>
                <Menu />
            </div>
        </div>
    )   
}

export default Navbar
