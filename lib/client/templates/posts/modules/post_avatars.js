Template.post_avatars.rendered = function () {
  $('[data-toggle="tooltip"]').tooltip();
};

Template.post_avatars.destroyed = function () {
  $('[data-toggle="tooltip"]').tooltip('destroy');
};
