var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var mainContentsCallbacks = myApp.onPageInit('main', function (page) {
	$$('#main-page').click();
});

myApp.onPageInit('matching', function (page) {
	$$('.preloader').hide();
});

myApp.onPageInit('notification', function (page) {

});

myApp.onPageInit('question', function (page) {

});

myApp.onPageInit('questions', function (page) {

});

// notification sample
// $$('#notification').on('click', function(){
// 	myApp.addNotification({
// 		title: 'Hello world',
// 		message: 'Notifications exist!'
// 	});
// });


mainContentsCallbacks.trigger();