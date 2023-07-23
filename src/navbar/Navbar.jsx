import { useEffect, useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
const Navbar = () => {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("#f3f4f68f");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setnavColor("#FFFFFF");
      setnavSize("5rem");
    } else {
      setnavColor("#f3f4f68f");
      setnavSize("5rem");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10">
        <nav
          className="relative px-2 py-4 h-12"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <div className="container mx-auto flex justify-between items-center ">
            <div className="ml-8  font-thin text-xl">
              {/* <h1>Priyanka Shakya </h1> */}
            </div>
            <ul className="md:flex space-x-6 flex justify-end  mr-12 ">
              <li className=" text-base font-serif text-pink-700">
                <HomeOutlinedIcon className=" text-pink-700 mb-1"  fontSize="small"/>
                <a href="#">Home</a>
              </li>
             
              <li className=" text-base font-serif">
                <LaptopChromebookOutlinedIcon/>
              <a href="#" className="mr-1">
                 Projects
                </a>
              </li>
               
              <li className=" text-lg">
                <PsychologyOutlinedIcon/>
                <a href="#">Skills</a>
              </li>
              <li className=" text-lg"> 
              < ContactPageOutlinedIcon/>
                <a href="#">Contact</a>
              </li>
            </ul>
           
          </div>

         

    </nav>
  </header>
    

        </>
    )
}
export default Navbar;