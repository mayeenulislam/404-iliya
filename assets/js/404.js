/**
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * CONCEPT AND CODE COPIED FROM https://passwork.me/oops
 * For educational purpose only
 *
 * @author Iliya Garakh
 *
 * I'm not the code author, and not an affiliate
 *
 * You can learn and share this code with this notice and disclaimer intact
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

jQuery(document).ready(function($) {
	var a = function(){
        	$(".content_text p span.flash")
                .animate({'font-size' : 0, 'opacity' : 0}, 300, function(){
                    $(this).remove();
                });
        var random = Math.round(Math.random()*30),
        	len = 3,
        	p = $(".content_text p").eq(random);

        random = Math.round(Math.random()* p.text().length) + 1;

        var left = p.text().substring(0, random - len),
        	text = '404', //p.text().substring(random, random + len);
        	right = p.text().substring(random + len),
        	html = left + '<span class="flash">' + text + '</span>' + right;

        p.html(html).addClass('flash');
    };

    setInterval(a, 1400);
    setInterval(a, 1300);
    setInterval(a, 1200);
});
