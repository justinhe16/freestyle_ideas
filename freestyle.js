$(document).ready(function() {
  concepts = ["jumps","footwork","tutting","popping","waves","weight transfers","transferring an imaginary object","transferring energy","controlling everything with a single body part","floorwork","polyrhythms"]
  shapes = ["head","elbows","heels","hands","feet","knees","hips","shins","biceps","shoulders","neck","wrists","chest","waist","thighs","toes","fingers"]
  textures = ["sass","circularity","sharpness","agility","milkiness","smoothness","wordplay","grooves","an inner bounce","the idea of floating","groundedness","anger","sadness","happiness","boredom"]
  $('#concept').html(concepts[Math.floor((Math.random() * concepts.length))]);
  $('#shape').html(shapes[Math.floor((Math.random() * shapes.length))]);
  $('#texture').html(textures[Math.floor((Math.random() * textures.length))]);

  $("#randomize").click(function() {
    $('#concept').html(concepts[Math.floor((Math.random() * concepts.length))]);
    $('#shape').html(shapes[Math.floor((Math.random() * shapes.length))]);
    $('#texture').html(textures[Math.floor((Math.random() * textures.length))]);
  });
});
