export default function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-xl fixed-top bg-white shadow-sm">
				<div className="container">
					<a className="navbar-brand" href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="110"
							height="38"
							fill="none"
						>
							<path
								d="M6.489 19.829L.277.417h6.738l5.019 16.389H8.652L13.976.417h6.018l4.964 16.389h-3.244L26.954.417h6.212l-6.212 19.411h-7.016L15.89 6.407h1.886l-4.271 13.422H6.489zm34.12-12.201h8.652v4.714h-8.652V7.627zm.444 7.265h9.706v4.936H34.619V.417h15.779v4.936h-9.345v9.539zm26.64-6.212h8.541v4.936h-8.541V8.681zm.444 11.148h-6.544V.417H77.37v4.936h-9.234v14.475zm11.302 0V.417h6.544v19.411h-6.544zm7.892 0l8.652-12.09-.028 4.576L87.579.417h7.349l4.881 7.21-3.134.028 4.769-7.238h7.044l-8.375 11.647V7.516l8.791 12.312h-7.487l-4.881-7.543 3.023-.028-4.77 7.57h-7.46z"
								fill="#000"
							/>
							<path
								d="M2.148 37.089V24.762h.757l5.723 9.879h-.405l5.706-9.879h.74l.018 12.327h-.88l-.018-10.971h.247l-5.406 9.333h-.44l-5.424-9.333h.264v10.971h-.88zm14.776 0l5.67-12.327h.898l5.67 12.327h-.968l-5.353-11.763h.387l-5.336 11.764h-.969zm2.078-3.469l.299-.757h7.379l.299.757h-7.977zm12.399 3.469V24.762h4.42c1.033 0 1.919.164 2.659.493s1.309.804 1.708 1.426c.399.611.599 1.356.599 2.236 0 .857-.2 1.597-.599 2.219-.399.61-.969 1.086-1.708 1.426-.74.329-1.626.493-2.659.493h-3.927l.405-.423v4.455h-.898zm8.558 0l-3.205-4.473h1.021l3.205 4.473h-1.021zm-7.66-4.403l-.405-.423h3.927c1.327 0 2.33-.294 3.011-.881.693-.587 1.039-1.409 1.039-2.465 0-1.068-.346-1.89-1.039-2.465-.681-.587-1.685-.881-3.011-.881h-3.927l.405-.44v7.555zm12.551 1.285l-.035-1.127 7.854-8.083h1.092l-5.494 5.688-.511.546-2.906 2.976zm-.775 3.117V24.762h.898v12.327h-.898zm8.963 0l-5.547-6.34.616-.652 6.023 6.991h-1.092zm4.211-6.657h6.674v.793H57.25v-.793zm.106 5.847h7.607v.81h-8.506V24.762h8.241v.81h-7.343v10.707zm13.242.81V25.572H66.16v-.81h9.773v.81h-4.438v11.517h-.898zm7.563 0V24.762h.898v12.327h-.898zm5.194 0V24.762h.757l8.787 11.218h-.405V24.762h.898v12.327h-.74l-8.805-11.218h.405v11.218h-.898zm19.608.088c-.928 0-1.785-.153-2.571-.458a6.39 6.39 0 0 1-2.061-1.321c-.575-.564-1.021-1.221-1.338-1.972-.317-.763-.475-1.597-.475-2.501s.159-1.732.475-2.483a5.82 5.82 0 0 1 1.356-1.99c.587-.564 1.268-.998 2.043-1.303.786-.317 1.649-.475 2.588-.475a7.11 7.11 0 0 1 2.483.423c.764.282 1.415.704 1.955 1.268l-.563.599c-.54-.528-1.133-.904-1.779-1.127-.634-.223-1.327-.335-2.078-.335-.798 0-1.538.135-2.219.405A5.32 5.32 0 0 0 99 27.051c-.505.493-.898 1.068-1.18 1.726-.27.657-.405 1.374-.405 2.148s.135 1.491.405 2.148c.282.657.675 1.233 1.18 1.726s1.097.875 1.778 1.145 1.421.405 2.219.405a6.26 6.26 0 0 0 2.06-.335c.658-.223 1.257-.593 1.797-1.109l.51.687c-.551.528-1.215.927-1.99 1.197a7.47 7.47 0 0 1-2.412.387zm3.539-1.673v-4.526h.863v4.614l-.863-.088z"
								fill="#686868"
							/>
						</svg>
					</a>
					<div className="collapse navbar-collapse" id="navbar">
						<ul className="navbar-nav mx-auto gap-3">
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									THE<span className="d-xl-block"></span>STRUGGLE
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									THE<span className="d-xl-block"></span>SOLUTION
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									SUCCESS<span className="d-xl-block"></span>STORIES
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									OUR<span className="d-xl-block"></span>GUARANTEE
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									ORIGIN<span className="d-xl-block"></span>STORY
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									UNIQUE<span className="d-xl-block"></span>APPROACH
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link lh-1 fw-medium text-center" href="#">
									NEXT<span className="d-xl-block"></span>STEP
								</a>
							</li>
						</ul>
					</div>
					<a
						href="#"
						className="btn btn-black ms-auto me-2 me-xl-0 d-none d-sm-block"
					>
						GET IN TOUCH
						<img src="/images/arrow-right-up.svg" alt="Arrow" />
					</a>
					<button className="navbar-toggler pe-0" type="button">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
		</header>
	);
}