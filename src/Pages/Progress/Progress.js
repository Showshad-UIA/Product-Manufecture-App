import React from "react";

const Progress = () => {
	return (
		<div>
			<h3 className="text-3xl text-center text-primary mb-3 mt-2">
				Our Progress
			</h3>
			<div className="stats  mb-4 gap-80 px-12 mr-10 w-50 justify-center stats-vertical lg:stats-horizontal shadow">
				<div className="stat">
					<div className="stat-title">Customer</div>
					<div className="stat-value">31K</div>
					<div className="stat-desc">Jan 1st - Feb 1st</div>
				</div>

				<div className="stat">
					<div className="stat-title">New CLients</div>
					<div className="stat-value">4,200</div>
					<div className="stat-desc">↗︎ 400 (22%)</div>
				</div>

				<div className="stat  ">
					<div className="stat-title">Outcomes</div>
					<div className="stat-value">1,200</div>
					<div className="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;
