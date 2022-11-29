import React from "react";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Registers from "../../Components/NoAuth/Registers/Registers";

const Register = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="flex justify-end xl:justify-center bg-rabbit bg-cover h-screen">
                <Registers />
            </div>
            <Footer />
        </div>

    );
};

export default Register;