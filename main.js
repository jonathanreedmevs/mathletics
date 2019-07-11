// Target the form elements by their ids
// And build the form object like this using jQuery:

  // Then listen to the form submit event
  $('#myForm').submit(function(evt) {

    evt.preventDefault(); //Prevent the default form submit action

    var played = [];
    $.each($("input[name='sports']:checked"), function(){
        played.push($(this).val());
    });

    var organized = [];
    $.each($("input[name='organized']:checked"), function(){
        organized.push($(this).val());
    });

    var aspect = [];
    $.each($("input[name='aspect']:checked"), function(){
        aspect.push($(this).val());
    });

    var formData = {
        "Sports Played" : played,
        "Playing" : $('#playing').val(),
        "Watching" : $('#watching').val(),
        "Analyzing" : $('#analyzing').val(),
        "Organized" : organized,
        "Special Treatment" : $("input[name='special']:checked").val(),
        "Enjoyment" : $("input[name = 'enjoyment']:checked").val(),
        "Asepct" : aspect,
        "Shoesize" : $('#shoesize').val(),
        "Height Ft" : $('#heightFt').val(),
        "Height In" : $('#heightIn').val(),
        "Height Total In": (parseInt($('#heightFt').val() * 12)) + parseInt($('#heightIn').val())
      }

    fire.collection("Survey Entries").add(formData);

    $( '#myForm' ).each(function(){
        this.reset();
    });

  });

$('#getTotals').submit(function(event){
  event.preventDefault();
})
