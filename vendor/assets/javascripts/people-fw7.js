var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('people0', function (page) {
});


$$('#notification').on('click', function(){
	myApp.addNotification({
    	title: 'Hello world',
    	message: 'Notifications exist!'
	});
});

