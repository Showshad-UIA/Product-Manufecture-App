const ContactForm = () => {
	return (
		<div class="hero rounded-xl px-12 bg-base-200">
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
