var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

function DataHolder() {
    this.checkedPanel = null;
    this.userId;
    this.howToStartId;
    this.selectCategoryId;
}

DataHolder.prototype = {
    setPanel : function(p) {
        this.checkedPanel = p;
    },
    getPanel : function() {
        return this.checkedPanel;
    },
    setUserId : function(u) {
        this.userId = u;
    },
    getUserId : function() {
        return this.userId;
    },
    setHowToStartId : function(h) {
        this.howToStart = h;
    },
    getHowToStartId : function() {
        return this.howToStartId;
    },
    setSelectedCategoryId : function(s) {
        this.selectCategoryId = s;
    },
    getSelectedCategoryId : function() {
        return this.selectCategoryId;
    },
    setBlur : function() {
        this.checkedPanel.addClass("no-blur");
    }
};

function SubmitForm() {
    this.titleBox;
    this.contentBox;
    this.categoryBox;
}

SubmitForm.prototype = {
    setTitleBox: function(t) {
        this.titleBox = t;
    },
    getTitleBox: function() {
        return this.titleBox;
    },
    setContentBox: function(c) {
        this.contentBox = c;
    },
    getContentBox: function() {
        return this.contentBox;
    },
    setCategoryBox: function(c) {
        this.categoryBox = c;
    },
    getCategoryBox: function() {
        return this.categoryBox;
    }
}

var dataHolder = new DataHolder();
var submitForm = new SubmitForm();

var mainContentsCallbacks = myApp.onPageInit('main', function(page) {
    var urlArray = location.href.split('/');
    var userId = urlArray[urlArray.length-1];
    dataHolder.setUserId(userId);
    submitForm.setTitleBox($('#hts-title'));
    submitForm.setContentBox($('#hts-content'));
    submitForm.setCategoryBox($('#hts-category'));

    $$('.navbar').css('display', 'block');

    $$('.closeFooterNotification').on('click', function() {
        myApp.closeModal('.popup-notification');
    });

    $$('#answerSubmit').on('click', function() {
        var htsContentVal = submitForm.getContentBox().val();
        var htsTitleVal = submitForm.getTitleBox().val();
        var htsCategoryVal = 3;

        if(htsTitleVal == "" || htsContentVal == "" ){
            myApp.alert('内容が入力されていません。', 'お知らせ');
        } else {
            myApp.closeModal('.popup-submit');

            dataHolder.setBlur();
            submitForm.getContentBox().val('');
            submitForm.getTitleBox().val('');
            submitForm.getCategoryBox().val('');

            var data = {
                user_id: dataHolder.getUserId(),
                hts_id: dataHolder.getHowToStartId(),
                title: htsTitleVal,
                content: htsContentVal,
                category_id: htsCategoryVal
            }

            $.post('/ctc/create/hts', data).done(function(){
                console.log('Record');
            });
        }
    });

    $(function() {
        myApp.popup('.popup-notification');
        $(".footerNotification").slideDown();
    });

    $.getJSON('/ctc/matching/json/'+dataHolder.getUserId(), function(json) {
        var jsonLength = json.length;
        for (var i = 0; i < jsonLength; i++) {
            var specialsLength = json[i].specials.length;
            for (var j = 0; j < specialsLength; j++) {
                var howLength = json[i].specials[j].how_to_start.length;
                for (var k = 0; k < howLength; k++) {
                    var howToStart = json[i].specials[j].how_to_start[k];

                    var panelHtml = '<div class="answerPanels">'+
                        '<input type="hidden" class="how-to-id" value="'+howToStart.id+'">'+
                        'Title:'+howToStart.first_content+'<br>'+
                          '<div class="bluree">'+
                            'Content:'+howToStart.next_content+
                          '</div>'+
                        '</div>';
                    var $element = $(panelHtml);
                    if (howToStart.is_read) {
                        $element.find('.bluree').addClass('no-blur');
                    }
                    $('.page-content').append($element);
                }
            }
        };

        $$(".answerPanels").on('click', function() {
            if(!$(this).find('div.bluree').hasClass("no-blur")){
                myApp.popup('.popup-submit');
                dataHolder.setPanel($(this).find('div.bluree'));
                dataHolder.setHowToStartId($(this).find('input[hidden]').val());
            }
        });

        var flatcolors = [
            '#1abc9c','#3498db','#9b59b6','#34495e',
            '#16a085','#27ae60','#2980b9','#2c3e50',
            '#f1c40f','#e67e22','#e74c3c','#95a5a6',
            '#f39c12','#d35400','#c0392b','#7f8c8d'
        ];

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