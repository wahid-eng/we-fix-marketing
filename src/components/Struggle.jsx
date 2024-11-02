export default function Struggle() {
	return (
		<section className="py-5">
			<div className="container py-5">
				<div className="row section-heading text-center text-md-start mb-5 mb-md-0">
					<div className="col">
						<p className="fw-bolder lh-1 mb-0 display-1">THE STRUGGLE</p>
					</div>
				</div>
				<div className="row row-cols-1 flex-wrap-reverse row-cols-md-2 row-gap-5 gx-lg-5 align-items-center">
					<div className="col">
						<p className="fw-bolder display-5">
							STRUGGLING WITH YOUR MARKETING?
						</p>
						<p>
							Do You Feel Ike Your Marketing Efforts Arent Bringing In Enough
							Customers?
						</p>
						<p>
							Are You Spending Money On Ads But Not Seeing Results? Is Your
							Business Not Growing As Fast As You would Like?
						</p>
						<p className="fw-bold">YOU ARE NOT ALONE.</p>
						<p>Many Local Businesses Face These Same Challenges Every Day.</p>

						<div className="pt-4">
							<a href="#" className="btn btn-gradient">
								BOOK YOUR CALL
								<img src="/images/arrow-right-up.svg" alt="Arrow" />
							</a>
						</div>
					</div>
					<div className="col">
						<img
							src="/images/struggle.webp"
							alt="Struggle"
							className="w-100"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}