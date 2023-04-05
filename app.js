$(() => {
const audio = new Audio("Music.mp3");
audio.play();});

$(() => {
  var counter = 0;
  const $bluecar = $("#blue-car");
  const $greencar = $("#green-car");
  const $pinkcar = $("#pink-car");
  const $yellowcar = $("#yellow-car");
  // let carposition = [-180, -60, 60, 180];
  // let random = carposition[(Math.floor(Math.random() * bluecarposition.length))];
  $bluecar.on("animationiteration", () => {
    let bluecarposition = [-180, -60, 60, 180];
    let random = bluecarposition[(Math.floor(Math.random() * bluecarposition.length))];
    $bluecar.css("left", random + "px");
    counter++;
  })
  $greencar.on("animationiteration", () => {
    let greencarposition = [-180, -60, 60, 180];
    var random = greencarposition[(Math.floor(Math.random() * greencarposition.length))];
    $greencar.css("left", random + "px");
    counter++;
  })
  $pinkcar.on("animationiteration", () => {
    let pinkcarposition = [-180, -60, 60, 180];
    var random = pinkcarposition[(Math.floor(Math.random() * pinkcarposition.length))];
    $pinkcar.css("left", random + "px");
    counter++;
  })
  $yellowcar.on("animationiteration", () => {
    let yellowcarposition = [-180, -60, 60, 180];
    var random = yellowcarposition[(Math.floor(Math.random() * yellowcarposition.length))];
    $yellowcar.css("left", random + "px");
    counter++;
  })

});


$(() => {
  const $redcar = $("#red-car");
  const $bluecar = $("#blue-car");

  $(document).keydown(function (e) {
    // Get the current position of the object
    var currentPos = parseInt($('#red-car').css('left'));
 
    var minPos = -240;
    var maxPos = 240;
    // Check which arrow key was pressed
    if (e.keyCode == 37 && currentPos > minPos) { // Left arrow key
      // Move the object left by 10 pixels
      $('#red-car').css('left', currentPos - 20);
    }
 
    else if (e.keyCode == 39 && currentPos < maxPos) { // Right arrow key
      // Move the object right by 10 pixels
      $('#red-car').css('left', currentPos + 20);
    }
  });

});

$(() => {
  const $redcar = $("#red-car");
  const $bluecar = $("#blue-car");
  const $greencar = $("#green-car");
  const $pinkcar = $("#pink-car");
  const $yellowcar = $("#yellow-car");
  let score = 0;

  function detectCollision() {
    const redcarPos = $redcar.offset();
    const bluecarPos = $bluecar.offset();
    const greencarPos = $greencar.offset();
    const pinkcarPos = $pinkcar.offset();
    const yellowcarPos = $yellowcar.offset();
    if (
      redcarPos.left < bluecarPos.left + $bluecar.width() &&
      redcarPos.left + $redcar.width() > bluecarPos.left &&
      redcarPos.top < bluecarPos.top + $bluecar.height() &&
      redcarPos.top + $redcar.height() > bluecarPos.top
    ) {
      alert(`Collision detected! Your score ${score}!! WELL DONE NOOB!`);
      location.reload();
    }
    if (
      redcarPos.left < greencarPos.left + $greencar.width() &&
      redcarPos.left + $redcar.width() > greencarPos.left &&
      redcarPos.top < greencarPos.top + $greencar.height() &&
      redcarPos.top + $redcar.height() > greencarPos.top
    ) {
      alert(`Collision detected! Your score ${score}!! WELL DONE NOOB green !`);
      location.reload();
    }
    if (
      redcarPos.left < pinkcarPos.left + $pinkcar.width() &&
      redcarPos.left + $redcar.width() > pinkcarPos.left &&
      redcarPos.top < pinkcarPos.top + $pinkcar.height() &&
      redcarPos.top + $redcar.height() > pinkcarPos.top
    ) {
      alert(`Collision detected! Your score ${score}!! WELL DONE NOOB Pink killed u!`);
      location.reload();
    }
    if (
      redcarPos.left < yellowcarPos.left + $yellowcar.width() &&
      redcarPos.left + $redcar.width() > yellowcarPos.left &&
      redcarPos.top < yellowcarPos.top + $yellowcar.height() &&
      redcarPos.top + $redcar.height() > yellowcarPos.top
    ) {
      alert(`Collision detected! Your score ${score}!! WELL DONE NOOB Yellow killed u!`);
      location.reload();
    }
    else if (bluecarPos.top > $redcar.height() && greencarPos.top > $redcar.height() && pinkcarPos.top > $redcar.height() && yellowcarPos.top > $redcar.height()) {
      score++;
      ($("#score").text("Score: " + score));

    }
  }

  setInterval(detectCollision, 50);
});