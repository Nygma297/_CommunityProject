'use strict';

module.exports = function(Advertisement) {
	Advertisement.showads = () =>{

	}
	Advertisement.remoteMethod('showads', {
		description: 'Returns Ads',
		accepts: {
			arg: '',
			type: 'String',
			required: true
		},
		http: {
			path: '',
			verb: 'get'
		},
		returns: {
			arg: 'imageURL',
			type: 'String'
		}
	})
};
