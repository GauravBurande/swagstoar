import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    console.log("prevslide")
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index => index - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    console.log("nextslide")
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index => index + 1
    setCurrentIndex(newIndex)
  }

  const slides = [
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow3.jpg?v=129585312461960446661508875741",
    },
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow2.jpg?v=101943486768698265101508875741"
    },
    {
      "url": "https://cdn.shopify.com/s/files/1/1056/4958/t/4/assets/slideshow4.jpg?v=151179491050839487471508876810"
    }
  ]
  return (
    <>
      <div className="max-w-[100vw] h-[30vh] md:h-[35rem] relative group">
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-center bg-cover transition-all duration-500" />
        <div onClick={prevSlide}>
          <BsArrowLeftCircleFill className="text-2xl hover:text-[2rem] md:text-5xl hidden group-hover:block hover:text-purple-500 transition-all md:hover:text-[3.5rem] absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer" />
        </div>
        <div onClick={nextSlide}>
          <BsArrowRightCircleFill className="text-2xl hover:text-[2rem] md:text-5xl hidden group-hover:block hover:text-purple-500 transition-all md:hover:text-[3.5rem] absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer" />
        </div>
      </div>
    </>
  )
}
