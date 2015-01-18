$(document).ready(function() {

  var myFirebaseRef = new Firebase("https://dabble-website.firebaseio.com/");

  $( ".email-submit" ).on( "click", function( event ) {
    console.log('worked')
  });
});