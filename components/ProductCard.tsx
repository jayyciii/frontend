"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import Clock from "./Clock";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
  index: number;
  className?: string;
}

const ProductCard = ({ product, updateSignedInUser, index, className }: ProductCardProps) => {
  const extraClass = index === 3 ? "spanClass" : "col-span-2";
  return (
    <Link
      href={`/products/${product._id}`}
      className={`w-[100%] flex flex-col gap-4 ${className}`}
    >
      {/* <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-tl-lg rounded-br-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div> */}


      <div className="relative  rounded-[5px] ">
        <Image
          src={product.media[0]}
          alt="product"
          width={950}
          height={300}
          className="rounded-[4px] h-[300px] w-[100%] object-cover transition-transform ease-in-out"
        />
        <div className="absolute backdrop-blur-[15px] w-[350px] h-[200px] leading-[50px] shadow-lg border-b-[1px]  border-[#4b5563] rounded-[8px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-[#ea580c] text-base text-[26px] px-4 py-6 whitespace-nowrap hover:text-white  text-center ">{product.title}</div>
          <Clock />
          {/* <div className="flex flex-row justify-center mt-[15px] mx-7 gap-4 bg-[#ffffff80] rounded-[10px]">
            <div className="text-orange-600">{product.price} vnđ |</div>
            <div className="text-pink-600">Tour đáng giá |</div>
            <div className="text-black">6 khách |</div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
