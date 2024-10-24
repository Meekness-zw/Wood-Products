import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Mobile/Logo.svg'
import Loc from '../../../public/Mobile/Location.svg'
import Call from '../../../public/Mobile/Call.svg'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#222021] pb-10 lg:pb-5 relative">
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-t from-[#F5F5F5] to-transparent opacity-10"></div>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-x-10">
          <Image src={Logo} alt="logo" className="w-[40%] mt-10 lg:w-[15%] lg:p-10" />
          <div className="flex justify-center items-center space-x-3">
            <Image src={Loc} alt="Location icon" className="mt-[-20px] lg:mt-0" />
            <p className="text-[#F5F5F5] w-[200px] text-lg lg:pt-5">Na Plzeňce 1166/1 <span>Прага 5 - Смихов,15000</span></p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <Image src={Call} alt="Call icon" />
            <p className="text-[#F5F5F5] w-[200px] text-lg">+420 000 000 000</p>
          </div>
          <p className="text-[#F5F5F5] text-lg lg:hidden">Политика конфиденциальности</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer
