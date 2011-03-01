// A jquery extension for handling the mouse Stay In
// =================================================
// 
// Requirements
// ------------
// - jquery
// 
// What is it for
// --------------
// Whenever you want to check that the mouse pointer stay in a place without moving more than a specified milisecs.
// 
// All you need to do is
// ---------------------
// 
//     $(".selectable").mouseStay( { handler : function(){
//       console.debug("Mouse Stayed In for more than 800 milisec");
//       //this references the dom element within which the mouse stayed more than xxx milisec.
//       console.debug(this);    
//     }, delayTime : 800} );
// 
// After leaving the mouse intact for more than 800 milisecs on an element with 'selectable' class in you firebug console the messages should appear.
// 
// By Orban Botond @2011
// 
// http://orbanbotond.blogspot.com/
// 
(function( $ ){
  $.fn.mouseStay = function( options ) {
    var settings = {
      // The handler will start if the mouse stays more than the specified milliseconds inside that element
      delayTime : 800,
      handler: function(){}
    };

    return this.each(function() {
      if(typeof this.mouseStay_ScheduledHandlers == "undefined" ){
        this.mouseStay_ScheduledHandlers = $([]);
        this.mouseStay_Scheduls =$([]);
      }

      if ( options ) {
        $.extend( settings, options );
      }

      this.mouseStay_Scheduls = this.mouseStay_Scheduls.add(settings);

      $(this).mousemove( function(event){
        var _this = this;
        $(_this.mouseStay_ScheduledHandlers).each( function () {
          clearTimeout(this);
        });

        _this.mouseStay_ScheduledHandlers = $([]);

        _this.mouseStay_Scheduls.each( function () {
          var schedule = this;
          var timer = setTimeout( function(){
              schedule.handler.call(_this);
            }, schedule.delayTime);
          _this.mouseStay_ScheduledHandlers = _this.mouseStay_ScheduledHandlers.add( timer);
        });
      });
        
      $(this).mouseleave(function(){
        $(this.mouseStay_ScheduledHandlers).each( function () {
          clearTimeout(this);
        });
      });
    });
  };
})( jQuery );
