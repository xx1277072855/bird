/**
 * Created by 徐享 on 2018/9/13.
 */
//设置四个主体页面的高度，为窗口的可是高度
$('.content1').outerHeight($(window).height());
$('.content2').outerHeight($(window).height());
$('.content3').outerHeight($(window).height());
$('.content4').outerHeight($(window).height());
/*第一页start*/
((function () {
    //导航栏的border-bottom的移入和点击效果
    $('.nav ul:first-of-type li a').on({
        click: function () {
            $(this).css('borderBottomColor',"red").parent().siblings().children().css('borderBottomColor',"transparent");
            $(this).parent().siblings().removeClass('current');
            $(this).parent().addClass('current');
        },
        mouseenter: function () {
            $(this).css('borderBottomColor',"red").parent().siblings().not('.current').children().css('borderBottomColor',"transparent");
        },
        mouseleave: function () {
           $('.nav ul:first-of-type li:not(".current") a').css('borderBottomColor',"transparent");
        }
    });
    $('.xianshi_left').click(function () {
        if($('.xianshi_right').next().css('display')=='block'){
            $('.xianshi_right').children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -46px -170px');
            $('.xianshi_right').next().slideUp();
        };

        if($(this).next().css('display')=='none'){
            $(this).children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -77px -170px');
            $(this).next().slideDown();
        }else if($(this).next().css('display')=='block') {
            $(this).children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -46px -170px');
            $(this).next().slideUp();
        }
    });
    $('.xianshi_right').click(function () {
        if($('.xianshi_left').next().css('display')=='block'){
            $('.xianshi_left').children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -46px -170px');
            $('.xianshi_left').next().slideUp();
        };

        if($(this).next().css('display')=='none'){
            $(this).children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -77px -170px');
            $(this).next().slideDown();
        }else if($(this).next().css('display')=='block') {
            $(this).children().eq(1).css('background','url("../images/netease_logo.png") no-repeat -46px -170px');
            $(this).next().slideUp();
        }
    });
    //end
    //第一页动画效果的制作start
    $('.search').css({
        top:180
    });
    $('.remen').css({
        top:180
    });
    $('.t_logo').css({
        //top:140,
        opacity:0
    });
    $('.box .careers').css({
        //top:140,
        opacity:0
    });
    $('.mouse').css('opacity','0');//给所有的鼠标图，添加隐藏

    $('.big-box').ready(function () {
            //动画部分
            $('.search').animate({
                top:0
            },800);
            $('.remen').animate({
                top:0
            },800);
            changeBg();
            function changeBg() {
                $('.content1').css('backgroundSize','100% 100%');
            }
            $('.t_logo').animate({
                opacity:1
            },600, function () {
                $('.t_logo').addClass('animated rubberBand');//引用了animate的css动画文件 ，通过添加类来实现动画效果
            });
            $('.box1 .careers').animate({
                opacity:1
            },600, function () {
                $('.box1 .careers').addClass('animated rubberBand');//引用了animate的css动画文件 ，通过添加类来实现动画效果
                setTimeout(function () {
                    $('.box1 .mouse').css('opacity','1');
                },800);
            });
        });
    //第一页动画效果的制作end
    /*点击切换背景按钮，换背景，实现部分动画可以有一次执行的机会；start*/
    //
   /* $('.changeBg').on('click', function () {

    });*/
    /*点击切换背景按钮，换背景，实现部分动画可以有一次执行的机会；end*/
})());
/*第二个页面start*/
var a2=0;
(function () {

    $('.box-big').on('mouseenter', function () {
        $(this).animate({
            backgroundColor:'red',
            borderColor:'white'
        })
    });
    $('.box-big').eq(0).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#53ccff',
            borderColor:'#53ccff'
        })
    });
    $('.box-big').eq(1).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#01c1b2',
            borderColor:'#01c1b2'
        })
    });
    $('.box-big').eq(2).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#505976',
            borderColor:'#505976'
        })
    });
    $('.box-big').eq(3).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#00b7ee',
            borderColor:'#00b7ee'
        })
    });
    $('.box-big').eq(4).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#ff63bf',
            borderColor:'#ff63bf'
        })
    });$('.box-big').eq(5).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#42b8ea',
            borderColor:'#42b8ea'
        })
    });$('.box-big').eq(6).on('mouseleave', function () {
        $(this).animate({
            backgroundColor:'#80c269',
            borderColor:'#80c269'
        })
    });


    /*第二页的动画效果start*/

    $('.big-box').on('mousewheel', function () {
        if(i==1&&a2==0){
            qidong2();
            a2++;
        }
    });

    function qidong2(){
        $('.content2').css('backgroundSize','100% 100%');

        $('.box2 .careers').addClass('animated bounceIn');
        $('.box2 h3').addClass('animated bounceIn');
        $('.box2 ul li').eq(0).addClass('animated slideInLeft');
        $('.box2 ul li').eq(1).addClass('animated slideInLeft');
        $('.box2 ul li').eq(2).addClass('animated slideInLeft');

        $('.box2 ul li').eq(4).addClass('animated slideInRight');
        $('.box2 ul li').eq(5).addClass('animated slideInRight');
        $('.box2 ul li').eq(6).addClass('animated slideInRight');

        setTimeout(function () {
            $('.box2 .mouse').css('opacity','1');
        },1500);
    }


})();


/*第三页start*/
var a3=0;//全局变量，用来当前页面的动画是否是第一次执行
(function () {
    var shijian = new Date();
    console.log(shijian.getFullYear()+"-"+shijian.getMonth()+"-"+shijian.getDate());
    var  str = shijian.getFullYear()+"-"+shijian.getMonth()+"-"+shijian.getDate();
    $('.time').text(str);

    //标题图片动画class=animate swing；
//通过滚轮触发动画的
    $('.big-box').on('mousewheel', function () {
        if(i==2&&a3==0){//判断是不是第一次执行
            qidong3();
            a3++;
        }
    });
    function qidong3() {
        $('.box3 .careers').removeClass('animated swing');
        $('.box3 h3').removeClass('animated swing');
        $('.wfgd-left').removeClass('animated fadeInLeft');
        $('.wfgd-right').removeClass('animated fadeInRight');

        $('.box3 .careers').addClass('animated swing');
        $('.box3 h3').addClass('animated swing');
        $('.wfgd-left').addClass('animated fadeInLeft');
        $('.wfgd-right').addClass('animated fadeInRight');

            setTimeout(function () {
                $('.box3 .mouse').css('opacity','1');
            },1500);
    };
    (function () {
        var _leftUl = document.querySelector('.wfgd-left ul');
        _leftUl.innerHTML += _leftUl.innerHTML;
        var timer = setInterval(moveUp,30);
        var time;
        function moveUp(){
            _leftUl.scrollTop +=1;
            if(_leftUl.scrollTop%32==0){
                clearInterval(timer);
                clearTimeout(time);
                time = setTimeout(function () {
                    timer = setInterval(moveUp,30);
                },500)
            }
            if(_leftUl.scrollTop>=_leftUl.offsetHeight){
                _leftUl.scrollTop=0;
            }
        }
        _leftUl.onmouseover= function () {
            clearInterval(timer);
            clearTimeout(time);
        };
        _leftUl.onmouseout = function () {
            timer = setInterval(moveUp,30);
            clearTimeout(time);
        };
    })();
    (function () {
        var _rightUl = document.querySelector('.wfgd-right ul');
        _rightUl.innerHTML += _rightUl.innerHTML;
        var timer = setInterval(moveUp,30);
        var time;
        function moveUp(){
            _rightUl.scrollTop +=1;
            if(_rightUl.scrollTop%32==0){
                clearInterval(timer);
                clearTimeout(time);
                time = setTimeout(function () {
                    timer = setInterval(moveUp,30);
                },500)
            }
            if(_rightUl.scrollTop>=_rightUl.offsetHeight){
                _rightUl.scrollTop=0;
            }
        }
        _rightUl.onmouseover= function () {
            clearInterval(timer);
            clearTimeout(time);
        };
        _rightUl.onmouseout = function () {
            timer = setInterval(moveUp,30);
            clearTimeout(time);
        };
    })();

})();
/*第三页end*/
/*第四页start*/
var a4=0;
(function () {
    $('.big-box').on('mousewheel', function () {
        if (a4 == 0 && i == 3) {
            qidong4();
            a4++;
        }
    });
    function qidong4() {
        $('.box4 .careers').removeClass('animated bounceIn');
        $('.box4 h3').removeClass('animated bounceIn');

        $('.box4 .video').removeClass('animated slideInLeft');
        $('.box4 .word').removeClass('animated slideInRight');

        $('.box4 .careers').addClass('animated bounceIn');
        $('.box4 h3').addClass('animated bounceIn');

        $('.box4 .video').addClass('animated slideInLeft');
        $('.box4 .word').addClass('animated slideInRight');
    }

})();


/*第四页end*/
/*video标签start*/
(function () {
    var _video = document.querySelector('video');
    _video.controls = true;
    _video.poster = "../images/video_cover.jpg";
})();
/*video标签end*/
/*点击按钮切换背景start*/
(function () {
    var h = 0;//通过奇偶数
    $('.changeBg').click(function () {
        if(h%2==0){
            //夜晚
            $(this).css('backgroundPosition','0 -81px');
            $('.content1').css({
                backgroundImage:'url("../images/bg_01.jpg")',
                borderColor:'#fff'
            });
            $('.content2').css({
                backgroundImage:'url("../images/bg_02.jpg")',
                borderColor:'#fff'
            });
            $('.content3').css({
                backgroundImage:'url("../images/bg_03.jpg")',
                borderColor:'#fff'
            });
            $('.content4').css({
                backgroundImage:'url("../images/bg_04.jpg")',
                borderColor:'#fff'
            });
            $('.box1 .careers').css('background','url("../images/h3_search.png") no-repeat');
            $('.box2 .careers').css('background','url("../images/h3_job.png") no-repeat');
            $('.box3 .careers').css('background','url("../images/h3_hot.png") no-repeat');
            $('.box4 .careers').css('background','url("../images/h3_about.png") no-repeat');
            $('.remen').css('color','#fff');
            $('.remen a').css('color','#fff');
            $('h3').css('color','#fff');
            $('.box2 a').css('color','#fff');
            $('.wfgd').css('color','#fff');
            $('.wfgd a').css({
                color:'#fff',
                borderColor:'#fff'
            });
            $('h4').css('color','#fff');
            $('.word').css('color','#fff');
            $('.search').css('borderColor','#37898c');
        }else {
            //白天
            $(this).css('backgroundPosition','0 0');
            $('.content1').css({
                backgroundImage:'url("../images/v_bg_01.jpg")',
                borderColor:'#000'
            });
            $('.content2').css({
                backgroundImage:'url("../images/v_bg_02.jpg")',
                borderColor:'#000'
            });
            $('.content3').css({
                backgroundImage:'url("../images/v_bg_03.jpg")',
                borderColor:'#000'
            });
            $('.content4').css({
                backgroundImage:'url("../images/v_bg_04.jpg")',
                borderColor:'#000'
            });
            $('.box1 .careers').css('background','url("../images/v_h3_search.png") no-repeat');
            $('.box2 .careers').css('background','url("../images/v_h3_job.png") no-repeat');
            $('.box3 .careers').css('background','url("../images/v_h3_hot.png") no-repeat');
            $('.box4 .careers').css('background','url("../images/v_h3_about.png") no-repeat');
            $('.remen').css('color','#000');
            $('.remen a').css('color','#000');
            $('h3').css('color','#000');
            $('.box2 a').css('color','#000');
            $('.wfgd').css('color','#000');
            $('.wfgd a').css({
                color:'#000',
                borderColor:'#000'
            });
            $('h4').css('color','#000');
            $('.word').css('color','#000');
            $('.search').css('borderColor','#c4e3f3');
        }
        $('.mouse').css('opacity','0');//给所有的鼠标图，添加隐藏
        /*第一个页面的动画可以从新执行一次//start*/
        $('.t_logo').css({
            //top:140,
            opacity:0
        });
        $('.box1 .box1 .careers').css({
            //top:140,
            opacity:0
        });
        $('.t_logo').removeClass('animated rubberBand');
        $('.careers').removeClass('animated rubberBand');
        $('.box1 .mouse').css('opacity','0');

        changeBg();
        function changeBg() {
            $('.content1').css('backgroundSize','100% 100%');
        }

        $('.t_logo').animate({
            opacity:1
        },600, function () {
            $('.t_logo').addClass('animated rubberBand');//引用了animate的css动画文件 ，通过添加类来实现动画效果
        });
        $('.box1 .careers').animate({
            opacity:1
        },600, function () {
            $('.box1 .careers').addClass('animated rubberBand');//引用了animate的css动画文件 ，通过添加类来实现动画效果
            setTimeout(function () {
                $('.box1 .mouse').css('opacity','1');
            },800);
        });
        /*第一个页面的//end*/
        //
        /*第二个页面的动画实现重新执行一次的机会*/
        a2=0;
        $('.box2 .careers').removeClass('animated bounceIn');
        $('.box2 h3').removeClass('animated bounceIn');
        $('.box2 ul li').eq(0).removeClass('animated slideInLeft');
        $('.box2 ul li').eq(1).removeClass('animated slideInLeft');
        $('.box2 ul li').eq(2).removeClass('animated slideInLeft');

        $('.box2 ul li').eq(4).removeClass('animated slideInRight');
        $('.box2 ul li').eq(5).removeClass('animated slideInRight');
        $('.box2 ul li').eq(6).removeClass('animated slideInRight');

        $('.big-box').on('mousewheel', function () {
            if(i==1&&a2==0){
                qidong2();
            }
        });

        function qidong2(){

            $('.content2').css('backgroundSize','100% 100%');
            $('.box2 .careers').addClass('animated bounceIn');
            $('.box2 h3').addClass('animated bounceIn');

            $('.box2 ul li').eq(0).addClass('animated slideInLeft');
            $('.box2 ul li').eq(1).addClass('animated slideInLeft');
            $('.box2 ul li').eq(2).addClass('animated slideInLeft');

            $('.box2 ul li').eq(4).addClass('animated slideInRight');
            $('.box2 ul li').eq(5).addClass('animated slideInRight');
            $('.box2 ul li').eq(6).addClass('animated slideInRight');

            setTimeout(function () {
                $('.box2 .mouse').css('opacity','1');
            },1500);
        }



        /*第二个页面的//end*/
        /*第三个页面的动画实现重新执行一次的机会*/
        a3=0;
        $('.box3 .careers').removeClass('animated swing');
        $('.box3 h3').removeClass('animated swing');
        $('.wfgd-left').removeClass('animated fadeInLeft');
        $('.wfgd-right').removeClass('animated fadeInRight');
        //通过滚轮触发动画的

        $('.big-box').on('mousewheel', function () {
            if(i==2&&a3==0){//判断是不是第一次执行
                qidong3();
                a3++;
            }
        });
        function qidong3() {
            $('.box3 .careers').addClass('animated swing');
            $('.box3 h3').addClass('animated swing');
            $('.wfgd-left').addClass('animated fadeInLeft');
            $('.wfgd-right').addClass('animated fadeInRight');
            setTimeout(function () {
                $('.box3 .mouse').css('opacity','1');
            },1500);
        }

        /*第三个页面的//end*/
        //
        /*第四个页面的动画实现重新执行一次的机会*/
        a4=0;
        $('.box4 .careers').removeClass('animated bounceIn');
        $('.box4 h3').removeClass('animated bounceIn');

        $('.box4 .video').removeClass('animated slideInLeft');
        $('.box4 .word').removeClass('animated slideInRight');
        $('.big-box').on('mousewheel', function () {
            if (a4 == 0 && i == 3) {
                qidong4();
            }
        });
        function qidong4() {
            $('.box4 .careers').addClass('animated bounceIn');
            $('.box4 h3').addClass('animated bounceIn');

            $('.box4 .video').addClass('animated slideInLeft');
            $('.box4 .word').addClass('animated slideInRight');
        }
        /*第四个页面的//end*/
        h++;
    })
})();
/*点击按钮切换背景end*/
/*主体页面的切换start*/
/*
(function () {
    console.log($('body').innerHeight());
    var i=0;
    $('body').mousewheel(function (event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            console.log('向上滚动'+delta );
            if(i==0){
                i=0;
            }else if(i>=-2054&&i<-1878){
                i+=44;
            }else if(i>=-1878){
                i+=626;
            }
            $('.innerBox').stop().animate({
                top:i
            },700, function () {

            });
        } else {
            console.log('向下滚动'+delta);
          /!*  clearInterval(time);
            time = setInterval(function () {
                $('.big-box').scrollTop($('.big-box').scrollTop()+2);
                if($('.big-box').scrollTop()%626==0){
                    clearInterval(time);
                }
            },1);*!/
            if(i==-2054){
                i=-2054;
            }else if(i<=-1878){
                i-=44;
            }else{
                i-=626;
            }
            $('.innerBox').stop().animate({
                top:i
            },700, function () {
            });
        }
    })
})();*/
var i=0; //翻屏变量，初始第一屏
(function () {
    $('.big-box').height($(window).height());
    $('.big-box').width($(window).width());

    //var s = 0; //该变量作用是鼠标滑轮一直向下或者向上滑动时出现抖动现象
    $(function(){
        var starttime = 0,
            endtime = 0;
        $("body").mousewheel(function(event, delta) {

            starttime = new Date().getTime(); //记录翻屏的初始时间

            if (delta < 0&& i>=0 && i<=2 && (starttime == 0 || (endtime - starttime) <= -500)) {//在500ms内执行一次向下翻屏
                console.log(starttime+'start');
                    i++;
                    renderPage(i,true); //翻屏函数
                    endtime = new Date().getTime(); //记录翻屏的结束时间
                    console.log(starttime+'end');
            } else if (delta > 0 && i>=1 && (starttime == 0 || (endtime - starttime) <= -500)) {
                i--;
                renderPage(i,true);
                endtime = new Date().getTime();
            } 

        });
        function renderPage(pageNumber, isScroll){
            if (isScroll){
                $('.big-box').animate({scrollTop:pageNumber*$('.big-box').height()}, 'slow');
                $(".right_fixed ul li").removeClass("active");
                $(".right_fixed ul li").eq(pageNumber).addClass("active");
            }
        }

        $(".right_fixed ul li").on("click", function(){ //点击小导航也执行翻屏
            var index = $(this).index();
            i=index;
            renderPage(index, true);
            $(".right_fixed ul li").removeClass("active");
            $(this).addClass("active");

            if (i==1){
                $('.box2 .careers').removeClass('animated bounceIn');
                $('.box2 h3').removeClass('animated bounceIn');
                $('.box2 ul li').eq(0).removeClass('animated slideInLeft');
                $('.box2 ul li').eq(1).removeClass('animated slideInLeft');
                $('.box2 ul li').eq(2).removeClass('animated slideInLeft');

                $('.box2 ul li').eq(4).removeClass('animated slideInRight');
                $('.box2 ul li').eq(5).removeClass('animated slideInRight');
                $('.box2 ul li').eq(6).removeClass('animated slideInRight');

                if(i==1&&a2==0){
                    qidong2();
                    a2++;
                }
                function qidong2(){

                    $('.content2').css('backgroundSize','100% 100%');

                    $('.box2 .careers').addClass('animated bounceIn');
                    $('.box2 h3').addClass('animated bounceIn');
                    $('.box2 ul li').eq(0).addClass('animated slideInLeft');
                    $('.box2 ul li').eq(1).addClass('animated slideInLeft');
                    $('.box2 ul li').eq(2).addClass('animated slideInLeft');

                    $('.box2 ul li').eq(4).addClass('animated slideInRight');
                    $('.box2 ul li').eq(5).addClass('animated slideInRight');
                    $('.box2 ul li').eq(6).addClass('animated slideInRight');
                    setTimeout(function () {
                        $('.box2 .mouse').css('opacity','1');
                    },1500);
                }
            }else if(i==2){
                renderPage(i, true);
                if(i==2&&a3==0){//判断是不是第一次执行
                    qidong3();
                    a3++;
                }
                function qidong3() {
                    $('.box3 .careers').removeClass('animated swing');
                    $('.box3 h3').removeClass('animated swing');
                    $('.wfgd-left').removeClass('animated fadeInLeft');
                    $('.wfgd-right').removeClass('animated fadeInRight');

                    $('.box3 .careers').addClass('animated swing');
                    $('.box3 h3').addClass('animated swing');
                    $('.wfgd-left').addClass('animated fadeInLeft');
                    $('.wfgd-right').addClass('animated fadeInRight');

                    setTimeout(function () {
                        $('.box3 .mouse').css('opacity','1');
                    },1500);
                };
            }else if(i==3){
                if (a4 == 0 && i == 3) {
                    qidong4();
                    a4++;
                }
                function qidong4() {
                    $('.box4 .careers').removeClass('animated bounceIn');
                    $('.box4 h3').removeClass('animated bounceIn');

                    $('.box4 .video').removeClass('animated slideInLeft');
                    $('.box4 .word').removeClass('animated slideInRight');

                    $('.box4 .careers').addClass('animated bounceIn');
                    $('.box4 h3').addClass('animated bounceIn');

                    $('.box4 .video').addClass('animated slideInLeft');
                    $('.box4 .word').addClass('animated slideInRight');
                }
            }
            return false;
        });


        $('.back').on("click", function () {
            i=0;
            renderPage(i, true);
        });
        /*点击鼠标圆圈按钮*///通过鼠标图案也能进行第一次动画的播放
        $('.box1 .mouse').on("click", function () {
            i++;
            renderPage(i, true);
            /*第二个页面的动画实现重新执行一次的机会*/
            $('.box2 .careers').removeClass('animated bounceIn');
            $('.box2 h3').removeClass('animated bounceIn');
            $('.box2 ul li').eq(0).removeClass('animated slideInLeft');
            $('.box2 ul li').eq(1).removeClass('animated slideInLeft');
            $('.box2 ul li').eq(2).removeClass('animated slideInLeft');

            $('.box2 ul li').eq(4).removeClass('animated slideInRight');
            $('.box2 ul li').eq(5).removeClass('animated slideInRight');
            $('.box2 ul li').eq(6).removeClass('animated slideInRight');

            if(i==1&&a2==0){
                qidong2();
                a2++;
            }
            function qidong2(){

                $('.content2').css('backgroundSize','100% 100%');

                $('.box2 .careers').addClass('animated bounceIn');
                $('.box2 h3').addClass('animated bounceIn');
                $('.box2 ul li').eq(0).addClass('animated slideInLeft');
                $('.box2 ul li').eq(1).addClass('animated slideInLeft');
                $('.box2 ul li').eq(2).addClass('animated slideInLeft');

                $('.box2 ul li').eq(4).addClass('animated slideInRight');
                $('.box2 ul li').eq(5).addClass('animated slideInRight');
                $('.box2 ul li').eq(6).addClass('animated slideInRight');
                setTimeout(function () {
                    $('.box2 .mouse').css('opacity','1');
                },1500);
            }

            /*第二个页面的//end*/
        });
        //
        $('.box2 .mouse').on("click", function () {
            i++;
            renderPage(i, true);
                if(i==2&&a3==0){//判断是不是第一次执行
                    qidong3();
                    a3++;
                }
            function qidong3() {
                $('.box3 .careers').removeClass('animated swing');
                $('.box3 h3').removeClass('animated swing');
                $('.wfgd-left').removeClass('animated fadeInLeft');
                $('.wfgd-right').removeClass('animated fadeInRight');

                $('.box3 .careers').addClass('animated swing');
                $('.box3 h3').addClass('animated swing');
                $('.wfgd-left').addClass('animated fadeInLeft');
                $('.wfgd-right').addClass('animated fadeInRight');

                setTimeout(function () {
                    $('.box3 .mouse').css('opacity','1');
                },1500);
            };
        });
        $('.box3 .mouse').on("click", function () {
            i++;
            renderPage(i, true);
            if (a4 == 0 && i == 3) {
                    qidong4();
                    a4++;
            }
            function qidong4() {
                $('.box4 .careers').removeClass('animated bounceIn');
                $('.box4 h3').removeClass('animated bounceIn');

                $('.box4 .video').removeClass('animated slideInLeft');
                $('.box4 .word').removeClass('animated slideInRight');

                $('.box4 .careers').addClass('animated bounceIn');
                $('.box4 h3').addClass('animated bounceIn');

                $('.box4 .video').addClass('animated slideInLeft');
                $('.box4 .word').addClass('animated slideInRight');
            }

        })
    });
})();
/*主体页面的切换end*/

