import Image ,{ StaticImageData } from 'next/image'
import React from 'react'


interface Component{
    imgData: StaticImageData,
    imgAlt: string,
    Stat: string
}

const Aspects = (props:Component) => {
  return (
    <div>
      <div className="flex flex-row space-y-2 md:space-y-5">
        <Image src={props.imgData} alt={props.imgAlt} className='pt-2 md:w-[30%] lg:w-[10%]'/>
        <p className='pl-2 text-[#F5F5F5] md:text-2xl font-medium w-[150px]'>{props.Stat}</p>
      </div>
    </div>
  )
}

export default Aspects
