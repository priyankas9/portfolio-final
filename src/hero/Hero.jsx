import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Hero = () => {
    return(
        <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-16 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi,I'm Priyanka Shakya
              
            </h1>
            <p className="mb-8 leading-relaxed">
            I'm an IT graduate student with 2 year of experience in full stack web  with React, Angular and Laravel looking forward to growing my experience with other enthusiastic developers such as myself.</p>
            <div className="flex justify-between">
            <LinkedIn  className="text-blue-600 mr-4 hover:animate-spin-slow"/> 
            <GitHub className="text-black mr-4 hover:animate-spin-slow"/>
            <Instagram className="text-pink-600 mr-4 hover:animate-spin-slow"/>
            
            </div>
           
            <div className="flex justify-center">
            <a href="/pdf/Cv.pdf" download>
   
    
<button class="text-base md:text-2xl bg-yellow-800 text-white py-2 px-5 mt-10 hover:bg-zinc-800 font-serif">Download CV</button>
</a>
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={`../../images/viber_image_2023-07-14_16-09-27-176.jpg`}/>
          </div>
        </div>
      </section>
    )
};
export default Hero;