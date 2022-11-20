import React from "react";
import Lobby from "../../Components/Container/Lobby/Lobby";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";



const Home = () => {
    return(
        <div className=" bg-dog bg-cover h-screen items-center">
            <Navbar/>
           <Lobby />
           <Footer />
        </div>
    );
};

export default Home