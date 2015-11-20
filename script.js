  // Your JS goes here
// **Hints**

// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

(function() {


  var body = document.querySelector('body');

  var baseColorOne = 20;

  var baseColorTwo = 30;

  var baseClrNumGen = function(row) {
    return baseColorOne + (7 * row);
  };

  var rowGenerator = function(rowNumber) {
    var row = rowNumber;

    return baseClrNumGen(row);
  };


  function divCreatorOne(color) {
    var newDiv = document.createElement('div');
    newDiv.style.width = "11.1%";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = "rgb(" + color + "," + color + ",243)";
    return body.appendChild(newDiv);
  }

  function divCreatorTwo(color) {
    var newDiv2 = document.createElement('div');
    newDiv2.style.width = "11.1%";
    newDiv2.style.paddingBottom = "11.1%";
    newDiv2.style.cssFloat = "left";
    newDiv2.style.backgroundColor = "rgb(" + color + "," + color + ",20)";
    return body.appendChild(newDiv2);
  }

   for (var i = 0; i < 31; i++) {
    divCreatorOne(baseClrNumGen(i));
    divCreatorTwo(baseClrNumGen(i));
    }
    divCreatorOne(baseClrNumGen(i));



})();