import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);

		fetch(` https://young-springs-61644.herokuapp.com/tools/`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});
		navigate("/myReviews");
	};
	return (
		<div className="w-25 mx-auto mb-5">
			<h1>Add Review</h1>
			<form className="d-flex flex-column  " onSubmit={handleSubmit(onSubmit)}>
				<input
					className="mb-2"
					placeholder="Name"
					{...register("name", { required: true, maxLength: 20 })}
				/>
				<input
					className="mb-2"
					placeholder="Name"
					{...register("name", { required: true, maxLength: 20 })}
				/>

				<input
					className="mb-2"
					placeholder="Ratings"
					type="text"
					{...register("supplier")}
				/>

				<input
					className="mb-2 btn btn-primary"
					placeholder=""
					type="submit"
					value="Add "
				/>
			</form>
		</div>
	);
};

export default AddReview;
