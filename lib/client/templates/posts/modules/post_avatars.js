Template.post_avatars.onRendered(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

Template.post_avatars.onDestroyed(function () {
  $('[data-toggle="tooltip"]').tooltip('destroy');
});
