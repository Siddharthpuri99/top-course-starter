import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    const[liked,setliked] = useState([]);
    function getCouses(){
        if(category==="All"){

            let allCourses = [];
            Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCouses().map((course)=>{
           return <Card key={course.id} course={course} liked={liked} setliked={setliked}/>
        })
      }
    </div>
  )
}

export default Cards
