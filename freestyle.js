$(document).ready(function() {
  var engine = Random.engines.mt19937().autoSeed();
  concepts = ["drawing circles", "drawing squares", "drawing polygons", "drawing 3D shapes", "using driving imagery",
  "using plane imagery", "acting drunk", "acting high", "acting like a dragon", "acting like a teammate",
  "acting like a famous dancer", "acting like your team coordinator", "acting like a spider", "acting like a monkey",
  "acting like a chicken", "acting like a bird", "acting like a cat", "acting like a dog", "creating mountain imagery",
  "using water imagery", "using fire imagery", "using earth imagery", "acting like you're skydiving","pretending to fight an animal",
  "pretending to defend yourself", "pretending to be waiting in line", "pretending to eat a burger", "pretending to eat a messy taco",
  "pretending to eat a hotdog", "pretending to play basketball", "pretending to play baseball", "pretending like you're hurt",
  "pretending to be a magician", "pretending to be absorbed in a book", "acting like a fish", "acting like a whale",
  "acting like a superhero", "acting like an Avenger", "acting like a Youtuber", "acting like a celebrity",
  "pretending to drink boba", "using space/galaxy imagery", "using jewlery imagery"]
  shapes = ["your head","your elbows","your heels","your hands","your feet","your knees","your hips",
  "your shins","your biceps","your shoulders","your neck","your wrists","your chest","your knees", "your waist",
  "your thighs","your toes","your fingers","threading","tutting","weight transfers","an imaginary sword",
  "an imaginary ball","an imaginary staff", "an imaginary backpack",
  "an imaginary tanktop", "an imaginary scarf", "your shirt", "a hat", "your pants", "your shoes", "your socks",
  "your hair", "waves","popping","footwork","house","vogue","krump","weight transfers","energy transfers","polyrhythms",
  "lines","jumps","levels","floorwork"]
  textures = ["being sharp", "being quick", "being slow", "milking", "being sexy", "being smooth", "using wordplay",
  "grooving", "expressing anger", "using dime stops", "expressing sadness", "expressing happiness", "expressing fatigue", "not moving your elbows",
  "not moving your knees", "not moving your shoulders", "not changing your level", "not going to your safe move", "facing back the entire time",
  "incorporating popular social dances", "incorporating a move from your favorite set", "having all limbs on the floor the entire time",
  "telling a popular bedtime story", "telling a heartbreak story", "telling a movie plot", "bouncing the entire time", "using speed control",
  "being off the ground as much as possible", "crawling", "running"]
  $('#concept').html(concepts[Random.integer(0,concepts.length-1)(engine)]);
  $('#shape').html(shapes[Random.integer(0,shapes.length-1)(engine)]);
  $('#texture').html(textures[Random.integer(0,textures.length-1)(engine)]);

  $("#randomize").click(function() {
    $('#concept').html(concepts[Random.integer(0,concepts.length-1)(engine)]);
    $('#shape').html(shapes[Random.integer(0,shapes.length-1)(engine)]);
    $('#texture').html(textures[Random.integer(0,textures.length-1)(engine)]);
  });
});
