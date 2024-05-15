"use client"
import React, { useEffect, useState } from 'react';

interface Slide {
    url: string;
}


const Slideshow = ({ slides }: { slides: Slide[] }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div
            style={{ backgroundImage: `url(${slides[currentSlideIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-700'
        ></div>
    );
};

export default Slideshow;
