Template[getTemplate('postAvatars')].rendered = function () {
  $('[data-toggle="tooltip"]').tooltip();
};

Template[getTemplate('postAvatars')].destroyed = function () {
  $('[data-toggle="tooltip"]').tooltip('destroy');
};
