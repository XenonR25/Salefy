import React from "react";

const Subscribe = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Stay updated with the latest news and exclusive offers.</p>
                </div>
                <form className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-6 py-3 rounded-r-md hover:bg-purple-700 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;  