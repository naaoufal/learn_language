const EventCard = () => {
	
    return (
        <div class="events">
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="section_title text-center">Upcoming Events</h2>
				</div>
			</div>
			<div class="row events_row">
				
				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_1.jpg" alt="" /></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title">Networking Day</div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_2.jpg" alt="" /></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title">Networking Day</div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_3.jpg" alt="" /></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title">Networking Day</div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
    );
};

export default EventCard;