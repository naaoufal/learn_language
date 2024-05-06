import React from "react";
// import TopBar from '../../components/TopBar';
// import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Courses from "../../components/Courses";
// import ResponsiveBar from "../../components/ResponsiveBar";
import Insctructors from "../../components/Instructors";
// import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard";

const HomeScreen = () => {
    return (
        <div class="super_container">
            <Carousel />
            <Courses />
            <Insctructors />
            <EventCard />
        </div>
    );
};

export default HomeScreen;