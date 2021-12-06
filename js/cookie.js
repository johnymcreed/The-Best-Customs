(function( d ) {
   'use strict';
   var element = d.getElementById( 'cookie-banner' );
       element.classList.add( localStorage.getItem( 'remove-cookie' ) );
       element.addEventListener( 'click',
         function(){
                     localStorage.setItem( 'remove-cookie', 'hide' );
                   }, false);
}( document )); 
