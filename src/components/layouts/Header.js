// IMPORTS -------------------------------------------------------------------->

// React Modules
import React, { useState } from "react";

// Material UI Core Components
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Hidden,
	Drawer,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";

// Material UI Icon Imports
import MenuIcon from "@material-ui/icons/Menu";

// COMPONENT STYLING ---------------------------------------------------------->
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	list: {
		width: "50vw"
	},
	appBar: {
		marginBottom: "1em"
	}
}));

// FUNCTIONAL COMPONENT ------------------------------------------------------->
export default ({ logOut, isLoggedIn }) => {
	// Use Component Styling
	const classes = useStyles();

	// Application State ------------------------------------------------------>
	const [navDrawerOpen, setNavDrawerOpen] = useState(false);

	// Miscellaneous Variables ------------------------------------------------>
	const navItems = ["collections", "items"];

	// Event Handlers --------------------------------------------------------->

	// Toggle Nav Drawer
	const handleNavDrawerToggle = () => setNavDrawerOpen(!navDrawerOpen);

	// Log Out User
	const handleLogOut = () => logOut();

	// Rendered JSX ----------------------------------------------------------->
	return (
		<header className={classes.root}>
			<AppBar
				position="static"
				color="primary"
				className={classes.appBar}
			>
				<Toolbar>
					{isLoggedIn ? (
						<Hidden smUp>
							<IconButton
								edge="start"
								color="inherit"
								className={classes.menuButton}
								onClick={handleNavDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Drawer
								className={classes.navDrawer}
								open={navDrawerOpen}
								onClose={handleNavDrawerToggle}
							>
								<List className={classes.list}>
									<ListItem button onClick={handleLogOut}>
										<ListItemText primary="Sign Out" />
									</ListItem>
									{navItems.map(item => (
										<ListItem button key={item}>
											<ListItemText primary={item} />
										</ListItem>
									))}
								</List>
							</Drawer>
						</Hidden>
					) : null}

					<Typography
						className={classes.title}
						variant="h6"
						component="h1"
					>
						Nev-r-Blog
					</Typography>

					{isLoggedIn ? (
						<Hidden xsDown>
							{navItems.map(item => (
								<Button key={item} color="inherit">
									{item}
								</Button>
							))}
							<Button onClick={handleLogOut} color="inherit">
								Sign Out
							</Button>
							))}
						</Hidden>
					) : null}
				</Toolbar>
			</AppBar>
		</header>
	);
};
