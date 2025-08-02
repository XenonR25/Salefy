import React from "react";

const TopProducts = () => {
    return (
        <div className="bg-white dark:bg-gray-700">
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center my-8 max-w-[500px] mx-auto">
                    <p data-aos="fade-up" className="text-md text-purple-700 text-center my-2 dark:text-purple-500">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Best Products</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-600 mt-4 dark:text-gray-300">
                        Explore our top products that are trending right now. From fashion to electronics, find the best deals and quality items that suit your style and needs.
                    </p>
                </div>
                {/* Body Section  */}
                <div>

                </div>
            </div>
        </div>
    );
}

export default TopProducts;
