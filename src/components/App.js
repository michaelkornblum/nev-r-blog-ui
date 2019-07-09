// IMPORTS -------------------------------------------------------------------->

// React Modules
import React, { useState } from "react";

// React Router Modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Application Modules
import Header from "./layouts/Header";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";

// User Data
import Users from "../data/users";

// FUNCTIONAL COMPONENT ------------------------------------------------------->

export default () => {
	// Application State ------------------------------------------------------>
	const [logIn, setLogIn] = useState(false);
	const [users, setUsers] = useState(Users);
	const [currUser, setCurrUser] = useState({});
	const [error, setError] = useState({});

	// Event Handlers --------------------------------------------------------->

	// Log User Out
	const handleLogOut = () => {
		setCurrUser({});
		setLogIn(false);
	};

	// Authenticate User
	const handleLogInSubmit = form => {
		let newUser = users.find(
			user => user.email === form.email && user.password === form.password
		);
		if (newUser) {
			setCurrUser(newUser);
			setLogIn(true);
			setError({});
		} else {
			setCurrUser({});
			setError({
				message: "Invalid email or password. Please try again."
			});
		}
	};

	// Rendered JSX ----------------------------------------------------------->
	return (
		<div>
			<Router>
				<Header logOut={handleLogOut} isLoggedIn={logIn} />
				<Switch>
					<Route
						exact
						path="/"
						render={routeProps => (
							<SignIn
								{...routeProps}
								error={error}
								logInSubmit={handleLogInSubmit}
								isLoggedIn={logIn}
							/>
						)}
					/>
					<Route
						path="/dashboard"
						render={routeProps => (
							<Dashboard
								{...routeProps}
								user={currUser}
								users={users}
							/>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
};
