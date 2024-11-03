export default function Hero() {
	return (
		<section className="py-5">
			<div className="container py-3">
				<div className="row">
					<div className="col text-center">
						<div className="position-relative overflow-hidden">
							<video
								className="position-absolute top-0 start-0 w-100 h-100 m-0 object-fit-cover"
								autoPlay
								muted
								loop
							>
								<source src="/videos/wefix.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<p className="fw-bolder hero-title hero-title-primary mb-0 bg-white position-relative start-0 w-100 top-0 h-100 blend-mode-screen">
								WE FIX
							</p>
						</div>
						<p className="hero-title hero-title-secondary fw-lighter mb-4 mt-2">
							MARKETING
						</p>
						<p className="display-6 fw-bolder mb-4">
							EASIEST WAY TO GET{' '}
							<span className="text-danger">BETTER LEADS</span>,{' '}
							<span className="text-primary">MORE CUSTOMERS</span>
							<br /> &amp; SUPERCHARGED ROI,{' '}
							<span className="text-warning">GUARANTEED!</span>
						</p>
						<a href="#" className="btn btn-gradient">
							BOOK YOUR CALL
							<img src="/images/arrow-right-up.svg" alt="Arrow" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
