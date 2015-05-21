Package.describe({
  name: "telescope-theme-crater",
  summary: "Crater.io Theme"
});

Package.onUse(function (api) {

  api.use(['telescope:core@0.20.4']);

  api.use(['less'], 'client');

  api.addFiles([
    'lib/crater.js',
  ], ['client', 'server']);

  // Bootstrap - Base
  api.addFiles([
    'lib/client/stylesheets/lib/bootstrap/alerts.import.less',
    'lib/client/stylesheets/lib/bootstrap/badges.import.less',
    'lib/client/stylesheets/lib/bootstrap/bootstrap.import.less',
    'lib/client/stylesheets/lib/bootstrap/breadcrumbs.import.less',
    'lib/client/stylesheets/lib/bootstrap/button-groups.import.less',
    'lib/client/stylesheets/lib/bootstrap/buttons.import.less',
    'lib/client/stylesheets/lib/bootstrap/close.import.less',
    'lib/client/stylesheets/lib/bootstrap/code.import.less',
    'lib/client/stylesheets/lib/bootstrap/component-animations.import.less',
    'lib/client/stylesheets/lib/bootstrap/dropdowns.import.less',
    'lib/client/stylesheets/lib/bootstrap/forms.import.less',
    'lib/client/stylesheets/lib/bootstrap/glyphicons.import.less',
    'lib/client/stylesheets/lib/bootstrap/grid.import.less',
    'lib/client/stylesheets/lib/bootstrap/input-groups.import.less',
    'lib/client/stylesheets/lib/bootstrap/jumbotron.import.less',
    'lib/client/stylesheets/lib/bootstrap/labels.import.less',
    'lib/client/stylesheets/lib/bootstrap/list-group.import.less',
    'lib/client/stylesheets/lib/bootstrap/media.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins.import.less',
    'lib/client/stylesheets/lib/bootstrap/modals.import.less',
    'lib/client/stylesheets/lib/bootstrap/navbar.import.less',
    'lib/client/stylesheets/lib/bootstrap/navs.import.less',
    'lib/client/stylesheets/lib/bootstrap/normalize.import.less',
    'lib/client/stylesheets/lib/bootstrap/pager.import.less',
    'lib/client/stylesheets/lib/bootstrap/pagination.import.less',
    'lib/client/stylesheets/lib/bootstrap/panels.import.less',
    'lib/client/stylesheets/lib/bootstrap/popovers.import.less',
    'lib/client/stylesheets/lib/bootstrap/print.import.less',
    'lib/client/stylesheets/lib/bootstrap/progress-bars.import.less',
    'lib/client/stylesheets/lib/bootstrap/responsive-embed.import.less',
    'lib/client/stylesheets/lib/bootstrap/responsive-utilities.import.less',
    'lib/client/stylesheets/lib/bootstrap/scaffolding.import.less',
    'lib/client/stylesheets/lib/bootstrap/tables.import.less',
    'lib/client/stylesheets/lib/bootstrap/thumbnails.import.less',
    'lib/client/stylesheets/lib/bootstrap/tooltip.import.less',
    'lib/client/stylesheets/lib/bootstrap/type.import.less',
    'lib/client/stylesheets/lib/bootstrap/utilities.import.less',
    'lib/client/stylesheets/lib/bootstrap/variables.import.less',
    'lib/client/stylesheets/lib/bootstrap/wells.import.less'
  ], ['client']);

  // Bootstrap - Mixins
  api.addFiles([
    'lib/client/stylesheets/lib/bootstrap/mixins/alerts.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/background-variant.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/border-radius.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/buttons.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/center-block.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/clearfix.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/forms.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/gradients.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/grid-framework.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/grid.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/hide-text.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/image.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/labels.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/list-group.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/nav-divider.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/nav-vertical-align.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/opacity.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/pagination.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/panels.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/progress-bar.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/reset-filter.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/resize.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/responsive-visibility.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/size.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/tab-focus.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/table-row.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/text-emphasis.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/text-overflow.import.less',
    'lib/client/stylesheets/lib/bootstrap/mixins/vendor-prefixes.import.less'
  ], ['client']);

  // Ionicons - Fonts
  api.addFiles([
    'lib/public/fonts/ionicons.eot',
    'lib/public/fonts/ionicons.svg',
    'lib/public/fonts/ionicons.ttf',
    'lib/public/fonts/ionicons.woff'
  ], ['client']);

  // Ionicons - CSS
  api.addFiles([
    'lib/client/stylesheets/lib/ionicons/_ionicons-font.import.less',
    'lib/client/stylesheets/lib/ionicons/_ionicons-icons.import.less',
    'lib/client/stylesheets/lib/ionicons/_ionicons-variables.import.less',
    'lib/client/stylesheets/lib/ionicons/ionicons.less'
  ], ['client']);

  // Custom CSS - Base
  api.addFiles([
    'lib/client/stylesheets/base/variables.import.less',
    'lib/client/stylesheets/base/mixins.import.less',
    'lib/client/stylesheets/base/type.import.less',
    'lib/client/stylesheets/base/mobile.import.less',
    'lib/client/stylesheets/crater.less'
  ], ['client']);

  // Custom CSS - Components
  api.addFiles([
    'lib/client/stylesheets/components/avatars.import.less',
    'lib/client/stylesheets/components/buttons.import.less',
    'lib/client/stylesheets/components/comment-item.import.less',
    'lib/client/stylesheets/components/forms.import.less',
    'lib/client/stylesheets/components/jumbotron.import.less',
    'lib/client/stylesheets/components/navs.import.less',
    'lib/client/stylesheets/components/newsletter-banner.import.less',
    'lib/client/stylesheets/components/post-detail.import.less',
    'lib/client/stylesheets/components/post-item.import.less',
    'lib/client/stylesheets/components/post-list.import.less',
    'lib/client/stylesheets/components/telescope.import.less',
    'lib/client/stylesheets/components/update-banner.import.less',
    'lib/client/stylesheets/components/user-profile.import.less'
  ], ['client']);

  // Custom CSS - Layout
  api.addFiles([
    'lib/client/stylesheets/layout/content.import.less',
    'lib/client/stylesheets/layout/footer.import.less',
    'lib/client/stylesheets/layout/header.import.less',
    'lib/client/stylesheets/layout/tabs.import.less'
  ], ['client']);

  // Images
  api.addFiles([
    'lib/public/images/crater.png'
  ], ['client']);

  // JavaScript
  api.addFiles([
    'lib/client/compatibility/bootstrap.js'
  ], ['client']);

  // Custom Templates
  api.addFiles([
    'lib/client/templates/comments/comment_item.html',
    'lib/client/templates/common/footer.html',
    'lib/client/templates/common/layout.html',
    'lib/client/templates/nav/nav.html',
    'lib/client/templates/nav/nav.js',
    'lib/client/templates/nav/admin_menu.html',
    'lib/client/templates/nav/categories_menu.html',
    'lib/client/templates/nav/notifications_menu.html',
    'lib/client/templates/nav/user_menu.html',
    'lib/client/templates/nav/search.html',
    'lib/client/templates/nav/submit_button.html',
    'lib/client/templates/nav/tabs.html',
    'lib/client/templates/nav/tabs.js',
    'lib/client/templates/posts/modules/post_admin.html',
    'lib/client/templates/posts/modules/post_avatars.html',
    'lib/client/templates/posts/modules/post_avatars.js',
    'lib/client/templates/posts/modules/post_categories.html',
    'lib/client/templates/posts/modules/post_discuss.html',
    'lib/client/templates/posts/modules/post_domain.html',
    'lib/client/templates/posts/modules/post_domain.js',
    'lib/client/templates/posts/modules/post_info.html',
    'lib/client/templates/posts/modules/post_upvote.html',
    'lib/client/templates/posts/post_body.html',
    'lib/client/templates/posts/post_edit.html',
    'lib/client/templates/posts/posts_load_more.html',
    'lib/client/templates/posts/post_subscribe.html',
    'lib/client/templates/posts/post_subscribe.js',
    'lib/client/templates/users/user_profile.html',
    'lib/client/templates/users/user_profile.js',
    'lib/client/templates/users/profile/user_comments.html',
    'lib/client/templates/users/profile/user_downvoted_posts.html',
    'lib/client/templates/users/profile/user_info.html',
    'lib/client/templates/users/profile/user_posts.html',
    'lib/client/templates/users/profile/user_upvoted_posts.html',
    'lib/client/templates.js'
  ], ['client']);

  // Custom Configuration
  api.export([
    'viewNav',
    'postHeading',
    'postModules',
    'postMeta',
    'heroModules'
  ]);

});
