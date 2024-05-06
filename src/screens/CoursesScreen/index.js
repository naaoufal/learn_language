import React from "react";
import NavBar from "../../components/NavBar";

const CoursesScreen = () => {
    return(
        <div class="super_container">
            <div class="home" style={{
				height: 60,
			}}>
                <div class="breadcrumbs_container">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <ul class="breadcrumbs_list d-flex flex-row align-items-center justify-content-start">
                                    <li><a href="/">home</a></li>
                                    <li><a href="/courses">courses</a></li>
                                    <li>english</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="language">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="language_title">Learn Languages Easily</div>
						</div>
					</div>
            	</div>
            </div>
            <div class="courses">
		<div class="container">
			<div class="row courses_row">
				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_9.jpg" alt="" /></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Vocabulary</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Sarah Parker</a></li>
									<li><a >English</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>10</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
							<div class="course_mark trans_200"><a >$45</a></div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_10.jpg" alt="" /></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Vocabulary</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Sarah Parker</a></li>
									<li><a >English</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>10</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
							<div class="course_mark course_free trans_200"><a >Free</a></div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_11.jpg" alt="" /></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Vocabulary</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Sarah Parker</a></li>
									<li><a >Spanish</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>10</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
							<div class="course_mark course_free trans_200"><a >Free</a></div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_12.jpg" alt="" /></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Vocabulary</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Sarah Parker</a></li>
									<li><a >English</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>10</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
							<div class="course_mark trans_200"><a >$45</a></div>
						</div>
					</div>
				</div>

			</div>

			<div class="row">
				<div class="col">
					<div class="load_more_button"><a href="">load more</a></div>
				</div>
			</div>
		</div>
			</div>
        </div>
    );
};

export default CoursesScreen;