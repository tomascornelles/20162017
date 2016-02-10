$(function(){
	
	historia.scrolling();

});

var historia = {
	scrolling: function() {
		var scrollTemp = $('body').scrollTop();
		var paginaTemp = Math.floor($('body').scrollTop() / $(window).height());

		$(window).on('scroll', function() {
			var scrollNew = $('body').scrollTop();
			if (scrollNew > scrollTemp) {
				paginaTemp += 1;
				$('body').scrollTop($(window).height() * paginaTemp);
				scrollTemp = $('body').scrollTop();
			} else if (scrollNew < scrollTemp) {
				paginaTemp -= 1;
				$('body').scrollTop($(window).height() * paginaTemp);
				scrollTemp = $('body').scrollTop();
			}
		});
	}
}