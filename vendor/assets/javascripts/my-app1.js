// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;
var $j = jQuery.$;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    // dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('index', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        alert('Test');
        // createContentPage();
    }); 
});
