import React from "react";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Logins from "./../../Components/NoAuth/Logins/Logins";

const Login = () => {
    return(
        <div className="h-screen">
            <Navbar />
                <div className="flex justify-end xl:justify-center bg-rabbit bg-cover h-screen">
                    <Logins />
                </div>
            <Footer />
        
        </div>
    )
};

export default Login