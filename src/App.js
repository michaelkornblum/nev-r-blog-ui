// Import React
import React from "react";
//import fs from "fs";
import userData from "./data/users";

// Functional Component
export default () => {
	const users = userData;

	console.log(users);
	return (
		<div>
			<h1>Hello, World!</h1>
		</div>
	);
};
