import React from "react";
import ImageCover from '../../assets/images/instructors_background.png';

const Insctructors = () => {
    return (
        <div class="instructors">
            <div class="instructors_background" style={{
                backgroundImage: `url(${ImageCover})`
            }}></div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="section_title text-center">The Best Tutors in Town</h2>
                    </div>
                </div>
                <div class="row instructors_row">

                    <div class="col-lg-4 instructor_col">
                        <div class="instructor text-center">
                            <div class="instructor_image_container">
                                <div class="instructor_image"><img src="images/ins-1.jpg" alt="" /></div>
                            </div>
                            <div class="instructor_name"><a href="instructors.html">Naoufal Parker</a></div>
                            <div class="instructor_title">Teacher</div>
                            <div class="instructor_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.</p>
                            </div>
                            <div class="instructor_social">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 instructor_col">
                        <div class="instructor text-center">
                            <div class="instructor_image_container">
                                <div class="instructor_image"><img src="images/ins-1.jpg" alt="" /></div>
                            </div>
                            <div class="instructor_name"><a href="instructors.html">Naoufal Parker</a></div>
                            <div class="instructor_title">Teacher</div>
                            <div class="instructor_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.</p>
                            </div>
                            <div class="instructor_social">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 instructor_col">
                        <div class="instructor text-center">
                            <div class="instructor_image_container">
                                <div class="instructor_image"><img src="images/ins-1.jpg" alt="" /></div>
                            </div>
                            <div class="instructor_name"><a href="instructors.html">Naoufal Parker</a></div>
                            <div class="instructor_title">Teacher</div>
                            <div class="instructor_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.</p>
                            </div>
                            <div class="instructor_social">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Insctructors;