$(function() {
    $('.jcarousel')
    	.on('jcarousel:create jcarousel: reload', function(){
    		var element = $(this),
    		width = element.innerWidth();
    		element.jcarousel('items').css('width', width + 'px');
    	})
		
		.jcarousel({
        // Configuration goes here
     
     
        list: '.jcarousel-list',
        animation: 'slow',
        wrap: 'circular',
        transitions: true
    })
	.jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;
})