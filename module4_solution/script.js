// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

(function(){
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  
  // for (var i = 0; i < names.length; i++) {
  //   if (i == 1 || i == 2 || i == 3 || i == 9) {
  //     byeSpeaker.speak(names[i]);
  //   } else if (i == 0 || 3 < i < 9) {
  //     helloSpeaker.speak(names[i]);
  //   }
  for (var i = 0; i < names.length; i++) {
      
  var firstLetter = names[i].charAt(0).toLowerCase();
  
  if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  
  })();