// import react
import React from "react";
import { useState, useEffect } from "react";

//import components
import Card from "../blocks/card";

//declare funtion
const CourseGrid = () => {
    const [course, setCourse] = useState([])
    const [dummyData, setDummyData] = useState([])

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
                course.map(singleCourse => <Card name={singleCourse.name} imageLink={singleCourse.image_link} description={singleCourse.description}
                price={singleCourse.price} credit={singleCourse.credit_in_hour}
                />)
            }
        </div>
    )
}

export default CourseGrid