var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var mainContentsCallbacks = myApp.onPageInit('main', function(page) {
    var thisPanel = null;
    $$('.closeFooterNotification').on('click', function() {
        myApp.closeModal('.popup-notification');
    });
    $$(".answerPanels").on('click', function() {
        myApp.popup('.popup-about');
        thisPanel = $(this);
        //
    });
    $$('#answerSubmit').on('click', function() {
        myApp.closeModal('.popup-about');
        thisPanel.css({
            '-webkit-filter': 'none',
            'filter': 'none'
        });
    });
    $(function() {
        myApp.popup('.popup-notification');
        $(".answerPanels").each(function() {

        });
    });
});

// notification sample
// $$('#notification').on('click', function(){
// 	myApp.addNotification({
// 		title: 'Hello world',
// 		message: 'Notifications exist!'
// 	});
// });

mainContentsCallbacks.trigger();