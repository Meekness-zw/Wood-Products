'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logs from '../../public/Mobile/Logs.svg'
import Stairs from '../../public/Mobile/Stairs.jpg'
import Table from '../../public/Mobile/Table.jpg'
import Craft from '../../public/Mobile/Craft.jpg'
import Oak from '../../public/Mobile/Oak.jpg'
import Ash from '../../public/Mobile/Ash.jpg'
import Buk from '../../public/Mobile/Buk.jpg'
import Aspects from './components/Aspects'
import Check from '../../public/Mobile/Check.svg'
import Cross from '../../public/Mobile/Cross.svg'
import Unit from '../../public/Mobile/Kitchen-unit.jpg'
import Case from '../../public/Mobile/Staircase.jpg'
import Worker from '../../public/Mobile/Worker.svg'
import Sketch from '../../public/Mobile/Sketch.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Tools from '../../public/Mobile/Tools.jpg'
import Office from '../../public/Mobile/pexels-elijah-pilchard-269100825-12792218.jpg'

const Page = () => {  // Change here
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
        <div className="relative bg-cover bg-center w-[100%] z-8"
            style={{ backgroundImage: "url('/Mobile/Background.svg')", backgroundColor: "#222021" }} >
            <Image src={Logs} alt='Stack of logs' className='w-[80%] md:w-[70%] lg:w-[60%]' />
            <div className="bg-[#1E0C06] rounded-l-[60px] w-[87%] lg:w-[70%] absolute right-0 top-[120px] lg:top-[600px] md:top-[300px] lg:flex">
                <div className="ml-5 lg:pt-10 lg:pb-10">
                    <h1 className='flex flex-col text-2xl md:text-6xl lg:w-[30%] font-extrabold text-[#F5F5F5] pl-4 pt-12 font-KYvie'>SOLID WOOD <span>PRODUCTS</span></h1>
                    <p className='text-[#FFDBBB] w-[65%] pt-5 pl-5 md:text-2xl md:w-[60%]'>Oak, beech, ash from <span className='font-bold'>1700 CZK</span> per m3</p>
                    <button className='text-[#F5F5F5] font-bold pl-5 pr-5 md:pr-10 md:pl-10 md:pt-2 md:pb-2 bg-[#728BAD] rounded-full ml-4 mt-3 md:text-2xl md:mt-10 md:mb-10'>Order</button>
                </div>
                <div className="">
                    <div className='h-[1px] w-[90%] bg-[#F5F5F5] ml-[14px] mt-14 mb-10 lg:w-1 lg:h-[80%] lg:mt-[20px]'></div>
                    <Image src={Stairs} alt='Stairs' className='absolute left-[500px] bottom-14 md:w-[25%] rounded-[30px] lg:w-[15%] md:right-5 md:bottom-24 lg:bottom-32' />
                    <Image src={Table} alt='Table' className='absolute left-[35px] bottom-[-62px] md:w-[25%] rounded-[30px] lg:w-[15%] md:bottom-[-170px] lg:left-[690px] lg:bottom-7' />
                    <Image src={Craft} alt='Craft' className='absolute right-[40px] bottom-[-130px] rounded-[30px] md:w-[25%] lg:w-[15%] md:right-[80px] md:bottom-[-270px] lg:top-[50px] lg:right-[140px]' />
                </div>
            </div>
            <div className="pt-[170px]">
                <h1 className='text-[#F5F5F5] w-[60%] pl-5 text-2xl font-bold md:text-4xl font-KYvie'>THE WOOD WE WORK WITH</h1>
                <div className="flex overflow-x-auto pt-20 space-x-5 justify-between pl-5 lg:justify-evenly lg:items-center">
                    <div className="min-w-[150px] md:pl-10">
                        <Image src={Oak} alt='Oak wood' className='md:w-[100%] rounded-[50px]' />
                        <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Oak</h1>
                        <div className="">
                            <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
                            <Aspects imgData={Check} imgAlt='tick' Stat='Beautiful texture' />
                            <Aspects imgData={Check} imgAlt='tick' Stat='Water resistant' />
                            <Aspects imgData={Cross} imgAlt='x' Stat='Expensive' />
                        </div>
                    </div>
                    <div className="min-w-[150px] pt-10 md:pt-20">
                        <Image src={Buk} alt='Buk wood' className='md:w-[100%] rounded-[50px]' />
                        <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Buk</h1>
                        <div className="">
                            <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
                            <Aspects imgData={Cross} imgAlt='tick' Stat='Hard to handle' />
                        </div>
                    </div>
                    <div className="min-w-[150px]">
                        <Image src={Ash} alt='Ash Wood' className='md:w-[100%] rounded-[50px]' />
                        <h1 className='text-2xl text-[#F5F5F5] font-bold p-[20px]'>Ash</h1>
                        <div className="">
                            <Aspects imgData={Check} imgAlt='tick' Stat='Durability' />
                            <Aspects imgData={Cross} imgAlt='tick' Stat='Hard to handle' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full flex flex-col justify-center items-center pt-[130px]">
                <h1 className='text-[#F5F5F5] w-[60%] text-2xl font-bold ml-[-100px] pb-20 md:text-4xl font-KYvie'>OUR WORK</h1>

                <div className="relative w-[90%] flex justify-center items-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 bg-[#728BAD] p-3 rounded-full text-white z-10 hover:bg-[#F5F5F5] hover:text-[#222021]"
                    >
                        <FiChevronLeft size={30} />
                    </button>
                    <div className="w-[600px] h-[400px] overflow-hidden rounded-[30px]">
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
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#728BAD]' : 'bg-[#F5F5F5]'
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="pt-24 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <h1 className='pl-5 text-[#F5F5F5] w-[70%] text-2xl font-bold md:text-4xl lg:pl-[200px] font-KYvie'>ADVANTAGES WORKING WTH US</h1>
                <div className="flex flex-col md:justify-center md:items-center lg:justify-center lg:items-center">
                    <p className='text-[#F5F5F5] p-5 md:text-2xl lg:hidden'>In-house carpentry production <span className='block pt-3 pb-3'>We only treat wood with environmentally friendly and safe products</span> Prices from the manufacturer, no extra charges</p>
                    <div className="flex flex-col justify-center items-center pt-10 space-y-10 lg:flex-row lg:space-x-10">
                        <Image src={Case} alt='Stair case' className='md:w-[600px] lg:rounded-[50px] lg:ml-20 lg:w-[40%] rounded-[30px]' />
                        <p className='text-[#F5F5F5] p-5 md:text-2xl hidden lg:block lg:pb-[100px] lg:mr-20 font-light lg:w-[30%]'>In-house carpentry production <span className='block pt-3 pb-3 lg:pt-10 lg:pb-10'>We only treat wood with environmentally friendly and safe products</span> Prices from the manufacturer, no extra charges</p>
                    </div>
                    <button className='text-white font-bold pl-10 pr-10 pt-2 md:mt-10 pb-2 bg-[#728BAD] w-[50%] rounded-full md:text-2xl'>Receive a consultaion</button>
                </div>
            </div>
            <div className="bg-[#1E0C06] overflow-hidden rounded-r-3xl w-[90%] mt-24 relative lg:flex lg:justify-evenly">
                <div className="lg:ml-32 lg:font-light">
                    <h1 className='text-[#F5F5F5] w-[60%] pl-8 text-2xl font-bold pt-16 md:text-4xl font-KYvie'>ABOUT US</h1>
                    <p className='text-[#F5F5F5] pl-8 w-[90%] mt-12 md:text-2xl lg:w-[50%]'><span className='font-bold'>BIO CWT</span>  - we manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
                </div>
                <div className=" lg:flex lg:flex-col lg:ml-[-400px] lg:mr-20">
                    <div className="flex justify-center items-center">
                        <Image src={Worker} alt='Wood worker' className='md:w-[60%] md:mt-5 lg:w-[900px]' />
                    </div>
                    <Image src={Sketch} alt='worker drawing' className='ml-[150px] md:ml-[300px] lg:ml-44 mt-5 mb-6 md:w-[30%] lg:w-[150px]' />
                </div>
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

export default Page;  // Change here
