// module.exports = function (app) {
// 	var AppUser = app.models.AppUser;
// 	var Role = app.models.Role;
// 	var RoleMapping = app.models.RoleMapping;

// 	AppUser.create([
// 		{ firstName: 'test', lastName: 'Admin', DOB: '2017-02-20T12:23:59.058Z', village: 'adminVillage', location: 'adminArea', bloodGroup: 'AB+', isApproved: false, gender: 'Male', username: 'John', email: 'john@doe.com', password: 'admin' },
// 		{ firstName: 'test', lastName: 'SuperAdmin', DOB: '2017-02-20T12:23:59.058Z', village: 'superAdminVillage', location: 'superAdminArea', bloodGroup: 'O+', isApproved: false, gender: 'Male', username: 'Jane', email: 'jane@doe.com', password: 'superadmin' }
// 	], function (err, AppUsers) {
// 		if (err) throw err;

// 		Role.create({
// 			name: 'Admin'
// 		}, function (err, role) {
// 			if (err) throw err;

// 			// Make 3rd entry as an Admin
// 			role.principals.create({
// 				principalType: RoleMapping.USER,
// 				principalId: AppUsers[0].id
// 			}, function (err, principal) {
// 				if (err) throw err;
// 			});
// 		});
// 		Role.create({
// 			name: 'SuperAdmin'
// 		}, function (err, role) {
// 			if (err) throw err;

// 			// Make 3rd entry as an Admin
// 			role.principals.create({
// 				principalType: RoleMapping.USER,
// 				principalId: AppUsers[1].id
// 			}, function (err, principal) {
// 				if (err) throw err;
// 			});
// 		});
// 	});
// }