Meteor.methods({
	addTask: function(name) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('No access!');
		}

		Tasks.insert({
			name: name, 
			createdAt: new Date(), 
			userId: Meteor.userId() 
		});
	},
	deleteTask: function(taskId) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('No access!');
		}

		Tasks.remove(taskId)
	}
});