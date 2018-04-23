var promo_count = 1;
var promo_max;

$(document).ready(function() {

	if ($("#now-text").length > 0) {
		promo_max = $("#now-text > div").size();
		setTimeout(function() { next_promo(); }, 520);	
	}	
	
});

function next_promo() {
		
	promo_count++;
	var next_div = $("#now-text-" + promo_count);
	var prev_div = $("#now-text-" + (promo_count - 1));
	
	if (promo_count > promo_max) {
		next_div = $("#now-text-1");
		promo_count = 1;	
	}
	
	$(next_div).css("top","65px");
	
	$(next_div).animate({top:0}, 300);
	$(prev_div).animate({top:'-65'}, 300);
	setTimeout(function() { next_promo(); }, 620);	
	
}