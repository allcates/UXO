layer.closeAll('loading');

$(function () {

    //左侧导航
    $('.bodyLeft .menulist li').on('mouseover', function () {
        $(this).find('.icon-edit,.icon-close').show();
    }).on('mouseout', function () {
        $(this).find('.icon-edit,.icon-close').hide();
    })
    //编辑产品名称
    $(document).on('click', '.bodyLeft .menulist li .icon-edit', function () {
        $(".mask").show();
        $("#newPdc").show();
    });
    //新建产品
    $(document).on('click', '#newPdc .cancel', function () {
        $(".mask").hide();
        $("#newPdc").hide();
        return false
    });
    $(document).on('click', '#newPdcBtn,.add-products', function () {
        $(".mask").show();
        $("#newPdc").show();
        return false
    });
    //新建项目
    $(document).on('click', '#newPro .cancel', function () {
        $(".mask").hide();
        $("#newPro").hide();
    });
    $(document).on('click', '#newProBtn', function () {
        $(".mask").show();
        $("#newPro").show();
    });
    //新建任务
    $(document).on('click', '#newTask .cancel', function () {
        $(".mask").hide();
        $("#newTask").hide();
    });
    $(document).on('click', '#newTaskBtn', function () {
        $(".mask").show();
        $("#newTask").show();
    });
    //批量上传任务
    var task = false;
    $(document).on('click', '#batchBtn .ico-batch,#batchBtn .drop-down', function () {
        if (task == false) {
            $(this).next('.downmould').show();
            task = true;
        } else {
            $(this).next('.downmould').hide();
            task = false;
        }
        return false
    });
    //批量上传任务2
    var task = false;
    $(document).on('click', '#batchBtn2 .drop-down', function () {
        if (task == false) {
            $(this).next('.downmould').show();
            task = true;
        } else {
            $(this).next('.downmould').hide();
            task = false;
        }
        return false
    });

    //查看权限
    $(document).on('click', '.look-permiss', function () {
        $(".mask").show();
        $("#per").show();
    });
    $(document).on('click', '#per .cancel', function () {
        $(".mask").hide();
        $("#per").hide();
    });
    $(".jurisdiction .listimg li").hover(function () {
        $(this).find(".close").show();
    }, function () {
        $(this).find(".close").hide();
    });
    $(document).on('click', '.jurisdiction .listimg .close', function () {
        $(this).parent().remove();
    });

    $(".tablebox .taskName").hover(function () {
        $(this).find(".table-edit").show();
    }, function () {
        $(this).find(".table-edit").hide();
    });
    $(".tablebox .table-edit").on('click', function () {
        $(".mask").show();
        $('#newPro').show();
        return false
    })

    $(".tableDrag .table-edit").on('click', function () {
        $(".mask").show();
        $('#editTask').show();
        return false
    })
    $(document).on('click', '#editTask .cancel', function () {
        $(".mask").hide();
        $("#editTask").hide();
    });

    $("#addTask").on('click', function () {
        $(".mask").show();
        $('#newTask').show();
        return false
    })
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
        var $this = $(this);
        var leftBtn = $this.find('.prev'),
            rightBtn = $this.find('.next'),
            list = $this.find('.info ul');
        list.width(list.find('li').length * list.find('li').outerWidth(true));
        if(list.find('li').length>5){

            rightBtn.on('click', function () {
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
            leftBtn.on('click', function () {
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
    //滑动插件 报告页
    $('.focusBox').each(function () {
        var $this = $(this);
        var leftBtn = $this.find('.prev'),
            rightBtn = $this.find('.next'),
            list = $this.find('.tempWrap ul');
        list.width(list.find('li').length * list.find('li').outerWidth(true));
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
    })
    //鼠标悬浮到时长块
    $('.chart .block').on('mouseover', function () {
        var $this = $(this), idx = $this.index(),idxLi=$this.parents('.colorful-box-end').find('.tempWrap li').eq(idx),list=$this.parents('.colorful-box-end').find('.tempWrap ul');
        idxLi.addClass('on');
        if(idxLi.position().left>=($('.focusBox .tempWrap').width()-list.position().left)/*&&idxLi.position().left<(2*$('.focusBox .tempWrap').width()-list.position().left)*/){
            list.stop().animate({ 'left': list.position().left - idxLi.position().left});
        }else if(idxLi.position().left<-list.position().left){
            list.stop().animate({ 'left': -idxLi.position().left});
        }
    }).on('mouseleave', function () {
        $('.tempWrap li').removeClass('on');
    })

    //点击图片
    $('.focusBox .pic li').on('click', function () {
        var imgUrl = $(this).attr('imgUrl');
        var imgHtml = '<div class="imgHtml" style="background-image:url(' + imgUrl + ');"></div>';
        //$('body').append(imgHtml);
        //$('.imgHtml').click(function () { $(this).remove() });
        //页面层-佟丽娅
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img src="'+imgUrl+'"/>'
        });
    })
    //导航
    $('.main-nav h3').on('click', function () {
        $(this).siblings('h3').removeClass('on');
        $(this).addClass('on');
        $(this).siblings('p').removeClass('on');
        $(this).next('p').addClass('on');
        var ft = $('.main-div').eq(-1).offset().top;
        if ($('.main-nav h3').index($(this)) == $('.main-nav h3').length - 1) {
            $('html,body').animate({ scrollTop: ft - 80 });
            $('.main-nav p span').removeClass('on');
        }
    })

    $('.main-nav p span').on('click', function () {
        var idx = $('.main-nav p span').index($(this));
        var ft = $('.main-div').eq(idx).offset().top;
        $('.main-nav p span').removeClass('on');
        $(this).addClass('on');
        $('html,body').animate({ scrollTop: ft - 80 });
    })

    $('.main-nav').on('mouseleave', function () {
        $('.main-nav-con p span.on').parent('p').prev('h3').addClass('on').siblings('h3').removeClass('on');
        $('.main-nav-con p span.on').parent('p').addClass('on').siblings('p').removeClass('on');
    })

    //滚动
    if ($('.main-nav').length > 0) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > ($('.main-whole').offset().top - 100)) {
                $('.main-nav').show();
            } else {
                $('.main-nav').hide();
            }
            $('.main-div').each(function () {
                if ($(window).scrollTop() >= ($(this).offset().top - $('.main-nav').height() - 50) && $(window).scrollTop() <= ($(this).offset().top - $('.main-nav').height() + $(this).height())) {
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
        })
        if ($(window).scrollTop() > ($('.main-whole').offset().top - 100)) {
            $('.main-nav').show();
        } else {
            $('.main-nav').hide();
        }

    }

})






















