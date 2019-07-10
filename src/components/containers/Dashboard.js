// React Modules
import React, { Fragment, useState, useEffect } from "react";

//Material-ui Components
import {
	makeStyles,
	Container,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Table,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	Button,
	ButtonGroup
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import EditIcon from "@material-ui/icons/Edit";

// React-Router Components
import { Redirect } from "react-router-dom";

// Component Styling
const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: "#eee",
		minHeight: "100vh"
	},
	paper: {
		padding: "1em"
	},

	title: {
		backgroundColor: theme.palette.primary.dark,
		color: "#ffffff"
	},
	table: {
		overflowX: "scroll",
		minWidth: 320
	}
}));

// Functional Component
export default ({ user, users }) => {
	// Bring in Component Styling
	const classes = useStyles();

	// Is User Not Logged In?
	return !user.name ? (
		// Redirect to Login Screen
		<Redirect to="/" />
	) : (
		// Otherwise ...
		<Container className={classes.container}>
			<Fragment />
			{/* Display User Name */}
			<Typography variant="h4" component="h2" gutterBottom>
				Hello, {user.name}.
			</Typography>
		</Container>
	);
};
