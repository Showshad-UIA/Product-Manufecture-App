import React from "react";
import img from "../../Asset/Background (24).png";
import img1 from "../../Asset/Background (25).png";
import img2 from "../../Asset/Background (26).png";
const Progress = () => {
	return (
		<div className="px-12">
			<h3 className="text-4xl mt-5 text-center text-bold  text-black mb-3">
				Business Summary
			</h3>
			<div className="divider"></div>
			<div className="stats  mb-4 gap-80 px-12 mr-10 w-full justify-center stats-vertical lg:stats-horizontal shadow">
				<div className="stat">
					<div className="stat-title">
						<img src={img2} alt="" />
						Award
					</div>
					<div className="stat-value">30</div>
					<div className="stat-desc">Jan 1st - Feb 1st</div>
				</div>

				<div className="stat">
					<div className="stat-title">
						<img src={img1} alt="" />
						New CLients
					</div>
					<div className="stat-value">4,200</div>
					<div className="stat-desc">↗︎ 400 (22%)</div>
				</div>

				<div className="stat  ">
					<div className="stat-title">
						<img src={img} alt="" />
						Outcomes
					</div>
					<div className="stat-value">1,200</div>
					<div className="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;
