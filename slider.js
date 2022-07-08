// const back = document.querySelector('#back');
// const next = document.querySelector('#next');

// let photos = ['img/slider/img1.jpg', 'img/slider/img2.jpg', 'img/slider/img3.jpg', 'img/slider/img4.jpg', 'img/slider/img5.jpg'];

// let i =0;

// next.addEventListener('click', ()=>{
//     i++;
//     if(i > photos.length - 1) {
//         i = 0;
//     }
//     document.querySelector('#pictures').src = photos[i];
// })

// back.addEventListener('click', ()=>{
//     i--;
//     if (i<0) {
//         i = photos.length - 1;
//     }
//     document.querySelector('#pictures').src = photos[i];
// })

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

  
