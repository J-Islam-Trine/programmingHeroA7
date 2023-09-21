// import react
import React from "react";

//import components
import CourseGrid from "./courseGrid";
import SideBar from "./sideBar";

//declare funtion
const MainContainer = () => {
    return(
        <div className="flex mx-12 gap-4">
            <CourseGrid />
            <SideBar />
            
        </div>
    )
}

export default MainContainer