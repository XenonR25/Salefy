import React from "react";
import LightButton from "../assets/light.png"; // Adjust the path as necessary
import DarkButton from "../assets/dark.png"; // Adjust the path as necessary
const Darkmode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <div className="relative ">
            <img src={LightButton} alt="light mode" onClick={()=> setTheme(theme === 'light'? 'dark':'light')} className={`w-8 cursor-pointer drop-shadow-[1px 1px 2px rgba(0,0,0,0.5)] transition-all duration-500  `} />
            <img src={DarkButton} alt="dark mode" onClick={()=> setTheme(theme === 'light'? 'dark':'light')} className={`w-8 cursor-pointer drop-shadow-[1px 1px 2px rgba(0,0,0,0.5)] transition-all duration-500  absolute right-0  top-0 z-10 ${theme === 'dark' ? 'block' : 'hidden'}`} />
        </div>
    )
}

export default Darkmode;