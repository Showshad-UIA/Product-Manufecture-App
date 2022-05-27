import React, { useState } from "react";

// const FORM_ENDPOINT = "";

const ContactForm = () => {
	// const [submitted, setSubmitted] = useState(false);
	// const handleSubmit = () => {
	// 	setTimeout(() => {
	// 		setSubmitted(true);
	// 	}, 100);
	// };

	// if (submitted) {
	// 	return (
	// 		<>
	// 			<div className="text-2xl">Thank you!</div>
	// 			<div className="text-md">We'll be in touch soon.</div>
	// 		</>
	// 	);
	// }

	return (
		// <form
		// 	action={FORM_ENDPOINT}
		// 	onSubmit={handleSubmit}
		// 	method="POST"
		// 	target="_blank"
		// 	className="w-50 "
		// >
		// 	<div className="text-primary text-center font-bold text-3xl">
		// 		{" "}
		// 		Contact
		// 	</div>
		// 	<div className="mb-3 pt-0">
		// 		<input
		// 			type="text"
		// 			placeholder="Your name"
		// 			name="name"
		// 			className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
		// 			required
		// 		/>
		// 	</div>
		// 	<div className="mb-3 pt-0">
		// 		<input
		// 			type="email"
		// 			placeholder="Email"
		// 			name="email"
		// 			className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
		// 			required
		// 		/>
		// 	</div>
		// 	<div class="form-control mb-3  w-50">
		// 		<textarea
		// 			class="textarea textarea-bordered h-24"
		// 			placeholder="Share your comments"
		// 		></textarea>
		// 	</div>
		// 	<div className="mb-3 pt-0">
		// 		<button
		// 			className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
		// 			type="submit"
		// 		>
		// 			Send a message
		// 		</button>
		// 	</div>
		// </form>
		<div class="hero  bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold text-black">Contact Us!</h1>
					<p class="py-6">
						Hi, elegant customers, feel free to contact us for any inquiry. We
						are here to serve you! .
					</p>
				</div>
				<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
					<div class="card-body">
						<div class="form-control">
							<label class="label">
								<span class="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Your name"
								class="input input-bordered"
							/>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="Type your email"
								class="input input-bordered"
							/>
							<label class="label">
								<a href="#" class="label-text-alt link link-hover"></a>
							</label>
						</div>

						<textarea
							class="textarea textarea-primary"
							placeholder="Put your comments"
						></textarea>
						<div class="form-control mt-6">
							<button class="btn btn-primary">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
