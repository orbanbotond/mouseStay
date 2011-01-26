(function( $ ){
  $.fn.mouseStay = function( options ) {
    var settings = {
      // The handler will start if the mouse stays more than the specified milliseconds inside that element
      delayTime : 800,
      handler: function(){}
    };

    return this.each(function() {
      if(this.mouseStayScheduledHandler){
        clearTimeout(this.mouseStayScheduledHandler);
      }

      //TODO unbind the already bound mousehandlers

      if ( options ) {
        $.extend( settings, options );
      }

      $(this).mousemove( function(event){
        var _this = this;
        if(this.mouseStayScheduledHandler){
          clearTimeout(this.mouseStayScheduledHandler);
        }
        this.mouseStayScheduledHandler = setTimeout(function(){ 
            settings.handler.call(_this);
          }, settings.delayTime);
      });

      $(this).mouseleave(function(){
        if(this.mouseStayScheduledHandler){
          clearTimeout(this.mouseStayScheduledHandler);
        }
      });
    });
  };
})( jQuery );
