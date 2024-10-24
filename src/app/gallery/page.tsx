'use client';
import React, { useState } from 'react';
import Unit from '../../../public/Mobile/Kitchen-unit.jpg';
import Image from 'next/image';
import Aspects from '../components/Aspects';
import Check from '../../../public/Mobile/Check.svg';
import Cross from '../../../public/Mobile/Cross.svg';
import Oak from '../../../public/Mobile/Oak.jpg';
import Buk from '../../../public/Mobile/Buk.jpg';
import Ash from '../../../public/Mobile/Ash.jpg';
import Tools from '../../../public/Mobile/Tools.jpg';
import Office from '../../../public/Mobile/pexels-elijah-pilchard-269100825-12792218.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Page = () => { // Changed 'page' to 'Page'
  const images = [Tools, Unit, Office];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='bg-center bg-cover w-screen' style={{ backgroundImage: "url('/Mobile/Background.svg')", backgroundColor: "#222021" }}>
      <div className="relative w-full flex flex-col justify-center items-center pt-[130px]">
        <h1 className='text-[#F5F5F5] w-[60%] text-2xl font-bold ml-[-100px] pb-20 md:text-4xl font-KYvie'>OUR WORK</h1>

        <div className="relative w-[90%] flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-[#728BAD] p-3 rounded-full text-white z-10 hover:bg-[#F5F5F5] hover:text-[#222021]"
          >
            <FiChevronLeft size={30} />
          </button>
          <div className="w-[600px] h-[400px] overflow-hidden rounded-lg">
            <Image
              src={images[currentIndex]}
              alt="Carousel Image"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-[#728BAD] p-3 rounded-full text-white z-10 hover:bg-[#F5F5F5] hover:text-[#222021]"
          >
            <FiChevronRight size={30} />
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#728BAD]' : 'bg-[#F5F5F5]'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="pt-[130px]">
        <h1 className='text-[#F5F5F5] w-[60%] pl-5 text-2xl font-bold md:text-4xl font-KYvie'>THE WOOD WE WORK WITH</h1>
        <div className="flex overflow-x-auto pt-20 space-x-5 justify-between pl-5 lg:justify-evenly lg:items-center">
          <div className="min-w-[150px] md:pl-10">
            <Image src={Oak} alt='Oak wood' className='md:w-[100%] rounded-[50px]' />
            <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Oak</h1>
            <div>
              <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
              <Aspects imgData={Check} imgAlt='tick' Stat='Beautiful texture' />
              <Aspects imgData={Check} imgAlt='tick' Stat='Water resistant' />
              <Aspects imgData={Cross} imgAlt='x' Stat='Expensive' />
            </div>
          </div>
          <div className="min-w-[150px] pt-10 md:pt-20">
            <Image src={Buk} alt='Buk wood' className='md:w-[100%] rounded-[50px]' />
            <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Buk</h1>
            <div>
              <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
              <Aspects imgData={Cross} imgAlt='x' Stat='Hard to handle' />
            </div>
          </div>
          <div className="min-w-[150px]">
            <Image src={Ash} alt='Ash Wood' className='md:w-[100%] rounded-[50px]' />
            <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Ash</h1>
            <div>
              <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
              <Aspects imgData={Cross} imgAlt='x' Stat='Hard to handle' />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <h1 className='text-[#F5F5F5] pl-5 text-2xl font-bold pt-16 md:text-4xl lg:ml-10 font-KYvie'>ANY QUESTIONS ?</h1>
        <div className="lg:flex justify-evenly">
          <div>
            <p className='text-[#F5F5F5] pl-5 w-[81%] pt-5 md:text-xl lg:hidden'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
          </div>
          <div className="lg:w-[70%]">
            <div className="space-y-5 flex flex-col justify-center items-center pt-10">
              <input type="text" placeholder="Your name" className="w-[90%] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-full" />
              <input type="tel" placeholder="Your telephone number" className="w-[90%] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-full" />
              <input type="text" placeholder="Your question" className="w-[90%] pb-[200px] p-3 bg-transparent border-[2px] border-[#728BAD] rounded-lg" />
            </div>
            <button className='bg-[#728BAD] font-bold pt-2 pb-2 pl-7 lg:ml-10 pr-7 m-5 rounded-full text-[#F5F5F5] md:text-2xl'>Send</button>
          </div>
          <div className='w-[50%] hidden lg:block mr-20 font-light'>
            <p className='text-[#F5F5F5] pl-5 pt-10 md:text-xl lg:block hidden w-[70%]'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page; // Changed 'page' to 'Page'
