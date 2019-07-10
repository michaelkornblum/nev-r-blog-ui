// React Modules
import React, { useState } from "react";

// React-router Modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Material-ui Components
import { makeStyles, Container } from "@material-ui/core";

// Application Modules
import Header from "./layouts/Header";
import SignIn from "./containers/SignIn";
import Dashboard from "./containers/Dashboard";

// Data Structures
import Users from "../data/users";

// Component Styling
const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: "#eee"
	}
}));

// Functional Component
export default () => {
	// Bring in Component Styling
	const classes = useStyles();

	// Set Component States
	const [logIn, setLogin] = useState(false);
	const [users, setUsers] = useState(Users);
	const [currUser, setCurrUser] = useState({});
	const [error, setError] = useState({});

	// Log User Out
	const handleLogOut = () => {
		setCurrUser({});
		setLogin(false);
	};

	// Authenticate User
	const handleLogInSubmit = form => {
		let newUser = users.find(
			user => user.email === form.email && user.password === form.password
		);
		if (newUser) {
			setCurrUser(newUser);
			setLogin(true);
			setError({});
		} else {
			setCurrUser({});
			setError({
				message: "Invalid email or password. Please try again."
			});
		}
	};

	// Return Rendered JSX
	return (
		<div className={classes.container}>
			<Router>
				<Header logOut={handleLogOut} isLoggedIn={logIn} />
				<Switch>
					<Route
						path="/"
						exact
						render={routeProps => (
							<SignIn
								{...routeProps}
								error={error}
								logInSubmit={handleLogInSubmit}
								loggedIn={logIn}
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
