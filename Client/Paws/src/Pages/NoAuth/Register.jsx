import React from "react";
import Footer from "../../Components/NoAuth/Footer/Footer";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Register from "../../Components/NoAuth/Register/Register";

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-end bg-rabbit bg-cover h-screen">
                <Register />
            </div>
            <Footer />
        </div>

    );
};

export default Register;