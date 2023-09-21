// import react
import React from "react";
import { useState } from "react";

//import components
import CourseGrid from "./courseGrid";
import SideBar from "./sideBar";

//declare funtion
const MainContainer = () => {
    const [courseList, setCourseList] = useState([]);
    const [invalidCourse, setInvalid] = useState(false);
    const [currentCredit, setCredit] = useState(0);
    const [invalidCredit, setInvalidCredit] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(0);

    const handleAddCourses = (name, price, credit) => {
       if(!courseList.includes(name) && credit+currentCredit <= 20)
       {
        setInvalid(false);
        setInvalidCredit(false)
        setCourseList([...courseList, name]);
        setCredit(currentCredit+credit);
        setCurrentPrice(currentPrice+price);
       }
       else if (courseList.includes(name))
       {
        setInvalid(true);
        setTimeout(() => {
            setInvalid(false);
        }, 5000)
        
       }
       else if (credit + currentCredit > 20)
       {
        setInvalidCredit(true);
        setTimeout(() => {
            setInvalidCredit(false);
        }, 5000)
       }
    }

    return(
        <div className="flex mx-12 gap-4">
            <CourseGrid handleAddCourses={handleAddCourses}/>
            <SideBar courseList={courseList} credit={currentCredit} price={currentPrice}/>
            {
                invalidCourse && <div className="toast toast-right">
                <div className="alert alert-info text-white text-2xl">
                  <span>This course already selected</span>
                </div>
              </div>
            }
            {
                invalidCredit && <div className="toast toast-right">
                <div className="alert alert-info text-white text-2xl">
                  <span>Total credit exceeds 20</span>
                </div>
              </div>
            }
        </div>
    )
}

export default MainContainer