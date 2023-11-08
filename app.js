const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

      toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });



var images = ".image-container",
  slide = $(images + " img").innerWidth();

function append() {
  $(images + " img")
    .first()
    .appendTo($(images));
}
function prepend() {
  $(images + " img")
    .last()
    .prependTo($(images));
}

$(".prev").click(function () {
  prepend();
});
$(".next").click(function () {
  append();
});
