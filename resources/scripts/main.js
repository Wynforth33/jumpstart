$(document).ready(function(){
  console.log('Ready!');
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  })

  let lastUserScroll = 0;
  $(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    if (scrollTop - lastUserScroll > 50){
      const navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: `-${navHeight}`}, 150)
      lastUserScroll = scrollTop;
    } else if (lastUserScroll - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150)
      lastUserScroll = scrollTop;
    }
  })
});
