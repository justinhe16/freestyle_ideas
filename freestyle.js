$(document).ready(function() {
  concepts = ["drawing circles", "drawing squares", "drawing polygons", "drawing 3D shapes", "using driving imagery",
  "using plane imagery", "acting drunk", "acting high", "acting like a dragon", "acting like a teammate",
  "acting like a famous dancer", "acting like your team coordinator", "acting like a spider", "acting like a monkey",
  "acting like a chicken", "acting like a bird", "acting like a cat", "acting like a dog", "creating mountain imagery",
  "using water imagery", "using fire imagery", "using earth imagery", "acting like you're skydiving","pretending to fight an animal",
  "pretending to defend yourself", "pretending to be at Starbucks waiting", "pretending to eat a burger", "pretending to eat a messy taco",
  "pretending to eat a hotdog", "pretending to play basketball", "pretending to play baseball", "pretending like you're hurt"]
  shapes = ["your head","your elbows","your heels","your hands","your feet","your knees","your hips",
  "your shins","your biceps","your shoulders","your neck","your wrists","your chest","your knees", "your waist",
  "your thighs","your toes","your fingers","threading","tutting","weight transfers","an imaginary sword",
  "an imaginary ball","an imaginary staff", "an imaginary backpack","an imaginary Rubik's cube",
  "an imaginary tanktop", "an imaginary scarf", "your shirt", "a hat", "your pants", "your shoes", "your socks",
  "your hair", "waves","popping","footwork","house","vogue","krump","weight transfers","energy transfers","polyrhythms",
  "lines","jumps","levels","floorwork"]
  textures = ["being sharp", "being quick", "being slow", "milking", "being sexy", "being smooth", "using wordplay",
  "grooving", "expressing anger", "expressing sadness", "expressing happiness", "expressing fatigue", "not moving your elbows",
  "not moving your knees", "not moving your shoulders", "not changing your level", "not going to your safe move", "facing back the entire time",
  "incorporating popular social dances", "incorporating a move from your favorite set", "having all limbs on the floor the entire time",
  "telling a popular bedtime story", "telling a heartbreak story", "telling a movie plot", "bouncing the entire time", "using speed control",
  "being off the ground as much as possible", "crawling", "running"]
  //  not moving your ___ (limits)
  // incorporating popular social dances
  $('#concept').html(concepts[Math.floor((Math.random() * concepts.length))]);
  $('#shape').html(shapes[Math.floor((Math.random() * shapes.length))]);
  $('#texture').html(textures[Math.floor((Math.random() * textures.length))]);

  $("#randomize").click(function() {
    shuffleArray(concepts);
    shuffleArray(shapes);
    shuffleArray(textures);
    $('#concept').html(concepts[Math.floor((Math.random() * concepts.length))]);
    $('#shape').html(shapes[Math.floor((Math.random() * shapes.length))]);
    $('#texture').html(textures[Math.floor((Math.random() * textures.length))]);
  });

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
});
