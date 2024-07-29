import React from "react";

const NavBar = () => {
    return (
        <div class="header_container">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="header_content d-flex flex-row align-items-center justify-content-start">
                            <div class="logo_container mr-auto">
                                
                                    <div class="logo_text">EasyDarija</div>
                                
                            </div>
                            <nav class="main_nav_contaner">
                                <ul class="main_nav">
                                    <li class="active"><a href="/">Home</a></li>
                                    <li><a href="/courses">Courses</a></li>
                                    <li><a href="/instructors">Instructors</a></li>
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                            <div class="header_content_right ml-auto text-right">
                                <div class="header_search">
                                    <div class="search_form_container">
                                        <form action="#" id="search_form" class="search_form trans_400">
                                            <input type="search" class="header_search_input trans_400" placeholder="Type for Search" required="required" />
                                            <div class="search_button">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="user"><i class="fa fa-user" aria-hidden="true"></i></div>
                                <div class="hamburger menu_mm">
                                    <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;