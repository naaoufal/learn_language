import React from "react";
import ImageCover from '../../assets/images/index_background.jpg';

const Carousel = () => {
    return (
        <div class="home" style={{
			height: 440,
		}}>
		<div class="home_background" style={{
            backgroundImage: `url(${ImageCover})`,
        }}></div>
		<div class="home_content">
			<div class="container">
				<div class="row">
					<div class="col text-center">
						<h1 class="home_title">Learn Languages Easily</h1>
						<div class="home_button trans_200"><a href="#courses">get started</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Carousel;