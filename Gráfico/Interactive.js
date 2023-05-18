function changeNumbers(button) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
  
    var targetNumbers;
    if (button === 'A') {
      targetNumbers = [1000, 150, 100, 180];
    } else if (button === 'B') {
      targetNumbers = [1200, 160, 120, 200];
    } else if (button === 'C') {
      targetNumbers = [1300, 180, 140, 240];
    } else if (button === 'D') {
      targetNumbers = [1400, 200, 200, 250];
    } else if (button === 'E') {
      targetNumbers = [1500, 210, 210, 260];
    } else if (button === 'F') {
      targetNumbers = [2000, 240, 220, 280];
    } else if (button === 'G') {
      targetNumbers = [4100, 260, 250, 290];
    }
  
    animateNumber(box1, targetNumbers[0]);
    animateNumber(box2, targetNumbers[1]);
    animateNumber(box3, targetNumbers[2]);
    animateNumber(box4, targetNumbers[3]);
  }
  
  function animateNumber(element, targetNumber) {
    var currentNumber = parseInt(element.innerHTML);
    var increment = (targetNumber - currentNumber) / 100;
    var counter = setInterval(function() {
      currentNumber += increment;
      element.innerHTML = Math.round(currentNumber);
      if (increment > 0 && currentNumber >= targetNumber) {
        clearInterval(counter);
      } else if (increment < 0 && currentNumber <= targetNumber) {
        clearInterval(counter);
      }
    }, 10);
  }
  
  