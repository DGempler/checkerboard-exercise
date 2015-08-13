// Your JS goes here
// **Hints**

// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

(function() {


  var body = document.querySelector('body');

  function divCreatorBlack() {
    var newDiv = document.createElement('div');
    newDiv.style.width = "11.1%";
    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = "black";
    return body.appendChild(newDiv);
  }

  function divCreatorRed() {
    var newDiv2 = document.createElement('div');
    newDiv2.style.width = "11.1%";
    newDiv2.style.paddingBottom = "11.1%";
    newDiv2.style.cssFloat = "left";
    newDiv2.style.backgroundColor = "red";
    return body.appendChild(newDiv2);
  }

  for (var i = 0; i < 40; i++) {
    divCreatorBlack();
    divCreatorRed();
  }
  divCreatorBlack();










})();