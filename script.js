// Your JS goes here
// **Hints**

// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

(function() {

  function rndClrNumGen() {
    return Math.floor(Math.random() * 256);
  }
  var rndmClrNums = [];

  for (var j = 0; j < 6; j++) {
    rndmClrNums[j] = rndClrNumGen();
  }

  console.log(rndmClrNums);

  var body = document.querySelector('body');

  function divCreatorBlack() {
    var newDiv = document.createElement('div');
    newDiv.style.width = "11.1%";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = "rgb(" + rndmClrNums[0] + "," + rndmClrNums[1] + "," + rndmClrNums[2] + ")";
    return body.appendChild(newDiv);
  }

  function divCreatorRed() {
    var newDiv2 = document.createElement('div');
    newDiv2.style.width = "11.1%";
    newDiv2.style.paddingBottom = "11.1%";
    newDiv2.style.cssFloat = "left";
    newDiv.style.backgroundColor = "rgb(" + rndmClrNums[3] + "," + rndmClrNums[4] + "," + rndmClrNums[5] + ")";
    return body.appendChild(newDiv2);
  }

  (function createBoard() {

  for (var i = 0; i < 40; i++) {
    divCreatorBlack();
    divCreatorRed();
  }
  divCreatorBlack();

})();









})();