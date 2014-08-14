// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('index1', function (page) {
    // run createContentPage func after link was clicked
    $$('.closeFooterNotification').on('click', function () {
        
        $$('.footerNotification').hide();
    });
    //myApp.alert('今あなたが学びたい、手をつけようとしている分野を選択してください','お知らせ');
});
myApp.onPageInit('index2', function (page) {
    // run createContentPage func after link was clicked
/*    myApp.modal({
       title:  'お知らせ',
       text: '「経済」カテゴリでは、より専門的な内容を選択することが出来ます。',
       buttons: [
         {
           text: '経済',
           onClick: function() {
             myApp.alert('経済を選択しました。','先の画面に遷移します')
           }
         },
         {
           text: '選択する',
           onClick: function() {
           }
         }
       ]
     })
*/
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back-blue"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}