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

$$('#notification').on('click', function(){
	myApp.addNotification({
    	title: 'Hello world',
    	message: 'Notifications exist!'
	});
});

mainContentsCallbacks.trigger();