export default function Origin() {
	return (
		<section className="py-5">
			<div className="container py-lg-5">
				<div className="row section-heading text-center text-md-start mb-4 mb-md-0">
					<div className="col">
						<p className="fw-bolder lh-1 mb-0 display-1">ORIGIN STORY</p>
					</div>
				</div>
				<div className="row row-cols-1 flex-wrap-reverse row-cols-md-2 row-gap-5 gx-lg-5 align-items-center">
					<div className="col">
						<p className="fw-bolder display-5">OUR ROOTS, OUR JOURNEY</p>
						<p>
							We started We Fix Marketing because we saw local businesses
							struggling to attract customers.
						</p>
						<p className="fw-bold">
							Our mission is to help businesses. like yours succeed by making
							marketing simple & effective.
						</p>
						<p>
							With years of experience in sales funnels, pay-per-click
							advertising, & search engine optimization, we are dedicated to
							helping you reach your goals.
						</p>

						<div className="pt-4">
							<a href="#" className="btn btn-gradient">
								BOOK YOUR CALL
								<img src="/images/arrow-right-up.svg" alt="Arrow" />
							</a>
						</div>
					</div>
					<div className="col">
						<img
							src="/images/origin-story.webp"
							alt="Origin story"
							className="w-100"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
