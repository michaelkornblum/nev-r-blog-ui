// React Imports
import React, { useState } from "react";

// material-ui-core Imports
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

// material-ui-icons Imports
import MenuIcon from "@material-ui/icons/Menu";

// Component Styling
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

// Functional Component
export default ({ logOut, isLoggedIn }) => {
	// Bring in Component Styling
	const classes = useStyles();

	// Set Component States
	const [navDrawerOpen, setNavDrawerOpen] = useState(false);
	const [navItems] = useState(["Collections", "Items"]);

	// Show / Hide Nav Drawer
	const handleNavDrawerToggle = () => setNavDrawerOpen(!navDrawerOpen);

	const handleLogOut = () => logOut();

	// Return Rendered JSX
	return (
		<header className={classes.root}>
			<AppBar
				className={classes.appBar}
				position="static"
				color="primary"
			>
				<Toolbar>
					{isLoggedIn ? (
						<Hidden smUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="Menu"
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
									{navItems.map(navItem => (
										<ListItem key={navItem} button>
											<ListItemText primary={navItem} />
										</ListItem>
									))}
								</List>
							</Drawer>
						</Hidden>
					) : null}

					<Typography
						variant="h6"
						component="h1"
						className={classes.title}
					>
						Nev-r-Blog
					</Typography>

					{isLoggedIn ? (
						<Hidden xsDown>
							{navItems.map(navItem => (
								<Button key={navItem} color="inherit">
									{navItem}
								</Button>
							))}
							<Button color="inherit" onClick={handleLogOut}>
								Sign Out
							</Button>
						</Hidden>
					) : null}
				</Toolbar>
			</AppBar>
		</header>
	);
};
