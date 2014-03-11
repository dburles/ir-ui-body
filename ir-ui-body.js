if (Meteor.isClient) {
  UI.body.helpers({
    test: function() {
      return "You should see this text";
    }
  });
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('testTemplate', {
    path: '/'
  });
});
