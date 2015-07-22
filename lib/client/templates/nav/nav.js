// TODO: rename this to main.js since in telescope-core there is a nav.js?
Meteor.startup(function () {
  $('body').on('click', '.dropdown-menu', function(event) {
    event.stopPropagation();
  });
});
