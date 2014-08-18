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
    $$('#answerSubmit').on('click', function() {
        if($('#firstStep').val() == "" || $('#secondStep').val() == "" ){
            myApp.alert('内容が入力されていません。', 'お知らせ');
        } else {
            myApp.closeModal('.popup-about');
            thisPanel.css({
                '-webkit-filter': 'none',
                'filter': 'none'
            });
            thisPanel.addClass("no-blur");
            $('#firstStep').val('');
            $('#secondStep').val('');
            var urlArray = location.href.split('/');
            var userId = urlArray[urlArray.length-1];
            var htsId = thisPanel.attr('id');
            var data = {
                user_id: userId,
                hts_id: htsId
            }
            $.post('/ctc/create/read', data).done(function(){
                console.log('Record read_attr');
            });
        }
    });

    $(function() {
        myApp.popup('.popup-notification');
        $(".footerNotification").slideDown();
    });

    var urlArray = location.href.split('/');
    $.getJSON('/ctc/matching/json/'+urlArray[urlArray.length-1], function(json) {
        var jsonLength = json.length;
        for (var i = 0; i < jsonLength; i++) {
            var specialsLength = json[i].specials.length;
            for (var j = 0; j < specialsLength; j++) {
                var howLength = json[i].specials[j].how_to_start.length;
                for (var k = 0; k < howLength; k++) {
                    var howToStart = json[i].specials[j].how_to_start[k];
                    var content = '最初:'+
                        howToStart.first_content+
                        '<br>'+
                        '次:'+
                        howToStart.next_content;
                    var panelHtml = '<div class="answerPanels" id="'+howToStart.id+'">'+content+'</div>';
                    $('.page-content').append(panelHtml);
                }
            }
        };

        $$(".answerPanels").on('click', function() {
            if(!$(this).hasClass("no-blur")){
                myApp.popup('.popup-about');
                thisPanel = $(this);
            }
        });

        var flatcolors = [
            '#1abc9c','#3498db','#9b59b6','#34495e',
            '#16a085','#27ae60','#2980b9','#2c3e50',
            '#f1c40f','#e67e22','#e74c3c','#95a5a6',
            '#f39c12','#d35400','#c0392b','#7f8c8d'
        ];

        // 分割配列
        var $answerPanels = $(".answerPanels");
        var panelsLength = $answerPanels.length;
        var leastPanelsCount = panelsLength;
        var windowWidthOnPort = Math.min($(window).width(), $(window).height());

        for (var i = 0; i < panelsLength; ) {
            // 基準パネルの設定
            var $answerPanelsSubset = $();

            var componentCount = Math.floor(Math.random() * Math.min(4, leastPanelsCount)) + 1;
            var widthScaleArray = new Array(0);
            var controlArray = new Array(0);
            var hightScaleArray = new Array(0);

            switch(componentCount) {
                case 1:
                    widthScaleArray.push(1);
                    controlArray.push(1);
                    hightScaleArray.push(0.3);
                    break;
                case 2:
                    widthScaleArray.push(0.5, 0.5);
                    controlArray.push(1, 1);
                    hightScaleArray.push(0.75, 0.75);
                    break;
                case 3:
                    widthScaleArray.push(1/3, 1/3, 1/3);
                    controlArray.push(1,1,1);
                    hightScaleArray.push(0.6,0.6,0.6);
                    break;
                case 4:
                    widthScaleArray.push(0.5,0.5,0.5,0.5);
                    controlArray.push(1,3);
                    hightScaleArray.push(0.75,0.25,0.25,0.25);
                    break;
            };

            // console.log('leastPanelsCount:'+leastPanelsCount+' componentCount:'+componentCount)
            leastPanelsCount -= componentCount;

            while(controlArray.length != 0) {
                var $nextColumn = $();
                for(var j = controlArray.pop() -1 ; j >= 0 && widthScaleArray.length > 0 && hightScaleArray.length > 0;j--) {
                    var pWidth = windowWidthOnPort * widthScaleArray.pop();
                    var pHeight = windowWidthOnPort * hightScaleArray.pop();
                    // console.log('width = '+pWidth+'/height = '+pHeight);
                    $answerPanel = $($answerPanels[i++]);
                    $nextColumn = $nextColumn.add($answerPanel);
                    $answerPanel.css('background-color', flatcolors[Math.floor(Math.random() * flatcolors.length)]);
                    $answerPanel.width(pWidth);
                    $answerPanel.height(pHeight);
                }
                $nextColumn.wrapAll('<div></div>');
                $answerPanelsSubset = $answerPanelsSubset.add($nextColumn.parent());
            }

            $answerPanelsSubset.wrapAll('<div class="row"></div>');
        };
    });
});

mainContentsCallbacks.trigger();