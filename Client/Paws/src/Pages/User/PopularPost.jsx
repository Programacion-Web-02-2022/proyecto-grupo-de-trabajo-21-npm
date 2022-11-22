import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";

const PopularPost = () =>{
    return(
        <div>
            <LoggedNavbar/>
            popular posts
            <LoggedFooter/>
        </div>

    )
};

export default PopularPost;