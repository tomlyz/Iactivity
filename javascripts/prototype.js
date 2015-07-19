$(function(){
    $(".g-entered").mouseenter(function(){
        $(".g-right_list").animate({"height":"156px"},500);
    }).mouseleave(function(){
        $(".g-right_list").animate({"height":0},500);
    })
    var g_block4 = false; // true为显示状态，false为非显示状态。 
    var hide;
    $(".g-block4").click(function(){
        if(g_block4) {
            $("ul.dots_ul").hide();
            $(".triangle_top").hide();
        }
        else {
            $("ul.dots_ul").show();
            $(".triangle_top").show();
            hide = setTimeout(function(){$("ul.dots_ul").hide();$(".triangle_top").hide();},3000);
        }
    });
    $("ul.dots_ul").mouseover(function(){
        window.clearTimeout(hide);
    }).mouseleave(function(){
        hide = setTimeout(function(){$("ul.dots_ul").hide();$(".triangle_top").hide();},3000);
    })
})