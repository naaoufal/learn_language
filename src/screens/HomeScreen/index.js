import React from "react";
import TopBar from '../../components/TopBar';
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Courses from "../../components/Courses";
import ResponsiveBar from "../../components/ResponsiveBar";
import Insctructors from "../../components/Instructors";

const HomeScreen = () => {
    return (
        <div class="super_container">
            <header class="header">
                <TopBar />
                <NavBar />
                {/* responsive menu */}
                <ResponsiveBar />
            </header>
            <Carousel />
            <Courses />
            <Insctructors />
        </div>
    );
};

export default HomeScreen;