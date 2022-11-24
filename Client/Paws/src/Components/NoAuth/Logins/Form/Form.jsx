import React from "react";
import {HiMail} from "react-icons/hi";
import {HiLockClosed} from "react-icons/hi";
import FormControllers from "./FormControllers/FormControllers";


const Form = () => {
    return(
        <div className="flex flex-col bg-white px-10 py-20 rounded-3xl">
            <h1 className="text-5xl">Iniciar sesion</h1>
            <p className="text-lg mt-4">Si ya tienes una cuenta registrada puedes iniciar sesion desde aquí!</p> 

            <div className=" flex flex-col mt-8 gap-y-2">
                <div className="">
                    <div className="text-lg text-gray-800">Email</div>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiMail className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none" type="text" placeholder="Ingresa tu direccion de correo electronico" />
                    </label>
                        
                </div>

                <div className="">
                    <label className="text-lg text-gray-800">Contraseña</label>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiLockClosed className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none" type="password" placeholder="Ingresa tu contraseña" />
                    </label>
                    
                </div>

                <FormControllers />

                
            </div>
        </div>

        
    )
}

export default Form