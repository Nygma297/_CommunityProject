module.exports = (app) => {
	// var AppUser = app.models.AppUser;
	// var Role = app.models.Role;
	// var RoleMapping = app.models.RoleMapping;

	// AppUser.create([
	// 	{ firstName: 'test', lastName: 'admin', DOB: '2017-02-20T12:23:59.058Z', village: 'adminVillage', location: 'adminArea', bloodGroup: 'AB+', isApproved: false, gender: 'Male', username: 'John', email: 'john@doe.com', password: 'admin' },
	// 	{ firstName: 'test', lastName: 'Superadmin', DOB: '2017-02-20T12:23:59.058Z', village: 'superadminVillage', location: 'superadminArea', bloodGroup: 'O+', isApproved: false, gender: 'Male', username: 'Jane', email: 'jane@doe.com', password: 'superadmin' }
	// ], (err, AppUsers) => {
	// 	if (err) throw err;

	// 	Role.create({
	// 		name: 'Admin'
	// 	}, (err, role) => {
	// 		if (err) throw err;

	// 		// Make 3rd entry as an admin
	// 		role.principals.create({
	// 			principalType: RoleMapping.USER,
	// 			principalId: AppUsers[0].id
	// 		}, (err, principal) => {
	// 			if (err) throw err;
	// 		});
	// 	});
	// 	Role.create({
	// 		name: 'SuperAdmin'
	// 	}, (err, role) => {
	// 		if (err) throw err;

	// 		// Make 3rd entry as an admin
	// 		role.principals.create({
	// 			principalType: RoleMapping.USER,
	// 			principalId: AppUsers[1].id
	// 		}, (err, principal) => {
	// 			if (err) throw err;
	// 		});
	// 	});
	// });
}