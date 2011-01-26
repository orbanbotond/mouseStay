A jquery extension for handling the mouse Stay In
=================================================

Requirements
------------
- jquery

What is it for
--------------
Whenever you want to check that the mouse pointer stay in a place without moving more than a specified milisecs.

All you need to do is
---------------------

    $(".selectable").mouseStay( { handler : function(){
      console.debug("Mouse Stayed In for more than 800 milisec");
      //this references the dom element within which the mouse stayed more than xxx milisec.
      console.debug(this);    
    }, delayTime : 800} );

After leaving the mouse intact for more than 800 milisecs on an element with 'selectable' class in you firebug console the messages should appear. 