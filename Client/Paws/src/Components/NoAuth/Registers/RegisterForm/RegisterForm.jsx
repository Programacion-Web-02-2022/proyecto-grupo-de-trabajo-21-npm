import React from "react";
import {HiMail} from "react-icons/hi";
import {HiLockClosed} from "react-icons/hi";
import {HiUser} from "react-icons/hi";
import {HiEyeOff} from "react-icons/hi";

const RegisterForm = () => {
    return (
        <div className="flex flex-col bg-white px-10 py-10 rounded-3xl">
            <h1 className="text-5xl">Registrate</h1>
            <p className="text-lg mt-4">Ingresa tus datos personales en el siguient formulario</p>
            
            <div className="flex flex-col mt-8 gap-y-4">
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
                    <label className="text-lg text-gray-800">Usuario</label>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiUser className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none" type="password" placeholder="Ingresa tu nombre de usuario" />
                    </label>
                    
                </div>

                <div className="">
                    <label className="text-lg text-gray-800">Contraseña</label>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiLockClosed className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none" type="password" placeholder="Ingresa tu contraseña" />
                        <span className="absolute inset-y-0 right-0 flex items-center">
                            <HiEyeOff className="h-4 w-4 fill-background"/>
                        </span>
                    </label>
                    
                    
                </div>

                <div className="">
                    <label className="text-lg text-gray-800">Confirma la cntraseña</label>
                    <label className="relative block ">
                        <span className="absolute inset-y-0 flex items-center">
                            <HiLockClosed className="h-4 w-4 fill-background "/>
                        </span>
                        <input className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none" type="password" placeholder="Confirma tu contraseña" />
                        <span className="absolute inset-y-0 right-0 flex items-center">
                            <HiEyeOff className="h-4 w-4 fill-background"/>
                        </span>
                    </label>
                    
                    
                </div>

                <div className="flex justify-center text-white mt-10">
                    <button className="bg-backblue hover:bg-gray-500 py-4 px-4 rounded-2xl w-full">
                        Registrarse
                    </button>

                </div>

         
            </div>
        </div>
    )
}

export default RegisterForm