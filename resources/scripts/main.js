// ['Slick'(Plugin)] being passed its ['Settings'(Object)]
$('.carousel').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: false,
  pauseOnFocus: false,
  pauseOnHover: false,
})

// Stores the value of ['Last'(Scroll)]
let lastScroll = 0;

$(window).scroll(function(){
  // captures the scroll distance from top for 'This'['scroll'(Event)]
  let thisScroll = $(this).scrollTop();

  // Scrolling Down; if ['This'(Scroll)] - ['Last'(Scroll)] is Greater than 50;
  if (thisScroll - lastScroll > 50){
    // Grab the Height of '.navbar'
    const navHeight = $('.navbar').css('height');
    // Hide 'NavBar' via negative postion from the top
    $('.navbar').animate({top: `-${navHeight}`}, 150)
    // Set ['This'(Scroll)] as ['Last'(Scroll)]
    lastScroll = thisScroll;

  // Scrolling Up; if ['Last'(Scroll)] - ['This'(Scroll)] is Greater than 50;
} else if (lastScroll - thisScroll > 50){
    // Show 'NavBar' by removing the negative postion from the top
    $('.navbar').animate({top: '0px'}, 150)
    // Set ['This'(Scroll)] as ['Last'(Scroll)]
    lastScroll = thisScroll;
  }
})
