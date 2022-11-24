import React from "react";
import AprovedControllers from "./ApprovedControllers/ApprovedControllers";
import {HiOutlineCheck} from "react-icons/hi";

const Aproved = () => {
    return (
        <div className="flex flex-col justify-center bg-white px-10 py-10 rounded-3xl h-3/4 ">
            <div className="flex flex-col justify-center ">
                <div className="flex justify-center ">
                    <HiOutlineCheck className="text-background h-40 w-40" />
                </div>
                <h1 className="text-3xl font-Lato text-center">¡Gracias por registrarte!</h1>
                <p className="text-lg text-center mt-4">Te hemos enviado un correo electronico para que puedas activar tu cuenta</p>
            </div> 

            <AprovedControllers />

        </div>
    )
}

export default Aproved
