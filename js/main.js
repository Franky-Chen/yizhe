$(document).ready(function(){
    $(".sliders-list").responsiveSlides({
        speed: 700,     //过渡速度
        timeout: 3500,  //两张幻灯片之间变化时间
        pager: true     //展示页码
    });   
//  跟屏固定元素
    $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 450) {
                    if (!$("#fixation1,#fixation2,#fixation3").is(":visible")) {
                        try {
                            $("#fixation1,#fixation2,#fixation3").slideDown();
                        } catch (e) {
                            $("#fixation1,#fixation2,#fixation3").show();
                        }                      
                    }
                }
                else {
                    if ($("#fixation1,#fixation2,#fixation3").is(":visible")) {
                        try {
                            $("#fixation1,#fixation2,#fixation3").slideUp();
                        } catch (e) {
                            $("#fixation1,#fixation2,#fixation3").hide();
                        }                       
                    }
                } 
            });
	
});

