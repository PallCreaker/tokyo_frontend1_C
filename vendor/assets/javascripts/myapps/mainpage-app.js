var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var mainContentsCallbacks = myApp.onPageInit('main', function(page) {
    $$('.navbar').css('display', 'block');
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
        if($('#firstStep').val() == "" || $('#secondStep').val() == "" ){
            myApp.alert('内容が入力されていません。', 'お知らせ');
        } else {
            myApp.closeModal('.popup-about');
            thisPanel.css({
                '-webkit-filter': 'none',
                'filter': 'none'
            });
        }
    });
    // console.log(this);
    $(function() {
        myApp.popup('.popup-notification');
        $(".footerNotification").slideDown();
        var flatcolors = [
            '#1abc9c','#3498db','#9b59b6','#34495e',
            '#16a085','#27ae60','#2980b9','#2c3e50',
            '#f1c40f','#e67e22','#e74c3c','#95a5a6',
            '#f39c12','#d35400','#c0392b','#7f8c8d'
        ];
        $(".answerPanels").each(function() {
            var rnd = Math.floor( Math.random() * flatcolors.length);
            $(this).css('background-color',flatcolors[rnd]);
        });
    });
});

mainContentsCallbacks.trigger();