export default function Next() {
	return (
		<div id="next_step">
			<div className="py-5">
				<div className="container py-lg-5">
					<div className="row section-heading text-center">
						<div className="col">
							<p className="fw-bolder lh-1 mb-0 display-1">OUR PROCESS</p>
							<p className="fw-bolder mb-4 display-5">NEXT STEPS</p>
						</div>
					</div>
					<div className="row row-cols-1 row-cols-md-3 gap-3 gap-md-0">
						<div className="col">
							<div className="card bg-gradient h-100">
								<div className="card-body">
									<div className="card-icon mb-4">
										<svg
											width="51"
											height="51"
											viewBox="0 0 51 51"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M43.5036 14.7921L31.6432 2.93175C31.5442 2.8293 31.4252 2.74829 31.2936 2.69374C31.1619 2.6392 31.0205 2.61227 30.8781 2.61465H11.5058C10.3576 2.61465 9.25654 3.07074 8.44469 3.88258C7.63285 4.69443 7.17676 5.79553 7.17676 6.94365V43.9566C7.17676 45.1048 7.63285 46.2059 8.44469 47.0177C9.25654 47.8296 10.3576 48.2856 11.5058 48.2856H39.4917C40.6398 48.2856 41.7409 47.8296 42.5528 47.0177C43.3646 46.2059 43.8207 45.1048 43.8207 43.9566V15.5573C43.8198 15.2704 43.7059 14.9955 43.5036 14.7921ZM40.1259 14.475H33.5837C33.1531 14.475 32.7402 14.304 32.4358 13.9996C32.1313 13.6951 31.9603 13.2822 31.9603 12.8517V6.30945L40.1259 14.475ZM39.4917 46.1211H11.509C10.9349 46.1211 10.3844 45.8931 9.97848 45.4872C9.57255 45.0813 9.34451 44.5307 9.34451 43.9566V6.94365C9.34451 6.36959 9.57255 5.81904 9.97848 5.41312C10.3844 5.00719 10.9349 4.77915 11.509 4.77915H29.7991V12.8517C29.7991 13.8563 30.1981 14.8197 30.9085 15.5301C31.6189 16.2405 32.5823 16.6395 33.5869 16.6395H41.6594V43.9566C41.6594 44.2412 41.6034 44.5229 41.4944 44.7857C41.3854 45.0485 41.2257 45.2873 41.0243 45.4883C40.823 45.6894 40.584 45.8487 40.321 45.9573C40.058 46.0659 39.7762 46.1216 39.4917 46.1211Z"
												fill="black"
											/>
											<path
												d="M21.1526 19.2814C22.0195 19.2814 22.867 19.0243 23.5878 18.5427C24.3086 18.0611 24.8704 17.3765 25.2021 16.5756C25.5339 15.7747 25.6207 14.8934 25.4515 14.0432C25.2824 13.1929 24.865 12.4119 24.252 11.7989C23.639 11.1859 22.858 10.7685 22.0078 10.5994C21.1575 10.4302 20.2762 10.517 19.4753 10.8488C18.6744 11.1805 17.9898 11.7423 17.5082 12.4631C17.0266 13.1839 16.7695 14.0314 16.7695 14.8983C16.771 16.0603 17.2332 17.1743 18.0549 17.996C18.8766 18.8177 19.9906 19.2799 21.1526 19.2814ZM21.1526 12.6796C21.5914 12.6796 22.0204 12.8098 22.3852 13.0535C22.7501 13.2973 23.0345 13.6438 23.2024 14.0492C23.3703 14.4546 23.4142 14.9007 23.3286 15.3311C23.243 15.7615 23.0317 16.1568 22.7214 16.4671C22.4112 16.7773 22.0158 16.9886 21.5855 17.0742C21.1551 17.1598 20.709 17.1159 20.3036 16.948C19.8982 16.7801 19.5517 16.4957 19.3079 16.1309C19.0642 15.766 18.934 15.3371 18.934 14.8983C18.9349 14.3101 19.1689 13.7463 19.5848 13.3304C20.0007 12.9145 20.5645 12.6805 21.1526 12.6796Z"
												fill="#FF7836"
											/>
											<path
												d="M14.8098 27.6687C15.0968 27.6687 15.3721 27.5547 15.5751 27.3517C15.778 27.1488 15.892 26.8735 15.892 26.5865V25.9263C15.8935 24.863 16.3165 23.8437 17.0684 23.0918C17.8202 22.3399 18.8396 21.9169 19.9029 21.9155H22.4029C23.4662 21.9169 24.4855 22.3399 25.2374 23.0918C25.9892 23.8437 26.4123 24.863 26.4137 25.9263V26.5865C26.4137 26.8735 26.5277 27.1488 26.7307 27.3517C26.9336 27.5547 27.2089 27.6687 27.4959 27.6687C27.783 27.6687 28.0582 27.5547 28.2612 27.3517C28.4642 27.1488 28.5782 26.8735 28.5782 26.5865V25.9263C28.5762 24.2891 27.9249 22.7196 26.7673 21.5619C25.6096 20.4042 24.04 19.753 22.4029 19.751H19.9029C18.2657 19.753 16.6961 20.4042 15.5385 21.5619C14.3808 22.7196 13.7295 24.2891 13.7275 25.9263V26.5865C13.7275 26.8735 13.8416 27.1488 14.0445 27.3517C14.2475 27.5547 14.5228 27.6687 14.8098 27.6687Z"
												fill="#FF7836"
											/>
											<path
												d="M14.2063 35.5876H27.3394C27.6264 35.5876 27.9017 35.4736 28.1047 35.2706C28.3076 35.0676 28.4216 34.7924 28.4216 34.5053C28.4216 34.2183 28.3076 33.943 28.1047 33.7401C27.9017 33.5371 27.6264 33.4231 27.3394 33.4231H14.2063C13.9192 33.4231 13.644 33.5371 13.441 33.7401C13.238 33.943 13.124 34.2183 13.124 34.5053C13.124 34.7924 13.238 35.0676 13.441 35.2706C13.644 35.4736 13.9192 35.5876 14.2063 35.5876Z"
												fill="#FF7836"
											/>
											<path
												d="M34.769 39.1223H14.2063C13.9192 39.1223 13.644 39.2363 13.441 39.4393C13.238 39.6423 13.124 39.9175 13.124 40.2046C13.124 40.4916 13.238 40.7669 13.441 40.9698C13.644 41.1728 13.9192 41.2868 14.2063 41.2868H34.769C35.0561 41.2868 35.3314 41.1728 35.5343 40.9698C35.7373 40.7669 35.8513 40.4916 35.8513 40.2046C35.8513 39.9175 35.7373 39.6423 35.5343 39.4393C35.3314 39.2363 35.0561 39.1223 34.769 39.1223Z"
												fill="#FF7836"
											/>
										</svg>
									</div>
									<h5 className="card-title fw-bold">
										YOUR GOALS &amp; CHALLENGES
									</h5>
									<p className="card-text fw-medium">
										We will discuss your business goals and challenges
									</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card bg-gradient h-100">
								<div className="card-body">
									<div className="card-icon mb-4">
										<svg
											width="46"
											height="46"
											viewBox="0 0 46 46"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M39.5598 8.64801L35.0261 4.11285C34.0037 3.07082 32.6242 2.49707 31.142 2.49707H10.3154C7.29199 2.49707 4.83105 4.95801 4.83105 7.98144V38.9189C4.83105 41.9424 7.29199 44.4033 10.3154 44.4033H35.6842C38.7076 44.4033 41.1686 41.9494 41.1686 38.9316V12.5236C41.1686 11.0428 40.5948 9.66332 39.5598 8.64801ZM33.2289 5.89598L37.7795 10.4466C38.3336 10.9894 38.6373 11.7277 38.6373 12.525V12.9497H32.2754C31.4233 12.9497 30.7286 12.2564 30.7286 11.4028V5.02832H31.142C31.9379 5.02832 32.6762 5.33348 33.2289 5.89598ZM35.6842 41.8721H10.3154C8.68699 41.8721 7.36231 40.5488 7.36231 38.9189V7.98144C7.36231 6.35301 8.68699 5.02832 10.3154 5.02832H28.1973V11.4014C28.1973 13.65 30.0268 15.4796 32.2754 15.4796H38.6373V38.933C38.6373 40.553 37.3126 41.8721 35.6842 41.8721Z"
												fill="black"
											/>
											<path
												d="M31.9125 20.5139H14.0869C13.388 20.5139 12.8213 21.0806 12.8213 21.7795C12.8213 22.4784 13.388 23.0452 14.0869 23.0452H31.9125C32.6114 23.0452 33.1782 22.4784 33.1782 21.7795C33.1782 21.0806 32.6114 20.5139 31.9125 20.5139Z"
												fill="#FF7836"
											/>
											<path
												d="M31.9125 25.7607H14.0869C13.388 25.7607 12.8213 26.3275 12.8213 27.0264C12.8213 27.7253 13.388 28.292 14.0869 28.292H31.9125C32.6114 28.292 33.1782 27.7253 33.1782 27.0264C33.1782 26.3275 32.6114 25.7607 31.9125 25.7607Z"
												fill="#FF7836"
											/>
											<path
												d="M31.9122 34.3064H27.626C26.9271 34.3064 26.3604 34.8731 26.3604 35.572C26.3604 36.2709 26.9271 36.8376 27.626 36.8376H31.9122C32.6111 36.8376 33.1779 36.2709 33.1779 35.572C33.1779 34.8731 32.6111 34.3064 31.9122 34.3064Z"
												fill="#FF7836"
											/>
										</svg>
									</div>
									<h5 className="card-title fw-bold">GET A CUSTOM PLAN</h5>
									<p className="card-text fw-medium">
										We will create a marketing strategy tailored just for you
									</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card bg-gradient h-100">
								<div className="card-body">
									<div className="card-icon mb-4">
										<svg
											width="42"
											height="43"
											viewBox="0 0 42 43"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1.43857 21.4502C1.48121 21.4501 1.5238 21.4473 1.56607 21.4418C8.45288 20.5073 15.1697 18.588 21.5104 15.7427C27.9138 12.8617 33.8632 9.06304 39.1711 4.46644L38.0292 9.03582C37.9691 9.27687 38.0071 9.53193 38.1349 9.74498C38.2627 9.95802 38.4698 10.1116 38.7108 10.1721C38.7853 10.1905 38.8618 10.2 38.9386 10.2002C39.1475 10.1999 39.3504 10.1299 39.515 10.0011C39.6796 9.87236 39.7964 9.69232 39.847 9.48957L41.722 1.98957C41.7565 1.85148 41.759 1.70735 41.7295 1.56813C41.6999 1.4289 41.6391 1.29823 41.5515 1.18601C41.464 1.0738 41.352 0.982993 41.2242 0.920477C41.0963 0.857961 40.9559 0.825377 40.8136 0.825195H33.3136C33.0649 0.825195 32.8265 0.923967 32.6507 1.09978C32.4748 1.2756 32.3761 1.51405 32.3761 1.7627C32.3761 2.01134 32.4748 2.24979 32.6507 2.42561C32.8265 2.60142 33.0649 2.7002 33.3136 2.7002H38.347C33.0753 7.33291 27.1415 11.1525 20.7417 14.0327C14.5646 16.8044 8.02109 18.6738 1.31201 19.5836C1.0763 19.6155 0.86151 19.7357 0.711138 19.92C0.560766 20.1043 0.486059 20.3388 0.502149 20.5761C0.518239 20.8134 0.623924 21.0357 0.797796 21.198C0.971667 21.3603 1.20073 21.4505 1.43857 21.4502Z"
												fill="#FF7836"
											/>
											<path
												d="M40.8135 40.2002H39.876V14.8877C39.876 14.6391 39.7772 14.4006 39.6014 14.2248C39.4256 14.049 39.1871 13.9502 38.9385 13.9502H29.5635C29.3148 13.9502 29.0764 14.049 28.9006 14.2248C28.7247 14.4006 28.626 14.6391 28.626 14.8877V40.2002H26.751V20.5127C26.751 20.2641 26.6522 20.0256 26.4764 19.8498C26.3006 19.674 26.0621 19.5752 25.8135 19.5752H16.4385C16.1898 19.5752 15.9514 19.674 15.7756 19.8498C15.5997 20.0256 15.501 20.2641 15.501 20.5127V40.2002H13.626V26.1377C13.626 25.8891 13.5272 25.6506 13.3514 25.4748C13.1756 25.299 12.9371 25.2002 12.6885 25.2002H3.31348C3.06484 25.2002 2.82638 25.299 2.65056 25.4748C2.47475 25.6506 2.37598 25.8891 2.37598 26.1377V40.2002H1.43848C1.18984 40.2002 0.951379 40.299 0.775564 40.4748C0.599749 40.6506 0.500977 40.8891 0.500977 41.1377C0.500977 41.3863 0.599749 41.6248 0.775564 41.8006C0.951379 41.9764 1.18984 42.0752 1.43848 42.0752H40.8135C41.0621 42.0752 41.3006 41.9764 41.4764 41.8006C41.6522 41.6248 41.751 41.3863 41.751 41.1377C41.751 40.8891 41.6522 40.6506 41.4764 40.4748C41.3006 40.299 41.0621 40.2002 40.8135 40.2002ZM30.501 15.8252H38.001V40.2002H30.501V15.8252ZM17.376 21.4502H24.876V40.2002H17.376V21.4502ZM4.25098 27.0752H11.751V40.2002H4.25098V27.0752Z"
												fill="black"
											/>
										</svg>
									</div>
									<h5 className="card-title fw-bold">SEE REAL RESULTS</h5>
									<p className="card-text fw-medium">
										Watch your business grow with better leads, more sales
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row text-center mt-5">
						<div className="col">
							<a href="#" className="btn btn-gradient">
								BOOK YOUR CALL
								<img src="/images/arrow-right-up.svg" alt="Arrow" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
