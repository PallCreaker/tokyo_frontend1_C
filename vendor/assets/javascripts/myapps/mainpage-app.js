var myApp = new Framework7();
var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

function DataHolder() {
    this.checkedPanel = null;
    this.userId;
    this.howToStartId;
    this.categories = null; // JSON
    this.pullContainer;
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
        this.howToStartId = h;
    },
    getHowToStartId : function() {
        return this.howToStartId;
    },
    unsetBlur : function() {
        this.checkedPanel.addClass("no-blur");
    },
    setCategories : function(c) {
        this.categories = c;
    },
    getCategories : function() {
        return this.categories;
    },
    setPullContainer : function(p) {
        this.pullContainer = p;
    },
    getPullContainer : function() {
        return this.pullContainer;
    }
};

function SubmitForm() {
    this.titleBox;
    this.contentBox;
    this.categoryBox;
    this.categoryIdBox;
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
    },
    setCategoryIdBox: function(c) {
        this.categoryIdBox = c;
    },
    getCategoryIdBox: function() {
        return this.categoryIdBox;
    },
    reinitilize: function() {
        this.contentBox.val('');
        this.titleBox.val('');
        this.categoryBox.val('');
    }
}

function fetchMatching(callback) {
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
                        '<h3>'+howToStart.title+'を学ぶには</h3>'+
                          '<div class="bluree">'+
                          howToStart.content+
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
                var id = $(this).find('input:hidden').val();
                dataHolder.setHowToStartId(id);
            } else {
                var title = $(this).find('h3').text();
                var content = $(this).find('div.bluree').text();
                myApp.popup('.popup-content');
                $('#content-title').text(title);
                $('#content-block').text(content);
            }
        });

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
            var componentCountClass;

            switch(componentCount) {
                case 1:
                    widthScaleArray.push(1);
                    controlArray.push(1);
                    hightScaleArray.push(0.3);
                    componentCountClass = '';
                    break;
                case 2:
                    widthScaleArray.push(0.5, 0.5);
                    controlArray.push(1, 1);
                    hightScaleArray.push(0.75, 0.75);
                    componentCountClass = '';
                    break;
                case 3:
                    widthScaleArray.push(1/3, 1/3, 1/3);
                    controlArray.push(1,1,1);
                    hightScaleArray.push(0.6,0.6,0.6);
                    componentCountClass = '';
                    break;
                case 4:
                    widthScaleArray.push(0.5,0.5,0.5,0.5);
                    controlArray.push(1,3);
                    hightScaleArray.push(0.75,0.25,0.25,0.25);
                    componentCountClass = 'col-4';
                    break;
            };

            leastPanelsCount -= componentCount;
            while(controlArray.length != 0) {
                var $nextColumn = $();
                for(var j = controlArray.pop() -1 ; j >= 0 && widthScaleArray.length > 0 && hightScaleArray.length > 0;j--) {
                    var pWidth = windowWidthOnPort * widthScaleArray.pop();
                    var pHeight = windowWidthOnPort * hightScaleArray.pop();
                    $answerPanel = $($answerPanels[i++]);
                    $nextColumn = $nextColumn.add($answerPanel);
                    $answerPanel.width(pWidth - 20);
                    $answerPanel.height(pHeight);
                }
                $nextColumn.wrapAll('<div></div>');
                $answerPanelsSubset = $answerPanelsSubset.add($nextColumn.parent());
            }

            $answerPanelsSubset.wrapAll('<div class="row ' + componentCountClass + '"></div>');
            var $panels = $answerPanelsSubset.find('.answerPanels');
            console.log($panels);
            var $panel = $($panels[Math.floor(Math.random() * $panels.length)]);
            $panel.addClass('colorPanel');
        };

        if (!(callback === undefined)) {
            callback();
        }
    });
};

var dataHolder = new DataHolder();
var submitForm = new SubmitForm();

var mainContentsCallbacks = myApp.onPageInit('main', function(page) {
    var urlArray = location.href.split('/');
    var userId = urlArray[urlArray.length-1];
    dataHolder.setUserId(userId);
    submitForm.setTitleBox($('#hts-title'));
    submitForm.setContentBox($('#hts-content'));
    submitForm.setCategoryBox($('#hts-category'));
    submitForm.setCategoryIdBox($('#hts-category-id'));

    $$('.navbar').css('display', 'block');

    $$('.closeFooterNotification').on('click', function() {
        myApp.closeModal('.popup-notification');
    });

    $$('#answerCancel').on('click', function() {
        myApp.closeModal('.popup-submit');
        submitForm.getContentBox().val('');
        submitForm.getTitleBox().val('');
        submitForm.getCategoryBox().val('');
    });
    $$('#contentClose').on('click',function(){
        myApp.closeModal('.popup-content');
    });
    $$('#answerSubmit').on('click', function() {
        var htsContentVal = submitForm.getContentBox().val();
        var htsTitleVal = submitForm.getTitleBox().val();
        var htsCategoryVal = $('.special-category').val();

        if(htsTitleVal == "" || htsContentVal == "" || htsCategoryVal == 0){
            myApp.alert('内容が入力されていません。', 'お知らせ');
        } else {
            myApp.closeModal('.popup-submit');

            dataHolder.unsetBlur();
            submitForm.reinitilize();

            var data = {
                user_id: dataHolder.getUserId(),
                hts_id: dataHolder.getHowToStartId(),
                title: htsTitleVal,
                content: htsContentVal,
                category_id: htsCategoryVal
            }

            // console.log(data);

            $.post('/ctc/create/hts', data).done(function(){
                console.log('Record');
            });
        }
    });

    $(function() {
        myApp.popup('.popup-notification');
        $(".footerNotification").slideDown();
    });

    if (dataHolder.getCategories() == null){
        $.getJSON('/ctc/get_leaves', function(json) {
            dataHolder.setCategories(json);

            var $parent = $('<select class="special-category"></select>');
            for (var i = json.length - 1; i >= 0; i--) {
                $parent.append($('<option value="'+json[i].id+'">'+json[i].name+'</option>'));
            };
            submitForm.getCategoryBox().parent().append($parent);
            submitForm.getCategoryBox().hide();
        });
    }

    fetchMatching();
});

mainContentsCallbacks.trigger();