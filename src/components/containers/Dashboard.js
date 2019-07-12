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

// Data Files
import Editors from "../../data/editors";
import Departments from "../../data/departments";
import Contributors from "../../data/contributors";
import Users from "../../data/users";

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

	// Set Application State
	const [isAdmin, setIsAdmin] = useState(false);
	const [contributors, setContributors] = useState(Contributors);
	const [editors, setEditors] = useState(Editors);
	const [departments, setDepartments] = useState(Departments);

	const getEditorGroups = () => {
		// Return an array of ID numbers for each group the user edits.
		let editorIds = editors
			.filter(editor => editor.userId === user.id)
			.map(editor => editor.deptId);

		// User is Editor
		if (editorIds.length > 0) {
			/*	Create an array of objects based on the number of groups the 	
				user edits.	*/
			return editorIds.map(id => ({
				// Name of the group
				name: departments.find(department => department.id === id).name,
				// ID of the group
				deptId: id,
				// Find Contributers for the group
				contributors: contributors
					.filter(
						contributor => contributor.deptId === id
						// Create a sub-array of objects for the group contributors.
					)
					.map(contributor => ({
						// ID of the Contributor
						id: contributor.id,
						// Name of the Contributor
						name: users.find(user => user.id === contributor.userId)
							.name,
						// Email
						email: users.find(
							user => user.id === contributor.userId
						).email
					})),
				// Find other Editors in the Group
				editors: Editors.filter(
					editor => editor.deptId === id && editor.userId !== user.id
					// Create a sub-array of objects for the group editors.
				).map(editor => ({
					// ID of the Editor
					id: editor.userId,
					// Name of the Editor
					name: users.find(user => user.id === editor.userId).name,
					// Email
					email: users.find(user => user.id === editor.userId).email
				}))
			}));
		} else {
			return null;
		}
	};

	let editorGroups = getEditorGroups();

	let editorSection = null;

	if (editorGroups) {
		editorSection = (
			<Fragment>
				<Typography variant="h5" component="h3">
					Your Departments:
				</Typography>
				{editorGroups.map(editorGroup => (
					<Typography
						key={editorGroup.deptId}
						variant="h6"
						component="h4"
						gutterBottom
					>
						{editorGroup.name}
					</Typography>
				))}
			</Fragment>
		);
	}

	console.log(editorGroups);

	// Is User Not Logged In?
	return !user.name ? (
		// Redirect to Login Screen
		<Redirect to="/" />
	) : (
		// Otherwise ...
		<Container className={classes.container}>
			{/* Display User Name */}
			<Typography variant="h4" component="h2" gutterBottom>
				Hello, {user.name}.
			</Typography>
			{editorSection}
		</Container>
	);
};
