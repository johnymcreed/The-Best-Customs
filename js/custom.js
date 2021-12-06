         document.addEventListener('contextmenu', event => event.preventDefault());
         document.onkeydown = function(e) {
            if(event.keyCode == 123) {
               return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
               return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
               return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
               return false;
            }
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
               return false;
            }
         }


(function( d ) {
   'use strict';
   var element = d.getElementById( 'cookie-banner' );
       element.classList.add( localStorage.getItem( 'cookie-btn' ) );
       element.addEventListener( 'click',
         function(){
                     localStorage.setItem( 'cookie-banner', 'hide' );
                   }, false);
}( document )); 
