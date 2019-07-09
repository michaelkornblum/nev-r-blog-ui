// IMPORTS -------------------------------------------------------------------->

// React Modules
import React, { useState } from "react";

// React Router Components
import { Redirect } from "react-router-dom";

// Material UI Core Components
import {
	makeStyles,
	Grid,
	Card,
	CardContent,
	CardActions,
	CardHeader,
	Typography,
	Button,
	TextField,
	SnackbarContent
} from "@material-ui/core";

// COMPONENT STYLING ---------------------------------------------------------->
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	card: {
		width: "100%",
		maxWidth: 360,
		marginTop: "1em"
	},
	grid: {
		minHeight: "100vh"
	},
	title: {
		backgroundColor: theme.palette.primary.dark,
		color: "#fff"
	},
	textField: {
		width: "100%"
	},
	error: {
		background: theme.palette.error.dark
	}
}));

// FUNCTIONAL COMPONENT ------------------------------------------------------->
export default ({ logInSubmit, isLoggedIn, error }) => {
	// Use Component Styling
	const classes = useStyles();

	// Application State ------------------------------------------------------>
	const [formData, setFormData] = useState({});

	// Event Handlers --------------------------------------------------------->
	// Set Form Data from Text Fields
	const handleChange = name => event =>
		setFormData({ ...formData, [name]: event.target.value });

	// Package Form Data
	const handleFormSubmit = () => {
		logInSubmit(formData);
		setFormData({});
	};

	// Rendered JSX ----------------------------------------------------------->
	return isLoggedIn ? (
		<Redirect to="/dashboard" />
	) : (
		<Grid
			container
			className={classes.grid}
			spacing={0}
			direction="column"
			alignItems="center"
			justify="flex-start"
		>
			<Card className={classes.card}>
				<CardHeader className={classes.title} title="Hi There" />
				<form>
					<CardContent>
						<Typography paragraph>
							Please enter your email address and password in the
							fields below.
						</Typography>

						{error.message ? (
							<SnackbarContent
								className={classes.error}
								message={error.message}
							/>
						) : null}

						<TextField
							required
							className={classes.textField}
							onChange={handleChange("email")}
							value={formData.email ? formData.email : ""}
							label="email"
							type="email"
						/>
						<br />
						<TextField
							required
							className={classes.textField}
							onChange={handleChange("password")}
							value={formData.password ? formData.password : ""}
							label="password"
							type="password"
						/>
						<br />
					</CardContent>
					<CardActions>
						<Button
							onClick={handleFormSubmit}
							disabled={!formData.email || !formData.password}
						>
							Sign In
						</Button>
					</CardActions>
				</form>
			</Card>
		</Grid>
	);
};
