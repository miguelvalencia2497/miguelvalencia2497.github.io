$(function(){
	var aboutOffset = $(".about-skills").offset().top;
	var edOffset = $("#education-experience>.wrapper>#left").offset().top
	var exOffset = $("#education-experience>.wrapper>#right").offset().top;
	var achievementsOffset = $("#achievements").offset().top;

	 $('#banner-portrait').css({
		  	 						"-webkit-transition":"all 1.5s ease",
								    "-moz-transition":"all 1.5s ease",
								    "-o-transition":"all 1.5s ease",
								    "transition":"all 1.5s ease",
		  	 						"right":"0px"
		  	 					});

	 $('#banner-circle').css({
		  	 						"-webkit-transition":"all 1.5s ease",
								    "-moz-transition":"all 1.5s ease",
								    "-o-transition":"all 1.5s ease",
								    "transition":"all 1.5s ease",
		  	 						"right":"0px"
		  	 					});

	 $('.banner-title').css({
		  	 						"-webkit-transition":"all 1.5s ease",
								    "-moz-transition":"all 1.5s ease",
								    "-o-transition":"all 1.5s ease",
								    "transition":"all 1.5s ease",
		  	 						"left":"0px"
		  	 					});

	 $('.banner-sub-title').css({
		  	 						"-webkit-transition":"all 1.5s ease",
								    "-moz-transition":"all 1.5s ease",
								    "-o-transition":"all 1.5s ease",
								    "transition":"all 1.5s ease",
		  	 						"left":"0px"
		  	 					});

	$(window).scroll(function(){
		 if ($(document).scrollTop() >= 10) {
		    $("header").removeClass("header-top").addClass("header-scrolled");
		  } else {
		    $("header").removeClass("header-scrolled").addClass("header-top");
		  }

		  if ( $(document).scrollTop() >= (aboutOffset - 200)) {   
		  	 $('.yellow-bar#1').css({
		  	 						"-webkit-transition":"all 2s ease",
								    "-moz-transition":"all 2s ease",
								    "-o-transition":"all 2s ease",
								    "transition":"all 2s ease",
		  	 						"width":"90%"
		  	 					});
		  	 $('.yellow-bar#2').css({
		  	 						"-webkit-transition":"all 2s ease",
								    "-moz-transition":"all 2s ease",
								    "-o-transition":"all 2s ease",
								    "transition":"all 2s ease",
		  	 						"width":"80%"
		  	 					});
		  	 $('.yellow-bar#3').css({
		  	 						"-webkit-transition":"all 2s ease",
								    "-moz-transition":"all 2s ease",
								    "-o-transition":"all 2s ease",
								    "transition":"all 2s ease",
		  	 						"width":"75%"
		  	 					});
		  	 $('.yellow-bar#4').css({
		  	 						"-webkit-transition":"all 2s ease",
								    "-moz-transition":"all 2s ease",
								    "-o-transition":"all 2s ease",
								    "transition":"all 2s ease",
		  	 						"width":"75%"
		  	 					});
		  	 $('.yellow-bar#5').css({
		  	 						"-webkit-transition":"all 2s ease",
								    "-moz-transition":"all 2s ease",
								    "-o-transition":"all 2s ease",
								    "transition":"all 2s ease",
		  	 						"width":"65%"
		  	 					});
		  	 
	       	// $(".yellow-bar").addClass("yellow-bar-full");
	      }

	      if ( $(document).scrollTop() >= (edOffset - 300)) {
	      		$('#education-experience>.wrapper>#left').css({
					"-webkit-transition":"all 1.5s ease",
	    			"-moz-transition":"all 1.5s ease",
	    			"-o-transition":"all 1.5s ease",
	    			"transition":"all 1.5s ease",
					"left":"0px"
				});
	      }

	      if ( $(document).scrollTop() >= (exOffset - 300)) {
	      		$('#education-experience>.wrapper>#right').css({
					"-webkit-transition":"all 1.5s ease",
	    			"-moz-transition":"all 1.5s ease",
	    			"-o-transition":"all 1.5s ease",
	    			"transition":"all 1.5s ease",
					"right":"0px"
				});
	      }
	});

	//SCROLLING
	$('header').find('a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $($href).offset();
	    $('body').animate({ scrollTop: $anchor.top-50 }, 800);
	});

	$('#lead-banner>#banner-ribbon>.wrapper>a').mouseenter(function(){
		$(this).css({
			"background-color":""
		});
	}).mouseleave(function(){
		$(this).css({
			"-moz-box-shadow":"inset 0 0 0px #000000",
   			"-webkit-box-shadow":"inset 0 0 0px #000000",
   			"box-shadow":"inset 0 0 0px #000000"
		});
	});
});
