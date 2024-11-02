export default function Newsletter() {
	return (
		<section className="mt-n5">
			<div className="container">
				<div className="position-relative overflow-hidden">
					<video
						className="w-100 position-absolute top-50 start-50 translate-middle"
						autoPlay
						muted
						loop
					>
						<source src="/videos/wefix.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="p-5 position-relative z-1 bg-blur bg-black bg-opacity-25">
						<div className="row align-items-center">
							<div className="col">
								<p className="text-white display-6 fw-bolder">
									READY TO
									<br />
									SUPERCHARGE YOUR
									<br />
									LOCAL MARKETING
								</p>
							</div>
							<div className="col-12 col-md-5">
								<h6 className="text-white fw-bold mb-3">
									Sign Up for our weekly marketing &apos;Fix&apos; newsletter
								</h6>
								<form method="POST" className="subscriber-form">
									<div className="mb-3">
										<input
											type="email"
											className="form-control ps-5"
											placeholder="Enter Email Address"
											required
										/>
									</div>
									<button
										type="submit"
										className="btn btn-black w-100 fw-bolder"
									>
										SIGN UP NOW
										<img src="/images/arrow-right-up.svg" alt="Arrow" />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
