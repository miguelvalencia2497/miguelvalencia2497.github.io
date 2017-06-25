$(function(){
	var aboutOffset = $("#about-me").offset().top;
	var edexOffset = $("#education-experience").offset().top;
	var achievementsOffset = $("#achievements").offset().top;

	 $('#banner-portrait').css({
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

		  if ( $(document).scrollTop() >= (aboutOffset - 80)) {   
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
		  	 						"width":"65%"
		  	 					});
		  	 
	       	// $(".yellow-bar").addClass("yellow-bar-full");
	      }

	      if ( $(document).scrollTop() >= (edexOffset - 200)) {
	      		$('#education-experience>.wrapper>#left').css({
					"-webkit-transition":"all 1.5s ease",
	    			"-moz-transition":"all 1.5s ease",
	    			"-o-transition":"all 1.5s ease",
	    			"transition":"all 1.5s ease",
					"left":"0px"
				});
	      		$('#education-experience>.wrapper>#right').css({
					"-webkit-transition":"all 1.5s ease",
	    			"-moz-transition":"all 1.5s ease",
	    			"-o-transition":"all 1.5s ease",
	    			"transition":"all 1.5s ease",
					"right":"0px"
				});
	      }
	});
});