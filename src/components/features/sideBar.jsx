// import react
import React from "react";


//declare funtion
const SideBar = ({credit, courseList, price}) => {
    return(
       <div className=" w-80 bg-white p-6">
            <div className="pb-4">
                <p className=" text-lg font-bold leading-7 text-newBlue">Credit Hour Remaining {20-credit} hr</p>
            </div>
            <hr></hr>
            <div className="pt-4 pb-6">
                    <h3 className=" text-xl font-bold">Course Name</h3>

                    <ul>
                        {
                             courseList.map((courseItem, index) => 
                             <p className=" text-base font-normal leading-7" key={index}>{index+1} {courseItem}</p>
                          )
                           
                        }
                    </ul>
            </div>
            <hr />
            <div className="my-4">
                <p className=" font-semibold">Total Credit Hour: {credit}</p>
            </div>
            <hr />
            <div className="my-4">
                <p className=" font-semibold">Total Price: {price} USD</p>
            </div>

       </div>
    )
}

export default SideBar