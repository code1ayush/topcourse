import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  // console.log(props.category);
  //   console.log(typeof props.courses);

  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  //   let allCourse = [];

  // It Returns list of all courses received from the api Response

  // const getCourses = () => {
  //     Object.values(props.courses).forEach((courseCategory) => {
  //         courseCategory.forEach((course) => {
  //             allCourse.push(course);
  //         });
  //     });
  //     return allCourse;
  // };

  function getCourses() {
    let allCourses = [];
    if (category === "All") {
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else if (category === "Development") {
      allCourses = Object.values(props.courses)[0];
      return allCourses;
    } else if (category === "Business") {
      allCourses = Object.values(props.courses)[1];
      return allCourses;
    } else if (category === "Design") {
      allCourses = Object.values(props.courses)[2];
      return allCourses;
    } else if (category === "Lifestyle") {
      allCourses = Object.values(props.courses)[3];
      return allCourses;
    }
  }
  console.log(getCourses());

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
