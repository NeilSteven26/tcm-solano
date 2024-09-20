import React, { useState } from "react";
import csr from "./../../public/BannerImages/csr.jpg"
import gcash from "./../../public/BannerImages/gcash.png"
import PayOnlineBanner from "./../../public/BannerImages/PayOnlineBanner.png"
import TCMrain from "./../../public/BannerImages/TCMrain.jpg"
import TCMWeb from "./../../public/BannerImages/TCMWeb.jpg"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
const Carousel = () => {
    const images = [

        TCMrain,
        TCMWeb,
        gcash,
        PayOnlineBanner,
        csr,


    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-full mx-auto">
            {/* Image */}
            <div className="">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full object-cover transition-all duration-500"
                />
            </div>

            {/* Left Arrow */}
            {/* <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                &lt;
            </button> */}
            <FaArrowCircleLeft onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 rounded-full text-white  p-1 lg:p-2 text-3xl lg:text-5xl" />

            {/* Right Arrow */}
            {/* <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                &gt;
            </button> */}
            <FaArrowCircleRight onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 rounded-full text-white p-1 lg:p-2 text-3xl lg:text-5xl" />

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex
                            ? "bg-white"
                            : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
