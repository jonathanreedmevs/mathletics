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

  let totals = {
    Football: 0,
    Baseball: 0,
    Basketball: 0,
    Soccer: 0,
    Swimming: 0,
    Tennis: 0,
    Track: 0,
    Lacrosse: 0,
    Other: 0
  }
  fire.collection("Survey Entries").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());

        let sportsPlayed = doc.data()["Sports Played"];

        for(var i = 0; i < sportsPlayed.length; i++){
          if(sportsPlayed[i] === "Football"){
            totals['Football']++;
          }
          else if(sportsPlayed[i] === "Baseball"){
            totals['Baseball']++;
          }
          else if(sportsPlayed[i] === "Basketball"){
            totals['Basketball']++;
          }
          else if(sportsPlayed[i] === "Soccer"){
            totals['Soccer']++;
          }
          else if(sportsPlayed[i] === "Swimming"){
            totals['Swimming']++;
          }
          else if(sportsPlayed[i] === "Tennis"){
            totals['Tennis']++;
          }
          else if(sportsPlayed[i] === "Track"){
            totals['Track']++;
          }
          else if(sportsPlayed[i] === "Lacrosse"){
            totals['Lacrosse']++;
          }
          else{
            totals['Other']++;
          }
        }
    });
});
console.log(totals);
});

$('#getAspectTotals').submit(function(event){
  event.preventDefault();

  let totals = {
    Fun: 0,
    Competition: 0,
    Health: 0,
    Challenge: 0,
    Social: 0
  }

  fire.collection("Survey Entries").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let aspects = doc.data()["Asepct"];
      for(var i = 0; i < aspects.length; i++){
        if(aspects[i] === "Fun"){
          totals["Fun"]++;
        }
        else if(aspects[i] === "Competition"){
          totals["Competition"]++;
        }
        else if(aspects[i] === "Health"){
          totals["Health"]++;
        }
        else if(aspects[i] === "Challenge"){
          totals["Challenge"]++;
        }
        else{
          totals["Social"]++;
        }
      }
    });
});
console.log(totals);
});

$('#getSpecialTotals').submit(function(event){
  event.preventDefault();

  let totals = {
    Yes: 0,
    No: 0
  }

  fire.collection("Survey Entries").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
      let special = doc.data()["Special Treatment"];
      if(special === "Yes"){
        totals['Yes']++;
      }else{
        totals['No']++;
      }
    });
  });
  console.log(totals);
});
