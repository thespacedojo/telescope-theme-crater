Meteor.startup(function () {
  $('body').on('click', '.dropdown-menu', function(event) {
    event.stopPropagation();
  });
});
