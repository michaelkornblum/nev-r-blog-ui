const randomName = require("node-random-name");
const uuid = require("uuid/v4");
const passwordGen = require("generate-password");
const fs = require("fs");

// DEFAULT VARIABLES
let users = [],
	contributors = [],
	editors = [],
	departments = ["marketing", "e-commerce"],
	numUsers = 11,
	numEditorsPerDept = 2,
	numAdmins = 2;

// FUNCTIONS

// Save Data to Files
const saveDataFile = (fileName, data) =>
	fs.writeFileSync(
		"./src/data/" + fileName + ".js",
		"export default " + JSON.stringify(data)
	);

// Get Random Id
const getRandomId = arr => arr[Math.floor(Math.random() * arr.length)].id;

// APPLICATION CODE

// Create user array, based on number of users.
for (let i = 0; i < numUsers; i++) {
	let name = randomName({ random: Math.random });
	users.push({
		id: uuid(),
		name,
		email:
			name
				.split(" ")[0]
				.split("")
				.slice(0, 1)
				.join("")
				.toLowerCase() +
			name.split(" ")[1].toLowerCase() +
			"@mymail.com",
		password: passwordGen.generate({ length: 7, numbers: true })
	});
}

// Write user array to file
saveDataFile("users", users);

// Create Departments
departments = departments.map(department => ({
	id: uuid(),
	name: department
}));

// Write department array to file
saveDataFile("departments", departments);

// Create Admins
const admins = users
	.slice(0, numAdmins)
	.map(user => ({ id: uuid(), userId: user.id }));

// Write Admins Array to File
saveDataFile("admins", admins);

// Remove Admins from In-memory Users Array
users = users.splice(numAdmins);

// Create Editors
departments.forEach(department => {
	users.slice(0, numEditorsPerDept).forEach(user =>
		editors.push({
			id: uuid(),
			userId: user.id,
			deptId: department.id
		})
	);
	// Remove Editors from In-Memory User Array
	users = users.splice(numEditorsPerDept);
});

// Write Editors Array to File
saveDataFile("editors", editors);

// Use the Remaining Users In Memory to Create Contributors
contributors = users.map(user => ({
	id: uuid(),
	userId: user.id,
	deptId: getRandomId(departments)
}));

// Write Contributors Array to File
saveDataFile("contributors", contributors);

// Console Log Output
console.log("Test data created.");
