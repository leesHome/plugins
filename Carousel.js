(function($){
	var slide = {
		init: function(){
			this.auto();
		},
		auto: function(){
			var $ul;
			var $lis;
			widths = $lis.eq(0).width();
			setInterval(function(){
				$ul.animate({'margin-left': '-'+ width + 'px'}, 'slow', function(){
					$ul.css({'margin-left': 0}).children('li').last().after($ul.children('li').first())
				})
			}, 1000)
		}
	}
	$(function(){slide.init();})
})(jquery)












