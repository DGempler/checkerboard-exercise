// Your JS goes here
// **Hints**

// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

(function() {


  var body = document.querySelector('body');

  var baseColor1 = 20;

  var baseColor2 = 20;

  var baseClrNumGen = function() {
    return baseColor1 += 10;
  };

  var baseClrNumGen2 = function() {
    return baseColor2 += 10;
  };

  var row1colors = [];
  var row2colors = [];

  for (var i = 0; i < 5; i++) {
    row1colors[i] = baseClrNumGen();
  }

  for (var i = 0; i < 4; i++) {
    row2colors[i] = baseClrNumGen2();
  }

  function divCreatorBlack(rownumber) {
    var newDiv = document.createElement('div');
    newDiv.style.width = "11.1%";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = "rgb(" + rownumber + ",23,243)";
    return body.appendChild(newDiv);
  }

  function divCreatorRed(rownumber) {
    var newDiv2 = document.createElement('div');
    newDiv2.style.width = "11.1%";
    newDiv2.style.paddingBottom = "11.1%";
    newDiv2.style.cssFloat = "left";
    newDiv2.style.backgroundColor = "rgb(" + rownumber + ",24,20)";
    return body.appendChild(newDiv2);
  }

  for (var k = 0; k < 5; k++) {
    for (var j = 0; j < 4; j++) {
      divCreatorBlack(row1colors[k]);
      divCreatorRed(row2colors[k]);
    }
    divCreatorBlack(row1colors[k]);
    for (var l = 1; l < 4; l++) {
      divCreatorRed(row2colors[k]);
      divCreatorBlack(row1colors[k]);
    }
    divCreatorRed(row2colors[k]);
  }



})();