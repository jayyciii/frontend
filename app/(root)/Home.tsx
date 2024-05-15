'use client'
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import ChatBox from "@/components/ChatBox";
import ContactForm from "@/components/ContactForm";
import CurrencyConverter from "@/components/Currency";
import Image from "next/image";


export default function Home() {
    return (
        <>
            <Image src="/thumbnail-travelhub.jpg" alt="banner" width={2000} height={1000} className="w-screen" />
            <Collections />
            <ProductList />
            <ChatBox />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <iframe
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
