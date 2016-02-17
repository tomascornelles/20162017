var $;

$(function () {
  historia.scrolling();
});

var historia = {
  scrolling: function () {
    var scrollTemp = $('body').scrollTop();
    var paginaTemp = Math.floor($('body').scrollTop() / $(window).height());

    $(window)
      .on('scrollstart', function () {
        var scrollNew = $('body').scrollTop();

        if (scrollNew > scrollTemp) {
          scrollNew = undefined;
          paginaTemp += 1;

          $('body').animate({
            scrollTop: $(window).height() * paginaTemp },
            '500',
            'swing',
            function () {
              scrollTemp = $('body').scrollTop();
            });
        } else if (scrollNew < scrollTemp) {
          scrollNew = undefined;
          paginaTemp -= 1;

          $('body').animate({
            scrollTop: $(window).height() * paginaTemp },
            '500',
            'swing',
            function () {
              if (paginaTemp < 0) paginaTemp = 0;
              scrollTemp = $('body').scrollTop();
            });
        }
      })
      .on('scrollstop', function () {
        console.log('termina Scroll');
      });
  }
};
