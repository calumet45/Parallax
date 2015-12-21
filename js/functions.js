var pContainerHeight = $('.bird-box').height();
$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    //console.log(wScroll);
    if (wScroll <= pContainerHeight) {

        $('.logo').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });

        $('.back-bird').css({
            'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });

        $('.fore-bird').css({
            'transform': 'translate(0px, -' + wScroll / 40 + '%)'
        });

    }
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

        $('.clothes-pics figure').each(function(i) {

            setTimeout(function() {
                $('.clothes-pics figure').eq(i).addClass('is-showing');
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

});


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
    $('.debugStuff').html('Debug: wScroll ' + wScroll + ' | ');
    if (wScroll > $('.large-window').offset().top - $(window).height()) {
        Promoscope($('.large-window'), -2, 'background-position');
    }
    if ((wScroll + $(window).height()) > ($('.large-window2').offset().top + $('.insideText').height())) {
        Promoscope($('.insideText'), 1, 'transform');
    }

    function Promoscope(el, dev, cssVal) {
        var wScroll = $(this).scrollTop();

        var toppx = el.offset().top;

        if (cssVal == 'background-position') {
            var wh = $(window).height();
            var move = 'center ' + ((wScroll - toppx) / 2) / dev + 'px';
        } else if (cssVal == 'transform') {
            var wh = el.parent().height();
            var elh = el.height();
            var moveSize = wh - elh;
            var offset = ($('.large-window2').offset().top + $('.insideText').height()) - $(window).height();
            var move = "'translateY(" + (((wScroll - offset) + $('.insideText').height()) - moveSize) + "px)'";

           var toppx = ((wScroll - offset) / 2.5);
            var movepx = ($('.large-window2').height() - $('.insideText').height());
            if (toppx < movepx) {
               $('.debugStuff').html('Debug: wScroll ' + wScroll + ' | moveSize ' + moveSize + ' | offset ' + offset + ' | move ' + move +' | movepx ' + movepx+' | toppx ' + toppx);
            var sh = (toppx/movepx)*10;
            $('.insideText').css({
                'top': toppx + "px",
                'text-shadow': '0px '+(sh+4)+'px ' +((sh+5)/2)+'px #000000'
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
