layer.closeAll('loading');

$(function () {

    // 左侧导航
    $('.bodyLeft .menulist li').on('mouseover', function () {
        $(this).find('.icon-edit,.icon-close').show();
    }).on('mouseout', function () {
        $(this).find('.icon-edit,.icon-close').hide();
    });

    // 取消弹出层
    $(document).on('click', '.bombBox .cancel', function () {
        $('.bombBox').hide();
        $('.mask').fadeOut();
        return false;
    });

    ////编辑产品名称
    //$(document).on('click', '.bodyLeft .menulist li .icon-edit', function () {
    //    $(".mask").show();
    //    $("#newPdc").show();
    //});
    ////新建产品
    //$(document).on('click', '#newPdc .cancel', function () {
    //    $(".mask").hide();
    //    $("#newPdc").hide();
    //    return false
    //});
    //$(document).on('click', '#newPdcBtn,.add-products', function () {
    //    $(".mask").show();
    //    $("#newPdc").show();
    //    return false
    //});
    ////新建项目
    //$(document).on('click', '#newPro .cancel', function () {
    //    $(".mask").hide();
    //    $("#newPro").hide();
    //});
    //$(document).on('click', '#newProBtn', function () {
    //    $(".mask").show();
    //    $("#newPro").show();
    //});
    ////新建任务
    //$(document).on('click', '#newTask .cancel', function () {
    //    $(".mask").hide();
    //    $("#newTask").hide();
    //});
    //$(document).on('click', '#newTaskBtn', function () {
    //    $(".mask").show();
    //    $("#newTask").show();
    //});
    ////批量上传任务
    //var task = false;
    //$(document).on('click', '.batchFm .drop-down', function () {
    //    if (task == false) {
    //        $(".downmould").show();
    //        task = true;
    //    } else {
    //        $(".downmould").hide();
    //        task = false;
    //    }
    //    return false
    //});

    //查看权限
    //$(document).on('click', '.look-permiss', function () {
    //    $(".mask").show();
    //    $("#per").show();
    //});
    //$(document).on('click', '#per .cancel', function () {
    //    $(".mask").hide();
    //    $("#per").hide();
    //});
    //$(".jurisdiction .listimg li").hover(function () {
    //    $(this).find(".close").show();
    //}, function () {
    //    $(this).find(".close").hide();
    //});
    //$(document).on('click', '.jurisdiction .listimg .close', function () {
    //    $(this).parent().remove();
    //});


    //$(document).on('click', '#editTask .cancel', function () {
    //    $(".mask").hide();
    //    $("#editTask").hide();
    //});

    //$("#addTask").on('click', function () {
    //    $(".mask").show();
    //    $('#newTask').show();
    //    return false
    //})

    //返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".backTop").fadeIn(1000);
        }
        else {
            $(".backTop").fadeOut(1000);
        }
    });


    //滑动插件
    $('.sfScroll').each(function () {
        initScroll($(this));
    })

    //点击图片
    $(document).on('click', '.tempWrap .pic>li:not(.add),#ul-look>li:not(.add),#ul-eyeMovement>li:not(.add),#ul-interest>li:not(.add)', function () {
        var imgUrl = $(this).attr('data-url');
        var imgHtml = '<div class="imgHtml" style="background-image:url(' + imgUrl + ');"></div>';
        //$('body').append(imgHtml);
        //$('.imgHtml').click(function () { $(this).remove() });
        //页面层
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img src="' + imgUrl + '"/>'
        });
    });

    $(document).on('click', '.thermodyScroll .info li a', function (e) {
        e.stopPropagation();
    });

    //导航
    $('.main-nav h3').on('click', function () {
        $(this).next('p').find('span').eq(0).click();
        var ft = $('.main-div').eq(-1).offset().top;
        if ($('.main-nav h3').index($(this)) == $('.main-nav h3').length - 1) {
            $('html,body').animate({ scrollTop: ft-10 });
            $('.main-nav p span').removeClass('on');
        }
    })

    $('.main-nav p span').on('click', function () {
        var idx = $('.main-nav p span').index($(this));
        var ft = $('.main-div').eq(idx).offset().top;
        $('html,body').animate({ scrollTop: ft-10 });
    })

    /*$('.main-nav').on('mouseleave', function () {
        $('.main-nav-con p span.on').parent('p').prev('h3').addClass('on').siblings('h3').removeClass('on');
        $('.main-nav-con p span.on').parent('p').addClass('on').siblings('p').removeClass('on');
    })*/

    //滚动
    if ($('.main-nav').length > 0) {
        function scFun(){
            if ($(window).scrollTop() > ($('.main-whole').eq(0).offset().top+55)) {
                $('.main-nav').show();
            } else {
                $('.main-nav').hide();
            }
            $('.main-div').each(function () {
                if ($(window).scrollTop() >= ($(this).offset().top-30) && $(window).scrollTop() < ($(this).offset().top + $(this).height()-30)) {
                    var idx = $('.main-div').index($(this));
                    $('.main-nav-con p span').removeClass('on');
                    $('.main-nav-con p span').eq(idx).addClass('on');
                    $('.main-nav-con h3').removeClass('on');
                    $('.main-nav-con p span').eq(idx).parent('p').prev('h3').addClass('on');
                    $('.main-nav-con p').removeClass('on');
                    $('.main-nav-con p span').eq(idx).parent('p').addClass('on');
                }
            })
            if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                $('.main-nav-con p span').removeClass('on');
                $('.main-nav-con h3').removeClass('on');
                $('.main-nav-con h3').eq(-1).addClass('on');
            }
        }
        scFun();
        $(window).scroll(function () {
            scFun();
        })
        if ($(window).scrollTop() > ($('.main-whole').offset().top - 100)) {
            $('.main-nav').show();
        } else {
            $('.main-nav').hide();
        }

    }

	 //滑动插件 报告页
    $('.focusBox').each(function () {
        var $this = $(this);
        var leftBtn = $this.find('.prev'),
            rightBtn = $this.find('.next'),
            list = $this.find('.tempWrap ul');
        list.width(list.find('li').length * list.find('li').outerWidth(true));
        if (list.find('li').length > 4) {
            rightBtn.on('click', function () {
                var wt = $this.find('.tempWrap').width();//内部定义为了适应resizes
                if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                    list.stop().animate({ 'left': -(list.width() - wt) });
                    rightBtn.addClass('hide');
                } else {
                    list.stop().animate({ 'left': list.position().left - wt/*+list.find('li').outerWidth(true)*/ });
                }
                leftBtn.removeClass('hide');
                return false
            });
            leftBtn.on('click', function () {
                var wt = $this.find('.tempWrap').width();
                if (-(list.position().left) <= wt) {//如果到最左
                    list.stop().animate({ 'left': 0 });
                    leftBtn.addClass('hide');
                } else {
                    list.stop().animate({ 'left': list.position().left + wt });
                }
                rightBtn.removeClass('hide');
                return false
            });
        }
    })


    function rsz() {
        var h = $(window).height() - $('.header').height();
        $(".bodyLeft").height(h > $('.bodyRight').height() ? h : $('.bodyRight').height());
    }
    rsz();
    $(window).resize(function () {
        rsz();
    })


    //左侧导航定位
    $('.bodyLeft .menulist li a').on('click',function(){
        var pos = $('.bodyLeft').scrollTop();
        sessionStorage.setItem('pos', pos);
    })

    if (sessionStorage.getItem('pos')) {
        $('.bodyLeft').scrollTop(sessionStorage.getItem('pos'));
     }
})

function initScroll(ss) {
    ss.each(function () {
        var $this = $(this);
        var leftBtn = $this.find('.prev'),
            rightBtn = $this.find('.next'),
            list = $this.find('.info ul');
        list.width(list.find('li').length * list.find('li').outerWidth(true));
        if (list.find('li').length > 4) {
            rightBtn.off('click').on('click', function () {
                var wt = $this.find('.info').width();//内部定义为了适应resizes
                if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                    list.stop().animate({ 'left': -(list.width() - wt) });
                    rightBtn.addClass('hide');
                } else {
                    list.stop().animate({ 'left': list.position().left - wt + list.find('li').outerWidth(true) });
                }
                leftBtn.removeClass('hide');
                return false
            });
            leftBtn.off('click').on('click', function () {
                var wt = $this.find('.info').width();
                if (-(list.position().left) <= wt) {//如果到最左
                    list.stop().animate({ 'left': 0 });
                    leftBtn.addClass('hide');
                } else {
                    list.stop().animate({ 'left': list.position().left + wt });
                }
                rightBtn.removeClass('hide');
                return false
            });
        }
    })
}



















