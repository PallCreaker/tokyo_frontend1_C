var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('people0', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});