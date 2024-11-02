export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 py-5">
					<div className="col text-center text-md-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="150"
							height="51"
							fill="#fff"
						>
							<path d="M8.853 26.574L.378.091h9.194l6.848 22.36h-4.616L19.068.091h8.21l6.772 22.36h-4.427l7.15-22.36h8.475l-8.475 26.483h-9.572L21.679 8.263h2.573l-5.826 18.311H8.853zm46.55-16.647h11.804v6.432H55.404V9.927zm.605 9.912H69.25v6.734H47.232V.091h21.527v6.734h-12.75V19.84zm36.345-8.475h11.652v6.734H92.354v-6.734zm.605 15.209H84.03V.091h21.528v6.734H92.959v19.749zm15.419 0V.091h8.929v26.483h-8.929zm10.768 0l11.804-16.495-.038 6.243L119.486.091h10.026l6.659 9.837-4.275.038 6.507-9.875h9.61l-11.426 15.89V9.776l11.993 16.798h-10.215l-6.658-10.291 4.123-.038-6.507 10.329h-10.177zM2.931 50.751V33.933h1.033l7.808 13.479h-.553l7.784-13.479h1.009l.024 16.818h-1.201l-.024-14.968h.336l-7.376 12.734h-.601l-7.4-12.734h.36v14.968H2.931zm20.159 0l7.736-16.818h1.225l7.736 16.818h-1.321l-7.304-16.049h.529l-7.28 16.049H23.09zm2.835-4.733l.408-1.033H36.4l.408 1.033H25.925zm16.916 4.733V33.933h6.03c1.41 0 2.619.224 3.628.673s1.786 1.097 2.331 1.946c.545.833.817 1.85.817 3.051 0 1.169-.272 2.178-.817 3.027-.545.833-1.321 1.482-2.331 1.946-1.009.448-2.218.673-3.628.673h-5.358l.553-.577v6.079h-1.225zm11.676 0l-4.373-6.103h1.393l4.373 6.103h-1.394zm-10.451-6.006l-.553-.577h5.358c1.81 0 3.179-.4 4.108-1.201.945-.801 1.417-1.922 1.417-3.364 0-1.458-.472-2.579-1.417-3.364-.929-.801-2.298-1.201-4.108-1.201h-5.358l.553-.601v10.307zm17.124 1.754l-.048-1.538 10.715-11.028h1.49l-7.496 7.76-.697.745-3.964 4.06zm-1.057 4.253V33.933h1.225v16.818h-1.225zm12.229 0l-7.568-8.649.841-.889 8.217 9.538h-1.49zm5.745-9.082h9.106v1.081h-9.106V41.67zm.144 7.977H88.63v1.105H77.026V33.933H88.27v1.105H78.252v14.608zm18.066 1.105V35.038h-6.055v-1.105h13.335v1.105h-6.055v15.713h-1.225zm10.318 0V33.933h1.226v16.818h-1.226zm7.086 0V33.933h1.033l11.989 15.305h-.553V33.933h1.226v16.818h-1.009l-12.013-15.304h.552v15.304h-1.225zm26.752.12c-1.266 0-2.435-.208-3.508-.625-1.073-.432-2.01-1.033-2.811-1.802a8.17 8.17 0 0 1-1.826-2.691c-.433-1.041-.649-2.178-.649-3.412s.216-2.363.649-3.388a7.94 7.94 0 0 1 1.85-2.715 8.46 8.46 0 0 1 2.787-1.778c1.073-.432 2.25-.649 3.532-.649 1.217 0 2.346.192 3.387.577s1.93.961 2.667 1.73l-.769.817c-.736-.721-1.545-1.233-2.426-1.538-.865-.304-1.81-.456-2.835-.456-1.089 0-2.099.184-3.028.553a7.27 7.27 0 0 0-2.426 1.562 7.26 7.26 0 0 0-1.61 2.355c-.368.897-.552 1.874-.552 2.931s.184 2.034.552 2.931a7.26 7.26 0 0 0 1.61 2.355 7.27 7.27 0 0 0 2.426 1.562c.929.369 1.939.553 3.028.553a8.55 8.55 0 0 0 2.811-.456c.897-.304 1.714-.809 2.45-1.514l.697.937c-.753.721-1.658 1.265-2.715 1.634-1.041.352-2.138.529-3.291.529zm4.829-2.282v-6.175h1.177v6.295l-1.177-.12z" />
						</svg>
					</div>
					<div className="col">
						<h5 className="text-white mt-4 pt-2 mt-md-0 pt-md-0 text-center text-md-end">
							Follow us:
						</h5>
						<ul className="m-0 list-unstyled d-flex justify-content-center justify-content-md-end gap-4 gap-md-3">
							<li title="Facebook">
								<a href="#" className="text-decoration-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="11"
										height="21"
										fill="none"
									>
										<path
											d="M10.001 11.235l.543-3.451H7.198V5.54c0-.944.467-1.866 1.961-1.866h1.543V.735A18.7 18.7 0 0 0 7.986.503c-2.754 0-4.552 1.656-4.552 4.648v2.632H.381v3.451h3.053v8.348h3.764v-8.348h2.803z"
											fill="#fff"
										/>
									</svg>
								</a>
							</li>
							<li title="Instagram">
								<a href="#" className="text-decoration-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="21"
										height="21"
										fill="none"
									>
										<path
											d="M7.212 10.043a3.18 3.18 0 0 1 3.178-3.18 3.18 3.18 0 1 1 0 6.36 3.18 3.18 0 0 1-3.178-3.18zm-1.719 0a4.9 4.9 0 0 0 4.897 4.899 4.9 4.9 0 0 0 4.897-4.898 4.9 4.9 0 0 0-4.897-4.898 4.9 4.9 0 0 0-4.897 4.898zm8.844-5.093c0 .226.067.448.193.636s.304.335.513.422.439.109.661.065.426-.153.586-.313.269-.364.313-.586.022-.452-.065-.661-.233-.388-.421-.514-.409-.193-.636-.193h0c-.303 0-.594.121-.809.335s-.335.506-.336.809zM6.537 17.808c-.93-.042-1.435-.197-1.771-.328-.445-.173-.763-.38-1.097-.714s-.541-.651-.713-1.096c-.131-.336-.286-.841-.328-1.772l-.055-3.855.055-3.855c.042-.93.198-1.435.328-1.772.173-.445.38-.763.713-1.097a2.94 2.94 0 0 1 1.097-.714c.336-.131.841-.286 1.771-.328l3.853-.055 3.854.055c.93.042 1.434.198 1.771.328.445.173.763.38 1.097.714s.54.652.713 1.097c.131.336.286.841.328 1.772l.055 3.855-.055 3.855c-.042.93-.198 1.436-.328 1.772-.173.445-.38.763-.713 1.096s-.652.54-1.097.714c-.336.131-.841.286-1.771.328l-3.854.055c-2.547 0-2.848-.009-3.853-.055zM6.459.561c-1.015.046-1.709.207-2.315.443-.627.244-1.159.57-1.689 1.1a4.66 4.66 0 0 0-1.1 1.69C1.118 4.4.958 5.094.911 6.11l-.058 3.933.058 3.933c.046 1.016.207 1.709.443 2.316a4.66 4.66 0 0 0 1.1 1.69c.531.53 1.062.856 1.689 1.1.607.236 1.3.397 2.315.443l3.932.058 3.932-.058c1.015-.046 1.709-.207 2.315-.443a4.69 4.69 0 0 0 1.689-1.1c.531-.53.856-1.063 1.1-1.69.236-.606.398-1.3.443-2.315l.057-3.933-.057-3.933c-.046-1.016-.207-1.71-.443-2.316a4.69 4.69 0 0 0-1.1-1.69c-.53-.531-1.062-.857-1.689-1.1-.607-.236-1.3-.398-2.315-.443L10.391.503 6.459.561z"
											fill="#fff"
										/>
									</svg>
								</a>
							</li>
							<li title="LinkedIn">
								<a href="#" className="text-decoration-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="21"
										height="21"
										fill="#fff"
									>
										<path d="M20.121 20.162v-7.325c0-3.6-.775-6.35-4.975-6.35-2.025 0-3.375 1.1-3.925 2.15h-.05V6.812H7.196v13.35h4.15v-6.625c0-1.75.325-3.425 2.475-3.425 2.125 0 2.15 1.975 2.15 3.525v6.5h4.15v.025zM.446 6.813h4.15v13.35H.446V6.813zM2.521.162a2.4 2.4 0 0 0-2.4 2.4c0 1.325 1.075 2.425 2.4 2.425s2.4-1.1 2.4-2.425a2.4 2.4 0 0 0-2.4-2.4z" />
									</svg>
								</a>
							</li>
							<li title="Youtube">
								<a href="#" className="text-decoration-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="29"
										height="21"
										fill="none"
									>
										<path
											d="M28.098 3.292A3.58 3.58 0 0 0 25.58.774C23.345.162 14.403.162 14.403.162s-8.941 0-11.176.588c-1.2.329-2.188 1.318-2.518 2.541-.588 2.235-.588 6.871-.588 6.871s0 4.659.588 6.87a3.58 3.58 0 0 0 2.518 2.518c2.259.612 11.177.612 11.177.612s8.941 0 11.176-.589a3.58 3.58 0 0 0 2.518-2.517c.588-2.235.588-6.87.588-6.87s.023-4.659-.588-6.894zM11.557 14.445V5.88l7.435 4.282-7.435 4.282z"
											fill="#fff"
										/>
									</svg>
								</a>
							</li>
							<li title="X">
								<a href="#" className="text-decoration-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="18"
										fill="#fff"
									>
										<path d="M11.044 7.694L17.523.162h-1.535l-5.626 6.539L5.869.162H.686l6.795 9.889-6.795 7.898h1.535l5.941-6.906 4.745 6.906h5.182L11.044 7.694h0zM2.775 1.318h2.358l10.855 15.527H13.63L2.775 1.318z" />
										<path
											d="M7.213.597H2.427L13.74 17.567h4.786L7.213.597z"
											stroke="#fff"
											strokeWidth=".737"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="m-0" />
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-2 gap-3 gap-lg-0 py-4">
					<div className="col">
						<p className="m-0 text-center text-lg-start">
							&copy; 2024 Wefixmarketing.Inc All rights reserved
						</p>
					</div>
					<div className="col order-first order-lg-last">
						<ul className="m-0 list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end column-gap-5 row-gap-3">
							<li>
								<a href="#" className="text-decoration-none text-white">
									Terms &amp; Condition
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-white">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
