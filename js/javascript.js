//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})

//mainWrap遊戲列滑動
$(function(){
    $(".typeList .typeBox").each(function(){
        if($(this).find("li").length > 4)
        {
            $(this).find(".next")
            .addClass("active");
        }

        if($(this).hasClass("hotGame"))
        {
            if($(this).find("li").length > 5)
            {
                $(this).find(".next")
                .addClass("active");
            }
            else
            {
                $(this).find(".next")
                .removeClass("active");
            }
        }
    })

    var hotN = 0;
    var slotN = 0;
    var liveN = 0;
    var sportN = 0;
    var fishN = 0;
    var boardN = 0;

    $(".typeBox .pageBtn").on("click",function(){
        var total = $(this).closest(".typeBox").find("li").length;
        var n = Math.round((total - 4) / 2 + 1);
        
        if($(this).closest(".typeBox").hasClass("hotGame"))
        {
            if($(this).hasClass("next"))
            {
                hotN ++;

                $(".typeBox.hotGame ol")
                .css("transform","translateX("+ (-563 * hotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(hotN == n)
                {
                    hotN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                hotN --;

                $(".typeBox.hotGame ol")
                .css("transform","translateX("+ (-563 * hotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(hotN == 0)
                {
                    hotN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("slotGame"))
        {
            if($(this).hasClass("next"))
            {
                slotN ++;

                $(".typeBox.slotGame ol")
                .css("transform","translateX("+ (-704 * slotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(slotN == n)
                {
                    slotN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                slotN --;

                $(".typeBox.slotGame ol")
                .css("transform","translateX("+ (-704 * slotN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(slotN == 0)
                {
                    slotN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("liveGame"))
        {
            if($(this).hasClass("next"))
            {
                liveN ++;

                $(".typeBox.liveGame ol")
                .css("transform","translateX("+ (-704 * liveN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(liveN == n)
                {
                    liveN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                liveN --;

                $(".typeBox.liveGame ol")
                .css("transform","translateX("+ (-704 * liveN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(liveN == 0)
                {
                    liveN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("fishGame"))
        {
            if($(this).hasClass("next"))
            {
                fishN ++;

                $(".typeBox.fishGame ol")
                .css("transform","translateX("+ (-704 * fishN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(fishN == n)
                {
                    fishN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                fishN --;

                $(".typeBox.fishGame ol")
                .css("transform","translateX("+ (-704 * fishN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(fishN == 0)
                {
                    fishN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("sportGame"))
        {
            if($(this).hasClass("next"))
            {
                sportN ++;

                $(".typeBox.sportGame ol")
                .css("transform","translateX("+ (-704 * sportN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(sportN == n)
                {
                    sportN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                sportN --;

                $(".typeBox.sportGame ol")
                .css("transform","translateX("+ (-704 * sportN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(sportN == 0)
                {
                    sportN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }

        if($(this).closest(".typeBox").hasClass("boardGame"))
        {
            if($(this).hasClass("next"))
            {
                boardN ++;

                $(".typeBox.boardGame ol")
                .css("transform","translateX("+ (-704 * boardN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(boardN == n)
                {
                    boardN == n;

                    $(this)
                    .removeClass("active");
                }
            }
            if($(this).hasClass("prev"))
            {
                boardN --;

                $(".typeBox.boardGame ol")
                .css("transform","translateX("+ (-704 * boardN) +"px)");

                $(this)
                .siblings(".pageBtn").addClass("active");

                if(boardN == 0)
                {
                    boardN == 0;
                    
                    $(this)
                    .removeClass("active");
                }
            }
        }
    })
})

//jumpWindow news 點擊展開
$(function(){
    $(".jumpWindow.news .smallTitle").on("click",function(){
        $(this).closest(".infoBox")
        .toggleClass("active");
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//gameWrap廠商遊戲切換
$(function(){
    $(".gameWrap .platformBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".gameWrap .platformBox .all").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .addClass("display");
    })

    $(".gameWrap .platformBox .boo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .boo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .gh").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .gh")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ifun").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ifun")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ag").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ag")
        .addClass("display");
    })

    $(".gameWrap .platformBox .net").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .net")
        .addClass("display");
    })

    $(".gameWrap .platformBox .mg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .mg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .evo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .evo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .evo").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .evo")
        .addClass("display");
    })

    $(".gameWrap .platformBox .relax").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .relax")
        .addClass("display");
    })

    $(".gameWrap .platformBox .tpg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .tpg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pgs").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pgs")
        .addClass("display");
    })

    $(".gameWrap .platformBox .png").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .png")
        .addClass("display");
    })

    $(".gameWrap .platformBox .redTiger").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .redTiger")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ygg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ygg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .bp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .bp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .pls").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .pls")
        .addClass("display");
    })

    $(".gameWrap .platformBox .redrake").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .redrake")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ftp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ftp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .elk").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .elk")
        .addClass("display");
    })

    $(".gameWrap .platformBox .qs").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .qs")
        .addClass("display");
    })

    $(".gameWrap .platformBox .rsg").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .rsg")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ely").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ely")
        .addClass("display");
    })

    $(".gameWrap .platformBox .sp").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .sp")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ava").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ava")
        .addClass("display");
    })

    $(".gameWrap .platformBox .noLimit").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .noLimit")
        .addClass("display");
    })

    $(".gameWrap .platformBox .ha").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .ha")
        .addClass("display");
    })

    $(".gameWrap .platformBox .jili").on("click",function(){
        $(".gameWrap .gameBox li,.gameWrap .gameBox li span")
        .removeClass("display");
        $(".gameWrap .gameBox .jili")
        .addClass("display");
    })
})

//gameWrap愛心
$(function(){
    $(".gameWrap .love").on("click",function(){
        $(this)
        .toggleClass("active");
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
    $(".jumpWindow.betWindow .enterGame button").click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".unLogin").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");
        $(".filter,.plsGo")
        .addClass("display");
    })

    $(".openNews").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");
        $(".filter,.news")
        .addClass("display");
    })

    $(".forget").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetPassword')
        .addClass('display');
    })

    $(".callSlot").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.slotGame')
        .addClass('display');
    })

    $(".callLive").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.liveGame')
        .addClass('display');
    })

    $(".callBoard").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.boardGame')
        .addClass('display');
    })

    $(".callFish").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.fishGame')
        .addClass('display');
    })

    $(".callSport").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.sportGame')
        .addClass('display');
    })

    $('.changePassword button').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.changePhone').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.phoneWindow').addClass('display');
    })

    $(".waterBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.listWindow').addClass('display');
    })

    $('.eventBox .check,.eventBoxAl .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkEvent').addClass('display');
    })
    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $('.sportPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.sportGame').addClass('display');
    })
    $('.livePage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.liveGame').addClass('display');
    })
    $('.lotteryPage .btnBox li').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.lotteryGame').addClass('display');
    })

    $(".pointWrap .open").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.pointWindow').addClass('display');
    })

    $(".registerWrap .send").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".registerWrap .checkBox span").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })
})

//eventList+eventDetail 切換
$(function(){
    $('.eventBox .btnBox button.forEvent_1').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_1').addClass('display');
    })
    $('.eventBox .btnBox button.forEvent_2').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_2').addClass('display');
    })
    $('.eventBox .btnBox button.forEvent_3').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail.event_3').addClass('display');
    })

    $('.eventDetail .back').click(function(){
        $('.eventList').addClass('display');
        $('.eventDetail').removeClass('display');
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more').click(function(){
        $('.outMode').removeClass('display');
        $('.innerMode').addClass('display');
    })

    $('.detailTitle .back').click(function(){
        $('.outMode').addClass('display');
        $('.innerMode').removeClass('display');
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.dataWrap').addClass('display');
        $('.dataWrap').siblings().removeClass('display');
    })

    $('.memberWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.platformWrap').addClass('display');
        $('.platformWrap').siblings().removeClass('display');
    })
})

//dealWrap
$(function(){
    $(".dealWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".dealWrap .tabs li:eq(0)").click(function(){
        $(".dealBox").addClass("display");
        $(".dealBox").siblings().removeClass("display");
    })
    $(".dealWrap .tabs li:eq(1)").click(function(){
        $(".waterBox").addClass("display");
        $(".waterBox").siblings().removeClass("display");
    })

    $(".dealWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".dealWrap .inputBox select").change(function(){
        var n = $(".dealWrap .inputBox select").val();

        if(n == 1) {
            $(".dealWrap .fakeTable.deposit")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 2) {
            $(".dealWrap .fakeTable.withdrawal")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 3) {
            $(".dealWrap .fakeTable.transfer")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 4) {
            $(".dealWrap .fakeTable.water")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 5) {
            $(".dealWrap .fakeTable.active")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 6) {
            $(".dealWrap .fakeTable.event")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 7) {
            $(".dealWrap .fakeTable.else")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top a:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').addClass('display');
        $('.mailWrap .bottom.ann').removeClass('display');
    })
    $('.mailWrap .top a:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').removeClass('display');
        $('.mailWrap .bottom.ann').addClass('display');
    })

    $('.mailWrap .tabs li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.mailWrap .btnBox .edit').click(function(){
        $('.mailWrap .btnBox.nor').removeClass('display');
        $('.mailWrap .btnBox.edit').addClass('display');

        $(".mailWrap .list li").addClass("editing");
    })
    $('.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox.nor').addClass('display');
        $('.mailWrap .btnBox.edit').removeClass('display');

        $(".mailWrap .list li").removeClass("editing");
    })

    $('.mailWrap.outMode .list li').click(function(){
        $('.mailWrap.outMode').removeClass('display');
        $('.mailWrap.innerMode').addClass('display');
    })
    $('.mailWrap.innerMode .title button').click(function(){
        $('.mailWrap.outMode').addClass('display');
        $('.mailWrap.innerMode').removeClass('display');
    })

    $(".mailWrap .active .tabs li:eq(0)").click(function(){
        $(".mailWrap .active .system").addClass("display");
        $(".mailWrap .active .system").siblings("ul").removeClass("display");
    })
    $(".mailWrap .active .tabs li:eq(1)").click(function(){
        $(".mailWrap .active .personal").addClass("display");
        $(".mailWrap .active .personal").siblings("ul").removeClass("display");
    })

    $(".mailWrap .ann .tabs li:eq(0)").click(function(){
        $(".mailWrap .ann .hot").addClass("display");
        $(".mailWrap .ann .hot").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(1)").click(function(){
        $(".mailWrap .ann .nor").addClass("display");
        $(".mailWrap .ann .nor").siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li:eq(2)").click(function(){
        $(".mailWrap .ann .dep").addClass("display");
        $(".mailWrap .ann .dep").siblings("ul").removeClass("display");
    })
})

//eventWrap 切換
$(function(){
    $(".eventWrap .tabs li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $('.eventWrap .tabs li:nth-of-type(1)').click(function(){
        $('.eventMiddle .eventBox').addClass('display');
        $('.eventMiddle .eventBox').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(2)').click(function(){
        $('.eventMiddle .eventBoxAl').addClass('display');
        $('.eventMiddle .eventBoxAl').siblings().removeClass('display');
    })
    $('.eventWrap .tabs li:nth-of-type(3)').click(function(){
        $('.eventMiddle .eventRecord').addClass('display');
        $('.eventMiddle .eventRecord').siblings().removeClass('display');
    })
})

//betWrap 搜尋開關
$(function(){
    $('.betWrap .fakeTable .arrow_ic').click(function(){
        $($(this).closest('li')).toggleClass('active');
    })

    $(".betWrap .timeGroup .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//deposit切換
$(function(){
    $(".depositWrap .list li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".depositWrap .bottom .title,.depositWrap .bottom .fakeTable").removeClass("display");
    })

    $(".depositWrap .list li:eq(0)").click(function(){
        $(".depositWrap .bottom .card").addClass("display");
    })
    $(".depositWrap .list li:eq(1)").click(function(){
        $(".depositWrap .bottom .tiger").addClass("display");
    })
    $(".depositWrap .list li:eq(2)").click(function(){
        $(".depositWrap .bottom .wallet").addClass("display");
    })
    $(".depositWrap .list li:eq(3)").click(function(){
        $(".depositWrap .bottom .usdt").addClass("display");
    })
    $(".depositWrap .list li:eq(4)").click(function(){
        $(".depositWrap .bottom .venus").addClass("display");
    })

    $(".depositWrap .bottom .check").click(function(){
        $(".depositWrap .bottom .title,.depositWrap .bottom .fakeTable").removeClass("display");
        $(".depositWrap .bottom .cardCheck,.depositWrap .bottom .title.card").addClass("display");
    })
})

//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
    $('.transferWrap .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
        $(this).closest(".open")
        .toggleClass("active");
    })
})

//helpPage .nav列切換
$(function(){
    $('.nav .title').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.nav .box').removeClass('display');
        $($(this).next('.box')).addClass('display');
    })

    $('.nav .box li').click(function(){
        $('.nav .box li').removeClass('active');
        $(this).addClass('active');
    })
})
//helpPage .nav 連動切換
$(function(){
    $(".forNew").click(function(){
        var n = $(this).index();

        $(".helpWrap .new:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".forQues").click(function(){
        var n = $(this).index();

        $(".helpWrap .ques:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".forUs").click(function(){
        var n = $(this).index();

        $(".helpWrap .us:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//transfer切換
$(function(){
    $(".withdrawalWrap .bottom form select").change(function(){
        var n = $(".withdrawalWrap .bottom form select").val();

        if(n == 1) {
            $(".withdrawalWrap .bottom form.bankcard")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//point
$(function(){
    $(".pointWrap .tabs li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
    $(".pointWrap .tabs li:eq(0)").click(function(){
        $(".pointWrap .fakeTable")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".pointWrap .tabs li:eq(1)").click(function(){
        $(".pointWrap .recordTable")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".pointWrap .search .btnBox button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".pointWrap .fakeTable .arrow_ic").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })
})

//register
$(function(){
    var phone = $(".registerWrap .phone")
    var btn = $(".registerWrap .codeBtn");

    $(phone).focus(function(){
        $(btn)
        .attr("disabled",false);
    })
    $(phone).blur(function(){
        $(btn)
        .attr("disabled",true);
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".goTop")
            .addClass("display")
        } else{
            $(".goTop")
            .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    })
})