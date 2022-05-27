import React from "react";

const Blog = () => {
	return (
		<div className="container mt-5  mb-5">
			<div className="font-bold mb-5 text-center text-black">
				Question 1: How will you improve the performance of a React Application?
				<h3 className="text-primary">
					Few things are important like, I need to make sure that only required
					props are given to components in order to minimize React rendering. It
					will help us to manage overall CPU use and prevent rendering
					superfluous features. The idea is to construct a functional component
					that will collect and redistribute all props to other components..
				</h3>
			</div>

			<div className="font-bold mb-5 text-center text-black">
				Question 2: What are the different ways to manage a state in a React
				application?
				<h3 className="text-primary">
					Since every state adjustment would re-render all basic
					characteristics, the state aids in maintaining the information of
					various components in sync. It can also serve as a communication link
					between different components. One of the most difficult aspects of any
					application is managing state, which is why there are so many state
					management frameworks and solutions available, such as Redux, MobX,
					and others. There are few available state like locale state, server
					state, gloval state and so on
				</h3>
			</div>
			<div className=" font-bold  text-center text-black mb-5">
				Question 3: How does prototypical inheritance work?
				<h3 className="text-primary">
					Prototypal Inheritance is based on the premise that one object can
					refer to another object and inherit all of its properties. The Single
					Pattern's major goal is to allow numerous instances of an object to
					share similar attributes.
				</h3>
			</div>
			<div className=" mb-5 font-bold text-center text-black">
				Question 4: Why you do not set the state directly in React. For example,
				if you have const [products, setProducts] = useState([]). Why you do not
				set products = [...] instead, you use the setProducts?
				<h3 className="text-primary">
					SQL Data structure is relational or NoSQL is no relational data
					structure.SQL databases defines and manipulates data based structured
					query language.NoSQL is database dynamic schema for unstructured
					data.SQL vertically scalable , NoSQL is horizontally scalable.NoSQL is
					follows CAP,SQL follows ACID property.
				</h3>
			</div>
			<div className="font-bold text-center text-black mb-5">
				Question 5: You have an array of products. Each product has a name,
				price, description, etc. How will you implement a search to find
				products by name?
				<h3 className="text-primary mb-5">
					Based on that let say the array name is bookList. There are
					collections of book, name and their descriptions as well. So if I want
					to get the name of book i should use array book.name.
				</h3>
			</div>
			<div className="font-bold text-black mb-5 text-center">
				Question 6: What is a unit test? Why should write unit tests?
				<h3 className="text-primary">
					Testing Phase is a sort of system testing that examines individual
					software units or components. The goal is to ensure that each unit of
					software code works as intended. Unit testing is carried out by
					developers during the app development process. Unit tests are used to
					isolate a part of code and ensure that it is accurate. An particular
					function, method, process, module, or object might be considered a
					unit.
					<p>
						Because software developers sometimes want to save time by
						conducting limited unit testing, this is a misconception because
						insufficient unit testing leads to large costs in defect correction
						during System Testing, Integration Testing, and even Beta Testing
						after the programme has been constructed. It saves time and money in
						the long run if thorough unit testing is done early in the
						development process.
					</p>
				</h3>
			</div>
		</div>
	);
};

export default Blog;
