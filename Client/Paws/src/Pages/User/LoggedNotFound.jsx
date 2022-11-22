import React from "react";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";

const NotFound = () => {
    return(
        <div>
          <LoggedNavbar />
          <h1> No Se encontro lo que buscabas</h1>
          <LoggedFooter/>

          
        </div>
    )
}

export default NotFound