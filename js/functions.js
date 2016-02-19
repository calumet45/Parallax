
var contactForm = $('#contactme'),
    inputName = $('[name="name"]',contactForm),
    inputEmail = $('[name="email"]',contactForm),
    textAreaMessage = $('[name="message"]',contactForm),
    sendButton = $('button',contactForm);

    sendButton.on('click',function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton[0].innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/dave.means@carpoolagency.com', true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.val() +
        "&email=" + inputEmail.val() +
        "&message=" + textAreaMessage.val());

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          contactForm[0].innerHTML = '<h3 style="color:white;">Message sent!</h3>';
        }
        else {
          sendButton[0].innerHTML = 'Error!';
        }
      }
    });



var pContainerHeight = $('.bird-box').height();
/*var pContainerHeight = $('.bird-box').height();
$(window).scroll(function() {

   

});
*/

;
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    //   var myint=0;
    /* init - you can init any event */
    throttle("scroll", "optimizedScroll");
})();


// handle event
window.addEventListener("optimizedScroll", function() {

    var wScroll = $(this).scrollTop();
     $('.offsetTop').each(function(el) {
       $(this).text(parseInt($(this).offset().top));
});
    //console.log(wScroll);
    /*    if (wScroll <= pContainerHeight) {

            $('.logo').css({
                'transform': 'translate(0px, ' + wScroll / 2 + '%)'
            });

            $('.back-bird').css({
                'transform': 'translate(0px, ' + wScroll / 4 + '%)'
            });

            $('.fore-bird').css({
                'transform': 'translate(0px, -' + wScroll / 40 + '%)'
            });

        }*/
    /*var fmove = (($('.content').outerHeight()+$('.content').offset().top) > $('footer').offset().top)? $('footer').offset().top - ($('.content').outerHeight()+$('.content').offset().top):0;
  $('footer').css('bottom' , fmove +'px');

 {
    var fmove = $(this).outerHeight() - wScroll;
    $('footer').css({
      'transform' : 'translate(0px, -'+ fmove +'px)'
    });
  }; 

*/
    // Landing Elements
    if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
        if ($('.clothes-pics figure:not(.is-showing)')) {
            $('.clothes-pics figure').each(function(i) {

                setTimeout(function() {
                    $('.clothes-pics figure').eq(i).addClass('is-showing');
                }, (700 * (Math.exp(i * 0.14))) - 700);
            });
        };

    } else {
        $('.clothes-pics figure').each(function(i) {

            setTimeout(function() {
                $('.clothes-pics figure').eq(i).removeClass('is-showing');
            }, (700 * (Math.exp(i * 0.14))) - 700);
        });
    }





    // Floating Elements

    if (wScroll > $('.blog-posts').offset().top - $(window).height()) {

        var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350)).toFixed();

        $('.post-1').css({
            'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });

        $('.post-3').css({
            'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });

    }


    var wScroll = $(this).scrollTop();
    $('.debugStuff').html('Debug: wScroll ' + wScroll + ' | ');
    if (wScroll > $('.large-window').offset().top - $(window).height()) {
        Promoscope($('.large-window'), -2, 'background-position');
    }
    if ((wScroll + $(window).height()) > ($('.large-window2').offset().top + $('.insideText').outerHeight())) {
        Promoscope($('.insideText'), 1, 'transform');
    }

    function Promoscope(el, dev, cssVal) {
        //       var wScroll = $(this).scrollTop();

        var toppx = el.offset().top;

        if (cssVal == 'background-position') {
            var wh = $(window).height();
            var move = 'center ' + ((wScroll - toppx) / 2) / dev + 'px';
        } else if (cssVal == 'transform') {
            var wh = el.parent().height();
            var elh = el.height();
            var moveSize = wh - elh;
            var offset = ($('.large-window2').offset().top + $('.insideText').outerHeight()) - $(window).height();
            var move = "'translateY(" + (((wScroll - offset) + $('.insideText').outerHeight()) - moveSize) + "px)'";

            var toppx = ((wScroll - offset) / 2.5);
            var movepx = ($('.large-window2').height() - $('.insideText').outerHeight());
            if (toppx < movepx) {
                $('.debugStuff').html('Debug: wScroll ' + wScroll + ' | moveSize ' + moveSize + ' | offset ' + offset + ' | move ' + move + ' | movepx ' + movepx + ' | toppx ' + toppx);
                var sh = (toppx / movepx) * 10;
                $('.insideText').css({
                    'top': toppx + "px",
                    'text-shadow': '3px ' + '-' + (sh + 4) + 'px ' + ((sh + 5) / 2) + 'px #000000'
                });
            }
        };
        //console.log(move+'px');
        var opacity = (wScroll - el.offset().top + 400) / (wScroll / 5);

        $('.window-tint').css({
            'opacity': opacity
        });


    }
    // console.log("Resource conscious scroll callback!");
    //   myint++;
    //   if (myint%1 == 1)   {
    var variable = 70 //$('input.u-full-width').val();
    if (0 == 1) {
        console.log('drop frame: ' + fmove + ' con-' + $('.content').outerHeight() + ' ft-' + $('footer').offset().top);
        return false;
    } else {
        var contentTop = int($('.content').offset().top);
        var contentOutter = int($('.content').outerHeight(true));
        var footerTopTop = int($('footer.topFooter').offset().top);
        var footerBottomTop = int($('footer.bottomFooter').offset().top);
        var footertopHeight = int($('.topFooter').outerHeight(true));
        var footerOuterHeight = int($('footer.bottomFooter').outerHeight(true));
        var moveSize = int((contentOutter + contentTop));
        var scrollMax = int(footertopHeight + footerTopTop);
        var scrollY = int(window.scrollY);
        var fmove = (moveSize < footerTopTop) ? footerTopTop - ($('.content').outerHeight() + $('.content').offset().top) : 0;
        // $('.debugStuff').html('Debug: contentTop' + contentTop + " | scrollY" + scrollY + " | footertopHeight" + footertopHeight + " | footerOuterHeight" + footerOuterHeight + " | fmove" + fmove + " | scrollMax" + scrollMax + " |  moveSize" + moveSize + " | footerBottomTop " + footerBottomTop + " | contentOutter " + contentOutter + " | footerTopTop " + footerTopTop + " <<<<")

        if ((scrollMax == moveSize) || (scrollMax == (moveSize + 1))) {
            $('.topFooter').css({
                'position': 'relative',
                'margin-bottom': (footerOuterHeight) + 'px'
            });
            $('.content').css('margin-bottom', '0px');
        } else {
            if ((footerBottomTop - footertopHeight) < contentOutter) {
                $('.topFooter').css('position', 'fixed').css('margin-bottom', '0px');
                $('.content').css('margin-bottom', footertopHeight + 'px');
            };

            //            console.log(fmove + ' con-' + $('.content').outerHeight() + ' ft-' + $('footer').offset().top);
        }
    }

});

function int(val) {
    return parseInt(val);
}

$(document).ready(function() {
    $('div:not(.row), figure, article').each(function(el){
       var ost = $(this).offset().top;
        $(this).prepend('<span style="position:absolute;top:0;left:0;background:green;" class="offsetTop">'+ost+'</span>');
  /*var contactForm = $('form#contactme'),
    inputName = $('[name="name"]',contactForm),
    inputEmail = $('[name="email"]',contactForm),
    textAreaMessage = $('[name="message"]',contactForm),
    sendButton = $('button',contactForm);

    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/dave.means@carpoolagency.com', true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.value +
        "&email=" + inputEmail.value +
        "&message=" + textAreaMessage.value);

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          sendButton.innerHTML = 'Message sent!';
        }
        else {
          sendButton.innerHTML = 'Error!';
        }
      }
    });*/



    });
});
