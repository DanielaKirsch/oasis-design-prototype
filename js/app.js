$(document).ready(function(){


	$( ".nav-main-menu" ).load( "includes/nav-main-menu.html" );

	$( "footer" ).load( "includes/footer.html" );
	$( "header" ).load( "includes/header.html" );


	
		$(window).bind('scroll', function () {

			if($(window).width() >= 1200) {
			    if ($(window).scrollTop() > 400) {
			        $('.nav-main-menu').addClass('fixed');
			        $('.fixed-logo').addClass('fixed');
			       // $('.day-by-day-menu').addClass('active');
			    } else {
			        $('.nav-main-menu').removeClass('fixed');
			       $('.fixed-logo').removeClass('fixed');
			       //$('.day-by-day-menu').removeClass('active');
			       // $('.float-right').removeClass('fixed');
			    }
		    }
		});

	
	


});

setTimeout(function(){ 

	$(document).foundation();
}, 800);



