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
    				var panelHtml = '<div class="answerPanels">'+content+'</div>';
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
        var wDividers = [1, 2, 3, 4];
        var hDividers = [1, 2, 3];
        var basePanelLength = Math.min($(window).width(), $(window).height()) / wDividers.length;
        var $answerPanels = $(".answerPanels");
        var panelsLength = $answerPanels.length;

        for (var i = 0; i < panelsLength; i++) {
        	// 基準パネルの設定
	        var $answerPanel = $($answerPanels[i++]);
	        var $answerPanelsSubset = $answerPanel;

        	var wScale = (i == panelsLength)?wDividers[wDividers.length-2]:wDividers[Math.floor(Math.random() * (wDividers.length -1))];
        	var hScale = hDividers[Math.floor(Math.random() * hDividers.length)];

        	if (wScale * hScale > 8) {
        		wScale--;
        		hScale--;
        	}

        	var pWidth = basePanelLength * wScale; //最後の要素ならfillさせる
	        var pHeight = basePanelLength * hScale;
	        var maxWidthScale = wDividers.length - wScale;
	        var baseMaxHeightScale = hScale;

    		$answerPanel.css('background-color', flatcolors[Math.floor(Math.random() * flatcolors.length)]);
			$answerPanel.width(pWidth);
			$answerPanel.height(pHeight);
			// 基準パネルの設定終わり．

			while(maxWidthScale > 0) {
				// 次のcolumnを作成する
				var $nextColumn = $();
				var maxHeightScale = baseMaxHeightScale;
		        // column幅設定
			    wScale = (i == panelsLength)?wDividers[maxWidthScale - 1]:wDividers[Math.floor(Math.random() * maxWidthScale)];
			    pWidth = basePanelLength * wScale;
		        maxWidthScale -= wScale;

		        while(maxHeightScale > 0) {
		        	hScale = hDividers[Math.floor(Math.random() * maxHeightScale)];
			        pHeight = basePanelLength * hScale;
			        maxHeightScale -= hScale;
			        $answerPanel = $($answerPanels[i++]);
		    	    $answerPanel.css('background-color', flatcolors[Math.floor(Math.random() * flatcolors.length)]);
					$answerPanel.width(pWidth);
					$answerPanel.height(pHeight);
					$nextColumn = $nextColumn.add($answerPanel);
				}
				// column作成
				$nextColumn.wrapAll('<div></div>');
				$answerPanelsSubset = $answerPanelsSubset.add($nextColumn.parent());
			}

			// row作成
			$answerPanelsSubset.wrapAll('<div class="row"></div>');
        };
    });
});

mainContentsCallbacks.trigger();