$(function(){
	$(".myshopcar").hover(function(){
		$(".myshopcarList").show();
	},function(){
		$(".myshopcarList").hide();
	});
	$(".customerService").hover(function(){        //顶部下拉菜单
		$(".customerServiceList").show();
	},function(){
		$(".customerServiceList").hide();
	});
	$(".myStore").hover(function(){
		$(".myStoreList").show();
	},function(){
		$(".myStoreList").hide();
	});


	$(".selected").hover(function(){
		$(".selected>ul").show();                  //搜索框下拉
	},function(){
		$(".selected>ul").hide();
	})


    $(".navlist ul>li").hover(function(){
    	$(this).children("div").show();
    },function(){
    	$(this).children("div").hide();
    })


    $("#bannerContainer").hover(function(){          //轮播图两边的按钮
    	$(".arrow").show();
    },function(){
    	$(".arrow").hide();
    })

    var container = $('#bannerContainer');
    var list = $('#bannerpics');
    var buttons = $('#bannerButtons a img');
    var prev = $('.prev');
    var next = $('.next');
    var index = 1;
    var len = 6;
    var interval = 4000;
    var timer;

    function animate (offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset>0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'left': offset}, 300, function () {                //轮播动画
            if(left > -715){
                list.css('left', -715 * len);
            }
            if(left < (-715 * len)) {
                list.css('left', -715);
            }
        });
    }

    function showButton() {
    	buttons.removeClass('on');
    	buttons.attr("src","images/buttonbg.png");
    	buttons.eq(index-1).attr("src","images/buttonrotate.png")          //按钮变化
        buttons.eq(index-1).addClass('on');
    }

    function play() {
        timer = setTimeout(function () {
            next.trigger('click');                             //计时器
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }

    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 6) {                    //前一张
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-715);
        showButton();
    });

    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 6;                     //后一张
        }
        else {
            index -= 1;
        }
        animate(715);
        showButton();
    });
    $("#bannerButtons a").each(function () {
         $(this).bind('click', function () {
             if (list.is(':animated') || $(this).attr('class')=='on') {
                 return;
             }
             var myIndex = parseInt($(this).index()+1);
             var offset = -715 * (myIndex - index);                //按钮点击

             animate(offset);
             index = myIndex;
             showButton();
         })
    });


    container.hover(stop, play);

    play();           // 轮播图



    function countDown(){
    	function timenow(){
    		var date=new Date();
    	    hour=date.getHours();
    	    minute=date.getMinutes();
    	    second=date.getSeconds();
    	    if (24-parseInt(hour)<10) {
    	    	h=24-parseInt(hour);
    	    	h="0"+h;
    	    }else{
    	    	h=24-parseInt(hour);
    	    };
    	    if (60-parseInt(minute)<10) {
    	    	m=60-parseInt(minute);
    	    	m="0"+m;
    	    }else{
    	    	m=60-parseInt(minute);
    	    };
    	    if (60-parseInt(second)<10) {
    	    	s=60-parseInt(second); 
    	    	s="0"+s;
    	    }else{
    	    	s=60-parseInt(second);
    	    };
    	    $("#time_hour").html(h);
    	    $("#time_minute").html(m);
    	    $("#time_second").html(s);
    	    }
    	time_1=setInterval(timenow, 1000);
    }
    countDown();      //倒计时




    $(".fixsearchbox span").hover(function(){
    	$(".fixsearchbox span ul").show();
    },function(){
    	$(".fixsearchbox span ul").hide();
    })

    function fixedheader(){
    	var t=parseInt($("body,html").scrollTop());
    	if(t>700){
    		$("#fixheader").slideDown();                       //固定定位的搜索框
    	}
    	else{
    		$("#fixheader").slideUp();
    	}
    }
    time_02=setInterval(fixedheader, 100);

})

