import React from "react";
import FooterLogo from "../assets/Logo.png"; // Adjust the path as necessary
import Banner from "../assets/footer.jpg"; // Adjust the path as necessary
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram ,FaLinkedin,FaLocationArrow,FaMobileAlt} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  position: "absolute",
  height: "70%",
  width: "100%",
  opacity: 0.9,
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",

};

const FooterLinks = [
  { title: "Home", url: "/#" },
  { title: "About", url: "/#about" },
  { title: "Services", url: "/#services" },
  { title: "Contact", url: "/#contact" },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className=" text-white py-4">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-3  pb-30 pt-5">
          <div data-aos="fade-up" data-aos-delay="200" className="py-8 px-4">
            <h1 className="text-2xl sm:text-3xl sm:text-left font-bold mb-4 flex items-center text-justify gap-3">
              <img
                src={FooterLogo}
                alt="Salefy Logo"
                className="max-w-[50px]"
              />
              Salefy
            </h1>
            <p className="sm:text-left text-justify">
            Salefy is a modern e-commerce platform designed to help you discover, shop, and manage your favorite products with ease. Enjoy a seamless online shopping experience, secure payments, and fast delivery—all in one place.
            </p>
          </div>
          {/* Footer Links  */}
          <div  data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-4 px-4 md:pl-10">
            <div>
              <div className="sm:text-left text-center py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-8">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-4">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-purple-500 hover:translate-x-1 transition duration-300 text-gray-200 dark:text-gray-400 font-semibold text-md"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social media links  */}
            <div  data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3 mt-8 justify-center sm:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6 text-gray-200 dark:text-gray-400">
                <h2 className="text-lg font-bold text-justify sm:text-start mb-2">Contact Us</h2>
                <div className="flex items-center gap-2">
                  <FaLocationArrow className="w-5 h-5" />
                  <span>IICT, SUST, Sylhet</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobileAlt className="w-5 h-5" />
                  <span>(+880) 1782 753325</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
