import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import ChatBox from "@/components/ChatBox"
import ContactForm from "@/components/ContactForm"
import CurrencyConverter from "@/components/Currency"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"


import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Slideshow from "@/components/Slideshow";

export default function Home() {



  const slides = [
    {
      url: 'http://localhost:3001/thumbnail-travelhub.jpg',
    },
    {
      url: 'http://localhost:3001/vinhalong.jpg',
    },
    {
      url: 'http://localhost:3001/doinui.jpg',
    },
    {
      url: 'http://localhost:3001/halongbay.jpg',
    },
    {
      url: 'http://localhost:3001/dalat-city.jpg',
    },
  ];

  return (
    <>
      <div className="absolute z- h-[600px] w-[700px] bg-cyan-300 rounded-[30%] blur-[200px] left-[-20%] top-[-10%] "></div>

      <div className='max-w-[2000px] h-[600px] w-full m-auto py-4 px-4 relative group px-5'>
        <Slideshow slides={slides} />
        {/* left */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2x1 rounded-full p-3  text-white cursor-pointer'
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/* right */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3x2 rounded-full p-3  text-white cursor-pointer'
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      {/* <Image src="/thumbnail-travelhub.jpg" alt="banner" width={2000} height={1000} className="w-screen" /> */}
      <Collections />
      <p className="text-heading1-bold text-center">Tour sắp diễn ra</p>
      <ProductList />
      <ChatBox />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          style={{ marginTop: "600px" }}
          width="890"
          height="415"
          src="https://www.youtube.com/embed/4y5jVD9Qppk?si=htQS4HOQW2JIMz_M&amp;start=20"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <ContactForm />
      <CurrencyConverter />
    </>
  );
}

export const dynamic = "force-dynamic";
