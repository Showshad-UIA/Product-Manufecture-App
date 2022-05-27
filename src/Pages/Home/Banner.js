import banner from "../../Asset/Background (31).png";

const Banner = () => {
	return (
		<div className="hero">
			<img src={banner} alt="" />
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h6 className="mb-5 text-5xl font-bold ">WELCOME TO PARTS HOUSE</h6>

					<button className="btn btn-primary">Know More</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
