import React from "react";
import { IoCloseOutline } from "react-icons/io5"; 
// Importing close icon

const Popup = ({ OrderPopUp,setOrderPopup }) => {

  return (
    <>
        {
            OrderPopUp && (
                <div className="popup">
                    <div className="h-screen w-screen fixed top-0 left-0 bg-black/30 z-50 backdrop-blur-sm"></div>
                    <div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white dark:bg-gray-800 rounded-md shadow-lg p-6 z-50 w-[400px] max-w-full duration-200"
                    >
                        {/* Header  */}
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-lg dark:text-white">Order Now</div>
                            <div >
                                <IoCloseOutline onClick={() => setOrderPopup(false)} className="text-2xl cursor-pointer text-gray-500 hover:text-gray-700 dark:text-white" />
                            </div>
                        </div>
                        {/* Form Section  */}
                        <div className="mt-4">
                            <form className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" placeholder="Enter your email" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" placeholder="Enter your address" rows="3" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-purple-800 to-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 hover:scale-110 transition-all duration-400">Submit Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  );
};

export default Popup;
        