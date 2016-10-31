$(function(){
	$('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
	
	$("span.glyphicon-menu-right").on("click",function(){
		$(".front").css('transform','rotateY(180deg)');
		$(".back").css('transform','rotateY(0deg)');
		$(".card").css('animation','scalable 600ms ease 0s');
		setTimeout(function() {
			$(".card").css('animation','');
		}, 600);
		$(".goToPage").delay(1000).animate({"margin-bottom":"0"});		
	})
	$("span.glyphicon-menu-left").on("click",function(){
		$(".front").css('transform','rotateY(0deg)');
		$(".back").css('transform','rotateY(180deg)');
		$(".card").css('animation','scalable 600ms ease 0s');
		setTimeout(function() {
			$(".card").css('animation','');
		}, 600);
	})
	var secondTop = $(".secondPart").position().top;
	
	$(".goToPage").on("click",function(){
		 $("html, body").animate({ scrollTop: secondTop}, 600);
		 setTimeout(function() {
			$(".intro").css('display','none');
		}, 600);
    return false;
	})

		
		$(".secondPart").on('scroll', function () {
			var windowHeight = $(window).height();
			var gridTop = windowHeight * .2;
			var gridBottom = windowHeight * .9;
				
            $('.welcome').each(function () {
            var thisTop = $(this).offset().top;// - $(window).scrollTop();
            if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
			   $(this).addClass("welcomeo");
            } else {
                $(this).removeClass("welcomeo");
            }
			});
        });
	
});