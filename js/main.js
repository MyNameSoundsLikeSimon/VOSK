$(document).ready(function(){
   
    var scrollToTop = function () {
        var offset = $('body').scrollTop();
        var tId = arguments[0];
        var decrement = arguments[1] || 50;
        var timeToCall = arguments[2] || 10;

        if (offset <= 0) {
            clearTimeout(tId);
            return;
        }
        tId = setTimeout(function () {
            $('body').scrollTop(offset - decrement);
            scrollToTop(tId, decrement, timeToCall);
        }
        , timeToCall);
    };
    
    $(document).scroll(function () {
        $(this).scrollTop() > 300 ? $('.scroller').show() : $('.scroller').hide();
    });

    $('.scroller').click(function () { scrollToTop(); });
});