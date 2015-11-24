var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

if(wScroll > $('.large-window').offset().top - $(window).height()){
Promoscope($('.large-window'));
}
if(wScroll > $('.large-window2').offset().top - $(window).height()){
Promoscope($('.large-window2'));
}

  function Promoscope (el) {
  
var toppx = el.offset().top;
var wh =  $(window).height();
var move =((wScroll - toppx)/2)/-2;
    el.css({'background-position':'center '+ move +'px'});
console.log(move+'px');
    var opacity = (wScroll - el.offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  
  }

  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
