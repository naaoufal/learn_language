import React from "react";

const DATA = [
    {
        id: 1, 
        name: "Vocabulary", 
        desc: "Sarah Parker", 
        desc_sub: "English", 
        total_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.",
        img: "images/course_1.jpg",
    },
    {
        id: 2, 
        name: "Vocabulary", 
        desc: "Sarah Parker", 
        desc_sub: "English", 
        total_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.",
        img: "images/course_2.jpg",
    },
    {
        id: 3, 
        name: "Vocabulary", 
        desc: "Sarah Parker", 
        desc_sub: "English", 
        total_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.",
        img: "images/course_3.jpg",
    },
    {
        id: 4, 
        name: "Vocabulary", 
        desc: "Sarah Parker", 
        desc_sub: "English", 
        total_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.",
        img: "images/course_3.jpg",
    },
    {
        id: 5, 
        name: "Vocabulary", 
        desc: "Sarah Parker", 
        desc_sub: "English", 
        total_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.",
        img: "images/course_2.jpg",
    },
]

const Courses = () => {
    return (
        <div class="courses" id="courses">
                <div class="courses_background"></div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="section_title text-center">Popular Online Courses</h2>
                        </div>
                    </div>
                    <div class="row courses_row">
                    {DATA && DATA.map((item) => (
                        <div class="col-lg-4 course_col" style={{ paddingBottom: 20 }}>
                            <div class="course">
                                <div class="course_image"><img src={item?.img} alt="" /></div>
                                <div class="course_body">
                                    <div class="course_title"><a href="course.html">Vocabulary</a></div>
                                    <div class="course_info">
                                        <ul>
                                            <li><a href="#">Sarah Parker</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    <div class="course_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
                                    </div>
                                </div>
                                <div class="course_footer d-flex flex-row align-items-center justify-content-start">
                                    <div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>10</span></div>
                                    <div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
                                    <div class="course_mark course_free trans_200"><a href="#">Free</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
	    </div>
    );
};

export default Courses;