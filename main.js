var CONTAINER_PADDING_HALF = "0.5em";

var nav = document.getElementById("js-nav");
var pointer = document.getElementById("js-pointer");
var links = nav.getElementsByTagName("a");

pointer.style.width =
  "calc(100% /" + links.length + " - " + CONTAINER_PADDING_HALF + ")";

for (var i = 0; i < links.length; i++) {
  var current = links[i];
  current.dataset.order = i * 100 + "%";
  current.addEventListener("click", movePointer);
}

function movePointer(e) {
  var order = e.currentTarget.dataset.order;
  pointer.style.transform = "translate3d(" + order + ",0,0)";
}


setInterval(function () {
  const show = document.querySelector("span[data-show]");
  const next =
    show.nextElementSibling || document.querySelector("span:first-child");
  const up = document.querySelector("span[data-up]");

  if (up) {
    up.removeAttribute("data-up");
  }

  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  next.setAttribute("data-show", "");
}, 2000);
