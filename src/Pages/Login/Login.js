import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	if (user) {
		console.log(user);
	}
	return (
		<div className="flex h-screen justify-center items-center ">
			<div className=" card w-96 bg-base-180 shadow-xl">
				<div className="card-body">
					<h2 class="text-center text-2xl  font-bold">Login</h2>
					<div class="divider">OR</div>
					<button
						onClick={() => signInWithGoogle()}
						class="btn btn-outline btn-accent"
					>
						Google SignIn
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
