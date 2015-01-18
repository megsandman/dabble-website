$(document).ready(function() {

  var myFirebaseRef = new Firebase("https://dabble-website.firebaseio.com/");

  $( ".email-submit" ).click(function() {
    var emailAddress = $(".email-form").val()
    console.log(emailAddress)

    myFirebaseRef.push({
      email: emailAddress,
      dateAdded: Date()
    });

    $(".email-form").val("")
  });




});