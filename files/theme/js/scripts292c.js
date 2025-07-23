(function($) {
  $(document).ready(function () {

		// smooth scroll
		$('a[href^="#"]').not('[href="#mmenu"]').on('click',function(e) {
				e.preventDefault();
				var target = this.hash,
				$target = $(target);
				$('html, body').stop().animate({
						'scrollTop': $target.offset().top
				}, 900, 'swing', function () {
						window.location.hash = target;
				});
		});

		// Der Button wird ausgeblendet
		$(".back-to-top").hide();

		// Funktion f�r das Scroll-Verhalten
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) { // Wenn 100 Pixel gescrolled wurde
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$(window).scroll(function(){
				if($(window).scrollTop() > 200) {
					 $('.widget-wrapper').addClass('close');

			 }
				//       if($(window).scrollTop() <1) {
				 //  $('.widget-wrapper').removeClass('close');
				 //  }
		});

		$(".widget-switch").click(function(){
			$('.widget-wrapper').toggleClass("close");
		});

		$(".iq-float").click(function(e){
      var iq = eventmachine.iq["eventmachine-iq-float"];
      if (iq !== "undefined") iq.trigger();
      e.preventDefault();
      return false;
		});

		$(".iq-inline").click(function(e){
      var iq = eventmachine.iq["eventmachine-iq-inline"];
      if (iq !== "undefined") iq.trigger();
      e.preventDefault();
      return false;
		});

   // $('.widget-switch').click(function() {
   //         if($('.widget-wrapper').hasClass("close")){
    //          $('.widget-wrapper').removeClass('close');
      //       }
        //      else{
        //      $('.widget-wrapper').addClass('close');
       //     }
      //  });



    /*
      // sticky nav
    if(window.innerWidth>=768) {
      $(window).scroll(function() {
        if (!$(".navbar").hasClass("fix") && $(this).scrollTop() >= 100) {
          $(".navbar").addClass("fix");
        } else if ( $(".navbar").hasClass("fix") && $(this).scrollTop() < 100) {
          $(".navbar").removeClass("fix");
        }
      });
    }
    */

  });
})(jQuery);

