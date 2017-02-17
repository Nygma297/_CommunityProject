// module.exports = (app) => {
// 	var Role = app.models.Role;

// 	Role.registerResolver('Member', (role, context, cb) => {
// 		var AppUserId = context.accessToken.userId;
// 		context.model.findById(context.modelId, (err, Event) => {
// 			if (err) return cb(err);
// 			if (!Event) return cb(new Error("Event"));

// 			var EventUser = app.models.EventUser;
// 			var Event = app.models.Event;
// 			EventUser.find({ where: { "userId": AppUserId, "eventId": context.modelId } }, (err, Result) => {
// 				if (err) {
// 					return cb(err);
// 					if (res > 0) {
// 						// At least one Event associated with this AppUser 
// 						return cb(null, true);
// 					} else {
// 						// AppUser is not Associated with the Event
// 						return cb(null, false);
// 					}
// 				}
// 			})
// 		});
// 	});
// }