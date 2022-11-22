import React from "react"
import LoggedNavbar from "../../Components/User/LoggedNavBar/LoggedNavBar";
import LoggedFooter from "../../Components/User/LoggedFooter/LoggedFooter";
import BlogOptions from "../../Components/User/BlogOptions/BlogOptions";
import CardContainer from "../../Components/User/CardContainer/CardContainer";

const Blog = () =>{
    return(
        <div className="bg-background">
           <LoggedNavbar/>
           <BlogOptions />
           <CardContainer />
           <LoggedFooter/>
           
        </div>

    )
};

export default Blog;