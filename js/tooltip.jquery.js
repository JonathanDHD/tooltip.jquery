(function( $ ) {

    $.fn.makeToolTips = function() {
        this.each(function(){
            $(this).on('mouseover', showToolTip);
            $(this).on('mousemove', followMouse);
            $(this).on('mouseout', destroyToolTip);
        });        
    };

    var showToolTip = function(evt) {
    	var gTooltip = document.createElement('div');
    	$(gTooltip).attr('class', 'tooltip-container');
    	var text = document.createTextNode( $(this).attr('data-tooltip'));
    	gTooltip.appendChild(text);
    	document.body.appendChild(gTooltip);

        // TO POSITION ON POSTBACK
        followMouse(evt);
    };
 
    var destroyToolTip = function() {
        $('.tooltip-container').each(function() {
    		this.remove();
    	});
    };

    var followMouse = function (evt)
    {
    	var offset = $('body').offset();
		var x = evt.pageX - offset.left;
		var y = evt.pageY - offset.top;

        $(".tooltip-container").css("position", "absolute");
		$(".tooltip-container").css("top", y + 15);
    	$(".tooltip-container").css("left", x + 20);
    }
 
}( jQuery ));
