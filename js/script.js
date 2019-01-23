$(document).ready(function(){

    /* togller btn */

   $('.navbar-toggler').click(function(){
       $('.navbar-toggler').toggleClass('change')
   })



  /* sticky navbar less paddint */

    $(window).scroll(function(){
        let position= $(this).scrollTop();
        if(position >= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top')
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top')
        }
    })



/* smooth scroll */

$(".nav-item a, .header-link,#back-to-top").click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top -27
    }, 2000)
})


/* back to top */

$(window).scroll(function(){
    let position= $(this).scrollTop();
    if(position >= 718){
        $('#back-to-top').addClass('scrollTop');
        
    }
    else{
        $('#back-to-top').removeClass('scrollTop');
       
    }
})




    /* ripple */
    $('#header , info').ripples({
        dropRadius: 20,
        perturbance: 0.01
        
      })

      /* magnific */
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
      });
})