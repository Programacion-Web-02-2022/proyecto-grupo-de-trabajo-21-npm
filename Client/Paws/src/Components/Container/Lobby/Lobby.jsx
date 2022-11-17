import React from "react";

const Lobby = () => {
    return(
        <section className="text-white mx-20 gap-3 justify-center h-5/6 flex flex-col w-1/5">
            <h1 className="text-5xl"> PAWS</h1>
            <p className=" text-justify">
                Manten al dia el registro medico de tus mascotas, gestiona citas y más
            </p>

            <button className=" bg-newblue hover:bg-blue-800 py-4 px-4 rounded mx-auto ">
                Registrate ahora!
            </button>
        </section>
    )
}

export default Lobby