import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Anchor extends Component {
    render() {
        return(
           <div >
                <div className=" text-white font-Dm font-regular text-xl">
               <ul className=" flex flex-1 flex-row flex-wrap-nowrap gap-6 items-center justify-center">
                   <li className="w-2/12"> <NavLink  to="/NewPost" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} ><button  className="bg-newpink hover:bg-pink-800 py-4 px-4 rounded  w-full">Crear nueva publicación </button></NavLink> </li>
                   <li className="w-2/12"> <NavLink  to="/MyPost" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newblue hover:bg-blue-800 py-4 px-4 rounded  w-full"> Mis publicaciones</button></NavLink> </li>
                   <li className="w-2/12"> <NavLink  to="/PopularPost" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newpurple hover:bg-purple-800 py-4 px-4 rounded w-full "> Publicaciones populares</button></NavLink> </li>
                   <li className="w-2/12"> <NavLink  to="/FavoritePost" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newgolden hover:bg-yellow-800 py-4 px-4 rounded w-full"> Favoritos</button></NavLink> </li>
               </ul>
    
            </div>
            <div>
                
            </div>
           </div>
        )
    }
}
export default Anchor;