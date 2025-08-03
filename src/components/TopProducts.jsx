import React from "react";
import Image1 from "../assets/Products/Image1.webp";
import Image2 from "../assets/Products/Image2.png";
import Image3 from "../assets/Products/Image3.png";
import image4 from "../assets/Products/Image4.png";
import {FaStar} from "react-icons/fa6"


const ProductsData = [
    {
        id:1,
        img:Image1,
        title:"Casual Wear",
        description:"Explore our collection of casual wear that combines comfort and style for everyday outfits.",
        price: "$29.99",
    },
    {
        id:2,
        img:Image2,
        title:"Printed Shirts",
        description:"Discover our range of printed shirts for men and women, perfect for any business occasion.",
        price: "$49.99",
    },
    {
        id:3,
        img:Image3,
        title:"Formal Shirts",
        description:"Shop our selection of formal shirts that offer a perfect blend of elegance and comfort.",
        price: "$59.99",
    },
    {
        id:4,
        img:image4,
        title:"Checkered Shirts",
        description:"Find the latest trends in checkered shirts, ideal for both casual and formal settings.",
        price: "$39.99",
    },
]


const TopProducts = () => {
    const handleOrderPopup = () => {
        alert("Order functionality is not implemented yet.");
    };
    return (
        <div className="bg-white dark:bg-gray-700">
            <div className="container  mx-auto px-4">
                {/* Header Section */}
                <div className="text-center  mx-auto my-8 max-w-[500px] mb-24">
                    <p data-aos="fade-up" className="text-md text-purple-700  my-2 dark:text-purple-500">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Best Products</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                        Explore our top products that are trending right now. From fashion to electronics, find the best deals and quality items that suit your style and needs.
                    </p>
                </div>
                {/* Body Section  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-19 sm:gap-8 lg:12  place-items-center object-contain">
                {
                    ProductsData.map((product) => (
                        <div key={product.id} data-aos="zoom-in" data-aos-delay={`${product.id * 100}`}  
                        className="items-center justify-between my-6 p-4 rounded-md shadow-xl dark:bg-gray-800   hover:bg-black/80 dark:hover:bg-purple-600 hover:text-white relative duration-300 group max-w-[300px]">
                        <div className="h-[100px] ">
                            {/* Image Section  */}
                            <img src={product.img} alt={product.title} className="max-w-[180px] block mx-auto transform -translate-y-23 group-hover:scale-110 duration-300 drop-shadow-md"/>
                        </div>
                        <div className='p-4 text-center'>
                            {/* Content Section  */}
                            {/* Star Rating  */}
                            <div className="w-full flex items-center justify-center gap-1">
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className="text-xl font-bold">{product.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-xs line-clamp-3">{product.description}</p>
                            <p className="text-lg font-semibold text-black/40 group-hover:text-white group-hover:font-bold">{product.price}</p>
                            <button className="bg-purple-800 hover:scale-105 duration-400 text-white py-1 px-4 rounded-md mt-4 group-hover:bg-white  group-hover:text-purple-800"
                            onClick={handleOrderPopup}
                            >
                                Order Now
                            </button>
                        </div>
                        </div>

                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default TopProducts;
