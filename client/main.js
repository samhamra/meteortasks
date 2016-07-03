import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


Tasks = new Mongo.Collection("tasks");

Meteor.subscribe('tasks');



Template.tasks.helpers({
  tasks(){
    return Tasks.find({})
  },
});

Template.tasks.events({
	"submit .add-task": function(event) {
		var name = event.target.name.value;

		Meteor.call('addTask', name);
	

		event.target.name.value = '';

		return false;
	},

	"click .delete-task": function(event) {
		Meteor.call('deleteTask', this._id);
		return false;
	}
});


