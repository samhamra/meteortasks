import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});
Tasks = new Mongo.Collection("tasks");
Meteor.publish('tasks', function() {
	return Tasks.find({userId: this.userId});
});