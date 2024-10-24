'use client'
import React from 'react'
import Image from 'next/image'
import Map from '../../../public/Mobile/Map.jpg'
import Loc from '../../../public/Mobile/Location.svg'
import Call from '../../../public/Mobile/Call.svg'

const page = () => {
  return (
    <div className='bg-center w-screen bg-cover' style={{ backgroundImage: "url('/Mobile/Background.svg')", backgroundColor: "#222021" }} >
      <div className="pt-[130px] flex flex-col justify-center items-center lg:flex-row ">
        <div className=' lg:mr-20 space-y-10 md:-ml-[200px]'>
          <h1 className='text-[#F5F5F5] w-[60%] text-2xl font-bold ml-[-100px] lg:ml-0 pb-10 md:text-4xl font-KYvie lg:text-[70px] md:text-[50px]'>CONTACT</h1>
          <div className="text-[#F5F5F5] text-lg space-y-4 -ml-24 lg:ml-0 pb-14 ">
            <div className=" flex space-x-2 ">
              <Image src={Loc} alt='Location' className='md:w-[15%] lg:w-[10%]' />
              <p className='md:text-2xl lg:text-lg'>+420 000 000 000</p>
            </div>
            <div className="flex space-x-2">
              <Image src={Call} alt='Location' className='md:w-[15%] lg:w-[10%]'/>
              <p className='w-[70%] md:text-2xl lg:text-lg'>Na Plzeňce 1166/0 150 00</p>
            </div>
          </div>
        </div>
        <Image src={Map} alt='map' className='md:w-[80%] lg:w-[40%] rounded-xl' />
      </div>
      <div className="pb-20">
        <h1 className='text-[#F5F5F5] pl-5 text-2xl font-bold pt-16 md:text-4xl lg:ml-10 font-KYvie'>ANY QUESTIONS ?</h1>
        <div className=" lg:flex justify-evenly">
          <div>
            <p className='text-[#F5F5F5] pl-5 w-[81%] pt-5 md:text-xl lg:hidden'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
          </div>
          <div className=" lg:w-[70%]">
            <div className=" space-y-5 flex flex-col justify-center items-center pt-10">
              <input type="hello" id="" name="" placeholder="Your name" className="w-[90%] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-full" />
              <input type="hello" id="" name="" placeholder="Your telephone number" className="w-[90%] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-full" />
              <input type="hello" id="" name="" placeholder="Your question" className="w-[90%] pb-[200px] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-lg" />
            </div>
            <button className='bg-[#728BAD] font-bold pt-2 pb-2 pl-7 lg:ml-10 pr-7 m-5 rounded-full text-[#F5F5F5] md:text-2xl'>Send</button>
          </div>
          <div className='w-[50%] hidden lg:block mr-20 font-light'>
            <p className='text-[#F5F5F5] pl-5 pt-10 md:text-xl lg:block hidden w-[70%]'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
