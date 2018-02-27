//business logic
function Ticket (movie, time, age){
  this.age = age;
  this.movie = movie;
  this.time= time;
}

var Ticket = function(display){
    for(i=1; i<=display; i++){

var inputtedTime = new Ticket ["18:00": 16, "20:00": 20, "22:00": 20, "00:00": 20]
  if(i % 16 === 0){
    return 16;
  } else {
    return 20;
  }

var inputtedMovie = new Ticket {"img/image1.jpg": 20, "img/image-2.jpg":20, "img/image-3.jpeg":20, "img/image-4.jpeg":20, "img/image-5.jpg": 30,"img/image-6.jpg":20 }
if(i % 30 === 0){
  return 30;
} else {
  return 20;
}
var inputtedAge = new Ticket{"6-18 years": 10, "18-60 yrs":10, "60+ yrs": 5}
if(i % 5 === 0){
  return 5;
}
else {
  return 10;
 }
};

var Total = function(inputtedMovie, inputtedTime, inputtedAge){
  return inputtedMovie + inputtedTime + inputtedAge;
};



//user interface logic
$(document).ready(function(){
  $("section.ticket").click(function(event){
    event.preventDefault();

    var inputtedMovie = $("nav.movieName").val(event);
    var inputtedTime = $("form.movieTime").val(event);
    var inputtedAge = $("form.movieAge").val(event);

    var Total = $("section.ticket").show();
    alert("You Pay: " + Total);

  });
});
