import React from "react";
import LoggedFooter from "../../Components/LoggedFooter/LoggedFooter";
import LoggedNavbar from "../../Components/LoggedNavBar/LoggedNavBar";

const NotFound = () => {
    return(
        <div>
          <LoggedNavbar />
          <LoggedFooter/>

          <h1> No Se encontro lo que buscabas</h1>
        </div>
    )
}

export default NotFound