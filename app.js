let button = document.getElementById("button");
button.addEventListener("click", () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
  let container = document.getElementById("text");
    container.innerText = (`${bgColor}`);
});
