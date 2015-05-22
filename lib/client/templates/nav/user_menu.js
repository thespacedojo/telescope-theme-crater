Template.user_menu.helpers({
  user: function () {
    return Meteor.user();
  },
  userEditUrl: function () {
    return Router.path('user_edit', {slug: Meteor.user().telescope.slug});
  }
});