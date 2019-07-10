// React Modules
import React, { useState } from "react";

// React-Router Components
import { Redirect } from "react-router-dom";

// material-ui Components
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

// Component Styling
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
		color: "#ffffff"
	},
	textField: {
		width: "100%"
	},
	error: {
		background: theme.palette.error.dark
	}
}));

// Functional Component
export default ({ logInSubmit, loggedIn, error }) => {
	// Bring in Component Styling
	const classes = useStyles();

	// Set Component State
	const [formData, setFormData] = useState({});

	// Package Form Data for Authentication
	const handleFormSubmit = () => {
		logInSubmit(formData);
		setFormData({});
	};

	// Set Form Data From Text Fields
	const handleChange = name => event =>
		setFormData({ ...formData, [name]: event.target.value });

	// Return Rendered JSX
	return loggedIn ? (
		<Redirect to="/dashboard" />
	) : (
		<Grid
			className={classes.grid}
			container
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
							className={classes.textField}
							onChange={handleChange("email")}
							label="email"
							type="email"
							value={formData.email ? formData.email : ""}
							required
						/>
						<br />
						<TextField
							className={classes.textField}
							onChange={handleChange("password")}
							label="password"
							type="password"
							value={formData.password ? formData.password : ""}
							required
						/>
						<br />
					</CardContent>
					<CardActions>
						<Button
							variant="contained"
							color="primary"
							disabled={!formData.email || !formData.password}
							onClick={handleFormSubmit}
						>
							Sign In
						</Button>
					</CardActions>
				</form>
			</Card>
		</Grid>
	);
};
