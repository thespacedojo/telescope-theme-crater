AccountsTemplates.configure({
  texts: {
    socialIcons: {
      facebook: "icon ion-social-facebook",
      twitter: "icon ion-social-twitter",
      meteor: "icon ion-planet"
    }
  }
});

// themeSettings.useDropdowns = false;



// viewNav = [
//   {
//     route: 'posts_top',
//     label: 'Trending'
//   },
//   {
//     route: 'posts_new',
//     label: 'Recent'
//   }
// ];

Telescope.modules.removeAll("primaryNav");
Telescope.modules.add("primaryNav",[
  {
    template: 'views_menu',
    order: 10
  }
]);

Telescope.modules.removeAll("secondaryNav");
Telescope.modules.add("secondaryNav",[
  {
    template: 'notifications_menu',
    order: 10
  },
  {
    template: 'user_menu',
    order: 20
  }
]);

Telescope.modules.removeAll("postComponents");
Telescope.modules.add("postComponents",[
  {
    template: 'post_vote',
    order: 10
  },
  {
    template: 'post_content',
    order: 20
  },
  {
    template: 'post_avatars',
    order: 30
  },
  {
    template: 'post_discuss',
    order: 40
  },
  {
    template: 'post_actions',
    order: 50
  }
]);

Telescope.modules.removeAll("postThumbnail");

Telescope.modules.removeAll("postHeading");
Telescope.modules.add("postHeading", [
  {
    template: 'post_title',
    order: 10
  }
]);

Telescope.modules.removeAll("postMeta");
Telescope.modules.add("postMeta", [
  {
    template: 'post_domain',
    order: 10
  },
  {
    template: 'post_info',
    order: 20
  },
  {
    template: 'post_admin',
    order: 30
  }
]);

Telescope.modules.removeAll("profileDisplay");
Telescope.modules.add("profileDisplay", [
  {
    template: 'craterUserInfo',
    order: 1
  },
  {
    template: 'craterUserPosts',
    order: 2
  },
  {
    template: 'craterUserUpvotedPosts',
    order: 3
  },
  {
    template: 'craterUserDownvotedPosts',
    order: 4
  },
  {
    template: 'craterUserComments',
    order: 5
  }
]);
