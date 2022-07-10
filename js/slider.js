$(".slider__box").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});

document.querySelectorAll(".slick-arrow").forEach((btn) => {
  btn.textContent = "";
});
