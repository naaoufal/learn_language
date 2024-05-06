const Footer = () => {
    return (
        <footer class="footer">
		<div class="footer_body">
			<div class="container">
				<div class="row">

					<div class="col-lg-3 footer_col">
						<div class="newsletter_container d-flex flex-column align-items-start justify-content-end">
							<div class="footer_logo mb-auto"><a >EasyDarija</a></div>
							<div class="footer_title">Subscribe</div>
							<form action="#" id="newsletter_form" class="newsletter_form">
								<input type="email" class="newsletter_input" placeholder="Email" required="required" />
								<button class="newsletter_button"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
							</form>
						</div>
					</div>

					<div class="col-lg-2 offset-lg-3 footer_col">
						<div>
							<div class="footer_title">About Us</div>
							<ul class="footer_list">
								<li><a >Courses</a></li>
								<li><a >Team</a></li>
								<li><a >Brand Guidelines</a></li>
								<li><a >Jobs</a></li>
								<li><a >Advertise with us</a></li>
								<li><a >Press</a></li>
								<li><a >Contact us</a></li>
							</ul>
						</div>
					</div>

					<div class="col-lg-2 footer_col">
						<div class="footer_title">Help & Support</div>
						<ul class="footer_list">
							<li><a >Discussions</a></li>
							<li><a >Troubleshooting</a></li>
							<li><a >Duolingo FAQs</a></li>
							<li><a >Schools FAQs</a></li>
							<li><a >Duolingo English Test FAQs</a></li>
							<li><a >Status</a></li>
						</ul>
					</div>

					<div class="col-lg-2 footer_col clearfix">
						<div>
							<div class="footer_title">Privacy & Terms</div>
							<ul class="footer_list">
								<li><a >Community Guidelines</a></li>
								<li><a >Terms</a></li>
								<li><a >Brand Guidelines</a></li>
								<li><a >Privacy</a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
							<div class="cr_right ml-md-auto">
								<div class="footer_phone"><span class="cr_title">phone:</span>+44 300 303 0266</div>
								<div class="footer_social">
									<span class="cr_social_title">follow us</span>
									<ul>
										<li><a ><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a ><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
										<li><a ><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
};

export default Footer;