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

const btnCopyAll = document.querySelectorAll('.btn__copy');
btnCopyAll.forEach((btnCopy, btnIndex) => {
  btnCopy.addEventListener('click', ()=> {
    // document.querySelectorAll('.copied').forEach((copyItem, copyIndex) =>{
    //   if(btnIndex === copyIndex) {
    //     copyItem.style.display = 'block';


    alert('test copied!!!');


    //     setTimeout(dissapearText, 1000);
    //   }

    //   function dissapearText() {
    //     copyItem.style.display = 'none';
    //   }
      
    // })

    
    // function dissapearText() {
    //   document.querySelector('.swal2-container').style.display = 'none';
    //   // document.querySelector('.swal2-confirm').style.display = 'none';
    // }

    // setTimeout(dissapearText, 1500);

    // document.querySelector('.swal2-confirm').style.display = 'none';


    // Swal.fire({
    //   position: 'center',
    //   title: 'Скопійовано',
    //   background: 'rgba(0, 0, 0, 0.7)',
    //   color: '#EBE8E7',
    //   buttonsStyling: false
    // })

    // document.querySelector('.swal2-confirm').style.display = 'none';
    // const popupAlert = document.querySelector('.swal2-popup');
    // popupAlert.style.width = '18em';


    // const titleAlert = document.querySelector('.swal2-title');
    // titleAlert.style.fontSize = '16px';
    // titleAlert.style.fontWeight = '400';
    // titleAlert.style.padding = '10px 0 0 0';
  })
})
