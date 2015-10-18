Template.tabs.helpers({
  profileUrl: function () {
    if (Meteor.user()) {
      return Router.routes['user_profile'].path({_idOrSlug: Meteor.user().slug});
    } else {
      return Router.routes['atSignIn'].path();
    }
  }
});
