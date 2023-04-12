$(() => {
  let gameStarted = false;
  $(document).ready(() => {
    $("#popup").show();
    $("#main").hide();
    
    


    $("#start-game").on("click", () => {
      console.log("button");
      $("#popup").hide();
      $("#main").show();

      const audio = new Audio("Music.mp3");

      audio.play();
      gameStarted = true;
    });
  });


  //car positioning for blue,yellow,pink and green

  var counter = 0;
  const $bluecar = $("#blue-car");
  const $redcar = $("#red-car");
  const $greencar = $("#green-car");
  const $pinkcar = $("#pink-car");
  const $yellowcar = $("#yellow-car");
  
  $bluecar.on("animationiteration", () => {
    let bluecarposition = [-23, -8, 8, 23];
    let random =
      bluecarposition[Math.floor(Math.random() * bluecarposition.length)];
    $bluecar.css("left", random + "%");
    counter++;
  });
  $greencar.on("animationiteration", () => {
    let greencarposition = [-23, -8, 8, 23];
    var random =
      greencarposition[Math.floor(Math.random() * greencarposition.length)];
    $greencar.css("left", random + "%");
    counter++;
  });
  $pinkcar.on("animationiteration", () => {
    let pinkcarposition = [-23, -8, 8, 23];
    var random =
      pinkcarposition[Math.floor(Math.random() * pinkcarposition.length)];
    $pinkcar.css("left", random + "%");
    counter++;
  });
  $yellowcar.on("animationiteration", () => {
    let yellowcarposition = [-23, -8, 8, 23];
    var random =
      yellowcarposition[Math.floor(Math.random() * yellowcarposition.length)];
    $yellowcar.css("left", random + "%");
    counter++;
  });

//keyboard left and right for red car

  $(document).keydown(function (e) {
    // Get the current position of the object
    var currentPos = parseInt($("#red-car").css("left"));

    var minPos = -140;
    var maxPos = 140;
    // Check which arrow key was pressed
    if (e.keyCode == 37 && currentPos > minPos) {
      // Left arrow key
      // Move the object left by 10 pixels
      $("#red-car").css("left", currentPos - 40);
    } else if (e.keyCode == 39 && currentPos < maxPos) {
      // Right arrow key
      // Move the object right by 10 pixels
      $("#red-car").css("left", currentPos + 40);
    }
  });


  //detection and scoring system
  let score = 0;
  let highScores = [];



  function detectCollision() {
    if (!gameStarted) {
      return;
    }
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

  
      const name = $("#name").val();
      highScores.push({ name: name, score: score });
      updateHighScores(highScores);
      alert(`Game Over! Your score is ${score}. Well done, ${name}!`);
   
      resetGame();
    }
    if (
      redcarPos.left < greencarPos.left + $greencar.width() &&
      redcarPos.left + $redcar.width() > greencarPos.left &&
      redcarPos.top < greencarPos.top + $greencar.height() &&
      redcarPos.top + $redcar.height() > greencarPos.top
    ) {

      const name = $("#name").val();
      highScores.push({ name: name, score: score });
      updateHighScores(highScores);
      alert(`Game Over! Your score is ${score}. Well done, ${name}!`);
      resetGame();
    }
    if (
      redcarPos.left < pinkcarPos.left + $pinkcar.width() &&
      redcarPos.left + $redcar.width() > pinkcarPos.left &&
      redcarPos.top < pinkcarPos.top + $pinkcar.height() &&
      redcarPos.top + $redcar.height() > pinkcarPos.top
    ) {

        const name = $("#name").val();
        highScores.push({ name: name, score: score });
        updateHighScores(highScores);
        alert(`Game Over! Your score is ${score}. Well done, ${name}!`);

        resetGame();
       
     
    }
    if (
      redcarPos.left < yellowcarPos.left + $yellowcar.width() &&
      redcarPos.left + $redcar.width() > yellowcarPos.left &&
      redcarPos.top < yellowcarPos.top + $yellowcar.height() &&
      redcarPos.top + $redcar.height() > yellowcarPos.top
    ) {
      const name = $("#name").val();
      highScores.push({ name: name, score: score });
      updateHighScores(highScores);
      alert(`Game Over! Your score is ${score}. Well done, ${name}!`);
      resetGame();
    } else if (
      bluecarPos.top > $redcar.height() &&
      greencarPos.top > $redcar.height() &&
      pinkcarPos.top > $redcar.height() &&
      yellowcarPos.top > $redcar.height()
    ) {
      score++;
      $("#score").text("Score: " + score);
    }
    
    



   
  }

  // function resetGame() {
  //   gameStarted = false;
  //   score = 0;
  //   $("#score").text(score);
  
  //   $bluecar.off("animationiteration");
  //   $redcar.off("animationiteration");
  //   $greencar.off("animationiteration");
  //   $pinkcar.off("animationiteration");
  //   $yellowcar.off("animationiteration");
  
  //   $bluecar.css("left", "-23%");
  //    $greencar.css("left", "8%");
  //   $pinkcar.css("left", "23%");
  //   $yellowcar.css("left", "-8%");
  
  //   $("#popup").show();
  //   $("#main").hide();
  // }



  // function resetGame() {
  //   score = 0;
  //   $("#score").text("Score: " + score);
  //   $bluecar.css("top" , "0%");
  //   $bluecar.css("left" , "-23%");
  //   $greencar.css("top" , "0%");
  //   $pinkcar.css("top" , "0%");
  //   $yellowcar.css("top" , "0%");
  //   $greencar.css("left", "8%");
  //   $pinkcar.css("left", "23%");
  //   $yellowcar.css("left", "-8%");
  //   $("#message").text("");
  //   const nameValue = $("#name").val();
  //   $("#name").val(nameValue);
    
  // }

  // function resetGame() {
  //   score = 0;
  //   $("#score").text("Score: " + score);
  //   $bluecar.css("top", "0%");
  //   $bluecar.css("left", "-23%");
  //   $greencar.css("top", "0%");
  //   $pinkcar.css("top", "0%");
  //   $yellowcar.css("top", "0%");
  //   $greencar.css("left", "8%");
  //   $pinkcar.css("left", "23%");
  //   $yellowcar.css("left", "-8%");
  //   $("#message").text("");
  //   const nameValue = $("#name").val();
  //   $("#name").val(nameValue);
  //   // Add animation class to all cars
  //   $("#blue-car").addClass("animate");
  //   $("#green-car").addClass("animate");
  //   $("#pink-car").addClass("animate");
  //   $("#yellow-car").addClass("animate");
  // }
  









  setInterval(detectCollision, 50);
  function updateHighScores(highScores) {
    // Sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    // Only keep top 5 high scores
    highScores = highScores.slice(0, 5);
  
    // Clear the previous high scores from the element
    $("#high-scores").empty();
  
    // Add a header for the high scores
    const $h2 = $('<h2>');
    $h2.text("High Scores");
    $("#high-scores").append($h2);
  
    // Add a row for each high score
    highScores.forEach((score, index) => {
      const name1 = score.name;
      const value = score.score;
      const $keepScore = $('<p>');
      $keepScore.attr("id", "keepscore");
      $keepScore.text(`${name1}: ${value}`);
      $("#high-scores").append($keepScore);
    });
  }


});

// function resetGame() {
//   gameStarted = false;
//   score = 0;
//   $("#score").text(score);

//   $bluecar.off("animationiteration");
//   $redcar.off("animationiteration");
//   $greencar.off("animationiteration");
//   $pinkcar.off("animationiteration");
//   $yellowcar.off("animationiteration");

//   $bluecar.css("left", "-23%");
//    $greencar.css("left", "8%");
//   $pinkcar.css("left", "23%");
//   $yellowcar.css("left", "-8%");

//   $("#popup").show();
//   $("#main").hide();
// }

