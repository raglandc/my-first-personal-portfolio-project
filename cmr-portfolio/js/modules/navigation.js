export default function navigation() {
  //function 1
  //navigation btn main on and off
  $(".header__menu-icon").click(function () {
    // if menu is open, main menu hides
    $(".header__menu").toggleClass("hidden");

    //turn icon into an x
    $(".navigation__menu-exit-container-bar1").toggleClass("change1");
    $(".navigation__menu-exit-container-bar2").toggleClass("change2");
    $(".navigation__menu-exit-container-bar3").toggleClass("change3");

    //unhide navigation
    $(".navigation").toggleClass("hidden");
  });

  //function 2
  //if link in menu is pressed close menu and return icon
  $(".navigation__popup-links-link").click(function () {
    //return main menu
    $(".header__menu").toggleClass("hidden");

    //hide navigation
    $(".navigation").toggleClass("hidden");

    //back to menu
    $(".navigation__menu-exit-container-bar1").toggleClass("change1");
    $(".navigation__menu-exit-container-bar2").toggleClass("change2");
    $(".navigation__menu-exit-container-bar3").toggleClass("change3");
  });

  //function 3

  $(window).scroll(() => {
    let windowLength = window.scrollY;
    let contactY = $(".contact").offset();
    // console.log(contactY, windowLength);

    //if user scrolls to top of contact page hide main menu

    if (windowLength >= contactY.top) {
      $(".header__menu").toggleClass("hidden");
    } else {
      $(".header__menu").removeClass("hidden");
    }
  });
}
