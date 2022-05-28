import React from "react";

const Portfolio = () => {
	return (
		<div className="mt-12 mb-12 ml-48 justify-center mx-12">
			<label for="my-modal-6" className="btn modal-button mx-auto ">
				Know About Me
			</label>

			<input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<h3 class="font-bold text-lg"> Name: Mohammad Raihanul Islam</h3>
					<p class="py-4 font-bold text-lg">Email: raihanulmcse@gmail.com</p>
					<p class="py-4 font-bold text-lg">
						Educational Background: Diploma in computer science, Bsc in IT (Last
						semester), Majoring in business Inteligence
					</p>
					<p class="py-4 font-bold text-lg">
						Project: https://gadget-house-e6ee3.web.app/
						https://showshad-uia.github.io/PC-Builder-App-/
						https://showshad-uia.github.io/weather-app/
					</p>
					<p class="py-4 font-bold text-lg">
						Technology: So far I have learned HTML, CSS, JavaScript,tailwind,
						Bootstrap,daisyUiCss, react,nodejs,express.js, mongoDB,and son on..
					</p>
					<div class="modal-action">
						<label for="my-modal-6" class="btn">
							Thank You 🙂 !
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
