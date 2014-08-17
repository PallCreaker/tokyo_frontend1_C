// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// アラートは一回だけ．
var _is_alert_shown = false;
// myApp.onPageInit('index', function (page) {
//     $$('.navbar').css('display', 'none');
// }
myApp.onPageInit('next', function (page) {
    $$('.navbar').css('display', 'block');
    if (page.url === '/login/next/0') {
        var msg = '今あなたが学びたい、手をつけようとしている分野を選択してください';

        if (!_is_alert_shown) {
            _is_alert_shown = true;
            myApp.alert(msg, 'お知らせ');
        }
    }

    $('div.item-inner').click(function(){
        // 片方だけでは動作しない．内部処理が連鎖をhookにしている?
        var a_item = $(this).find('a.item-link')[0];
        a_item.click();
        var div_item = $(this).find('div.item-title')[0];
        div_item.click();
    });

    //select categroy
    var selected;
    $('li.cat_child').click(function (){
        // change icon
        $(".badge").css('display', 'inline');
        $(".icon-form-checkbox").remove();
        $(this).find('.item-after .badge').css('display', 'none');
        $(this).find('.item-after .check-icon').append('<i class="icon icon-form-checkbox" id="check-badge"></i>');
        // input text
        selected = $(this).find('a#cat_fin');
        console.log(cat);
        $(".footerNotification p span.select_cat").text(selected.text());
        $(".footerNotification").slideDown();
    });

    //when select, load next main page
    $$('a#sel-cat').on('click', function () {
        // location.href = '/ctc/index';
        var metaTags = document.getElementsByTagName('meta');
        var scrf_token = $('meta[name="csrf-token"]').attr('content');
        var data = {
            category: selected.val(),
            authenticity_token: scrf_token,
        };
        $.post('/ctc/create', data).done(function( responseText ) {
            location.href = '/ctc/index/3';
            console.log(data + 'success!');
        });
    });

    // when it is cancel, animetion
    $$('a#cancel').on('click', function() {
        $$('.item-after #check-badge').remove();
        $$('.item-after .badge').css('display', 'block');
        $(".footerNotification").slideUp();
    });
});

// myApp.onPageInit('last', function (page) {
//     $$('a#sel-cat').on('click', function () {
//         location.href = '/ctc/index'
//     });
// });


// Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back-blue"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }