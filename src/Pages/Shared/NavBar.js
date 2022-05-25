import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const navItem = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>

			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/order">Order</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<Link to="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link to="/dashboard">
					Dashboard
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
					</svg>
				</Link>
				<ul class="p-2 bg-base-100">
					<li>
						<Link to="/review">Review</Link>
					</li>
					<li>
						<Link to="/items">Items</Link>
					</li>
				</ul>
			</li>

			<li>
				<Link to="/login">Login</Link>
			</li>
		</>
	);
	return (
		<div className="px-12">
			<div class="navbar bg-base-100">
				<div class="navbar-start">
					<div class="dropdown">
						<label tabindex="0" class="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItem}
						</ul>
					</div>
					<a class="btn btn-ghost normal-case text-xl">Parts House</a>
				</div>
				<div class="navbar-center hidden lg:flex">
					<ul class="menu menu-horizontal p-0">{navItem}</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
