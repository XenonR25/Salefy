import React from "react";
import img1 from "../assets/Products/img1.jpg"; // Adjust the path as necessary
import img2 from "../assets/Products/img2.jpg";
import img3 from "../assets/Products/img3.jpg";
import img4 from "../assets/Products/img4.jpg";  
import img5 from "../assets/Products/img5.jpg"; 
import {FaStar} from "react-icons/fa6";
const ProductsData = [
    {
        id: 1,
        img:img1,
        title:"Men's Casual",
        rating:5.0,
        color:"White",
        aosDelay: "100",

    },{
        id: 2,
        img:img2,
        title:"Men's Formal ",
        rating:4.8,
        color:"Black",
        aosDelay: "200",
    },{
        id: 4,
        img:img4,
        title:"Men's Trousers",
        rating:4.5,
        color:"Gray",
        aosDelay: "300", 
    },{
        
        id: 3,
        img:img3,
        title:"Men's Sports ",
        rating:4.7,
        color:"Black",
        aosDelay: "400"
        
    },{
        id: 5,
        img:img5,
        title:"Men's Beach Wear",
        rating:3.8,
        color:"Green",
        aosDelay: "500"
    }
]

const Products = () => {
return (
    <div className="bg-white dark:bg-gray-700">
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center my-8 max-w-[500px] mx-auto">
                    <p data-aos="fade-up" className="text-md text-purple-700 text-center my-2 dark:text-purple-500">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Products</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                        Discover our curated selection of top-selling products, chosen for their quality, popularity, and value. Whether you're looking for the latest tech gadgets, stylish apparel, or everyday essentials, we have something for everyone. Shop now and enjoy exclusive deals on our bestsellers!
                    </p>
            </div>
            {/* Body Section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 place-items-center">
                    {ProductsData.map((product) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={product.aosDelay}
                        data-aos-duration="800"
                        key={product.id} className="space-y-3">
                            <img src={product.img} alt={product.title} className="h-[220px] w-[150px] object-cover rounded-md"/>
                            <div>
                                <h3 className="font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-500">{product.color}</p>
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400"/>
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>


        </div>
    </div>
);
};

export default Products; 