import React from "react";

const Progress = () => {
	return (
		<div>
			<h3 className="text-4xl text-center text-bold  text-black mb-3 mt-2">
				Business Summary
			</h3>
			<div className="stats  mb-4 gap-80 px-12 mr-10 w-full justify-center stats-vertical lg:stats-horizontal shadow">
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
