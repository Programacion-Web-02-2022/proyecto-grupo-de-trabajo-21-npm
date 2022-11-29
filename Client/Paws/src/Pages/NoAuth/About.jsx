import React from "react";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import AboutUs from "../../Components/NoAuth/AboutUs/AboutUs";

const About = () => {

    return(
       <div className="h-screen" > 
           <Navbar />

           <div className="flex justify-end xl:justify-center bg-rabbit bg-cover h-screen">
                <AboutUs />
           </div>
              
           <Footer />
       </div>
    )
};

export default About;