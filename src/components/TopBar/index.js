import React from "react";

const TopBar = () => {
    return(
        <div class="top_bar">
            <div class="top_bar_container">
                <div class="container">
                    <div class="row">
                    <div class="col">
                        <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
                            <div class="top_bar_phone"><span class="top_bar_title">phone:</span>+212 300 303 0266</div>
                                <div class="top_bar_right ml-auto">
                                    <div class="top_bar_lang">
                                    <span class="top_bar_title">site language:</span>
                                        <ul class="lang_list">
                                            <li class="hassubs">
                                            English<i class="fa fa-angle-down" aria-hidden="true"></i>
                                            <ul>
                                                <li>Arabe</li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="top_bar_social">
                                        <span class="top_bar_title social_title">follow us</span>
                                        <ul>
											<li><a href="https://www.facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li><a href="https://www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
											<li><a href="https://www.twitter.com"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>				
        </div>
    );
};

export default TopBar;