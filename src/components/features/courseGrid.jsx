// import react
import React from "react";
import { useState, useEffect } from "react";

//import components
import Card from "../blocks/card";

//declare funtion
const CourseGrid = ({handleAddCourses}) => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        async function getData()
        {
            const initialData = await fetch('./src/data/courses.json');
        const jsonData = await initialData.json();
        setCourse(jsonData);
        }

        getData();
    },  [])

    return(
        <div className="grid grid-cols-3  gap-4">
            {
                course.map((singleCourse, index) => <Card key={index} name={singleCourse.name} imageLink={singleCourse.image_link} description={singleCourse.description}
                price={singleCourse.price} credit={singleCourse.credit_in_hour} handleAddCourses={handleAddCourses}
                />)
            }
        </div>
    )
}

export default CourseGrid