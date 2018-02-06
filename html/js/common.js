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
    $(document).on('click','#batchBtn .ico-batch,#batchBtn .drop-down',function(){
        if(task==false){
            $(".downmould").show();
            task=true;
        }else{
            $(".downmould").hide();
            task=false;
        }
        return false
    });

    //查看权限
    $(document).on('click','.look-permiss',function(){
        $(".mask").show();
        $("#per").show();
    });
    $(document).on('click','#per .cancel',function(){
        $(".mask").hide();
        $("#per").hide();
    });
    $(".jurisdiction .listimg li").hover(function(){
        $(this).find(".close").show();
    },function(){
        $(this).find(".close").hide();
    });
    $(document).on('click','.jurisdiction .listimg .close',function(){
        $(this).parent().remove();
    });
    
    $(".tablebox .taskName").hover(function(){
        $(this).find(".table-edit").show();
    },function(){
        $(this).find(".table-edit").hide();
    });
    $(".table-edit").on('click',function(){
        $(".mask").show();
        $('#newPro').show();
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
            list = $this.find('ul');
        list.width(list.find('li').length * list.find('li').outerWidth(true));
        rightBtn.on('click', function () {
            var wt = $this.find('.info').width();//内部定义为了适应resizes
            if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                list.stop().animate({ 'left': -(list.width() - wt) });
                rightBtn.addClass('hide');
            } else {
                list.stop().animate({ 'left': list.position().left - wt });
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
    })
    //点击时长
    var tmDivBd;
    $('.chart .block').on('click',function(){
        var $this=$(this),idx=$this.index();
        $this.parents('.charttop').find('.info li img').css({'border':'2px solid #fff'});
        $this.parents('.charttop').find('.info li').eq(idx).find('img').css({'border':'2px solid #999'});
        clearTimeout(tmDivBd);
        tmDivBd=setTimeout(function(){$this.parents('.charttop').find('.info li img').css({'border':'2px solid #fff'});},500);
    })

    //滚动
    $(window).scroll(function(){
        if($(window).scrollTop()>($('.main-whole').offset().top-100)){
            $('.main-nav').show();
        }else{
            $('.main-nav').hide();
        }
    })

    $('.main-nav h3').on('click',function(){
        $(this).siblings('h3').removeClass('on');
        $(this).addClass('on');
        $(this).siblings('p').removeClass('on');
        $(this).next('p').addClass('on');
    })

    $('.main-nav p span').on('click',function(){
        var idx=$('.main-nav p span').index($(this));
        var ft = $('.main-div').eq(idx).offset().top;
        $('.main-nav p span').removeClass('on');
        $(this).addClass('on');
        $('html,body').animate({scrollTop:ft-80});
    })
    

})






















