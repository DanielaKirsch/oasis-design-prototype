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

	if($( '.swipebox' ).length > 0) {
		$( '.swipebox' ).swipebox();

	}

	$( '#gallery' ).click( function( e ) {
		e.preventDefault();
		$.swipebox( [
			{ href:'images/day3.jpg', title:'Shichahai Shadow Art Hotel – Beijing' }, 
			{ href:'images/hotel1.jpg', title:'Shichahai Shadow Art Hotel – Beijing' },

			{ href:'images/imagecon2.jpg', title:'Shichahai Shadow Art Hotel – Beijing' },

			{ href:'images/imagecon1.jpg', title:'Shichahai Shadow Art Hotel – Beijing' },

			{ href:'images/imagecon3.jpg', title:'Shichahai Shadow Art Hotel – Beijing' },

			{ href:'images/imagecon4.jpg', title:'Shichahai Shadow Art Hotel – Beijing' }



		] );
	} );


});

setTimeout(function(){ 

	$(document).foundation();
}, 800);



