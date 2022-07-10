$('.slider__box').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

//   console.dir(document.querySelectorAll('.slick-arrow'));
document.querySelectorAll('.slick-arrow').forEach(btn => {
    btn.textContent = '';
})

  
