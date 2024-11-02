export default function Guarantee() {
	return (
		<section className="bg-gradient py-5">
			<div className="container pb-5 pt-lg-5">
				<div className="row section-heading text-center text-md-end mb-4 mb-md-0">
					<div className="col">
						<p className="fw-bolder lh-1 mb-0 display-1">OUR GUARANTEE</p>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-2 row-gap-5 gx-lg-5 align-items-center">
					<div className="col">
						<img
							src="/images/guarantee.webp"
							alt="Our guarantee"
							className="w-100"
							loading="lazy"
						/>
					</div>
					<div className="col">
						<p className="fw-bolder display-5">WE OFFER THE GUARANTEE!</p>
						<p>
							We are so confident in our services that we offer this guarantee:
						</p>
						<p className="fw-bold">
							If you do not see better leads, more sales, and a higher ROI
							within 90 days, we will work for free until you do.
						</p>
						<p>We stand by our promise to help your business grow.</p>
						<div className="pt-2">
							<a href="#" className="btn btn-gradient">
								BOOK YOUR CALL
								<img src="/images/arrow-right-up.svg" alt="Arrow" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
