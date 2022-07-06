  // button see more


  const btnMoreBox = document.querySelectorAll('.show__more');
  
  btnMoreBox.forEach((btnMore, btnMoreIndex) => {
      btnMore.addEventListener('click', ()=>{
        
        const textArray = document.querySelectorAll('.hide__box');

        textArray.forEach((text, textIndex)=> {
          if(btnMoreIndex === textIndex){
            
            text.classList.toggle('show__box');
            
          }
        })

      })
  })

// btn donut


const btnDonutAll = document.querySelectorAll('.js-btn__modal');

btnDonutAll.forEach(btnDonut => {
  btnDonut.addEventListener('click', ()=>{
    document.querySelector('.popup__none').style.display = 'flex';
    document.querySelector('body').classList.add('lock');
  })

  const btnClose = document.querySelector('.btn__close');
  btnClose.addEventListener('click', ()=> {
    document.querySelector('.popup__none').style.display = 'none';
    document.querySelector('body').classList.remove('lock');
  })
})


// btn copy

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
