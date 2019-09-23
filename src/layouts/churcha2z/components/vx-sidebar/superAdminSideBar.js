/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        url: null,
        name: "Dashboard",
        slug: "dashboard",
        icon: "HomeIcon",
        i18n: "Dashboard",
    },
    {
        url:'packags',
        name: "Our Packages",
        slug: "",
        icon: "HomeIcon",
        i18n: "Packages",

    },
    {
        header: "User",
        i18n: "User",
    },
    {
        url: "/profile",
        name: "My Profile",
        slug: "profile",
        icon: "HomeIcon",
        i18n: "MyProfile",
    },
    {
        url: null,
        name: "History",
        slug: "history",
        icon: "HomeIcon",
        i18n: "History",

    },
]