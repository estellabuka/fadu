  // button see more


  const btnMoreBox = document.querySelectorAll('.show__more');
  
  btnMoreBox.forEach((btnMore, btnMoreIndex) => {
      btnMore.addEventListener('click', ()=>{
        
        const textArray = document.querySelectorAll('.hide__text');

        textArray.forEach((text, textIndex)=> {
          if(btnMoreIndex === textIndex){
            
            text.classList.toggle('show__text');
            
          }
        })

      })
  })

// btn donut


const btnDonutAll = document.querySelectorAll('.btn__donut');
console.log(btnDonutAll);

btnDonutAll.forEach(btnDonut => {
  btnDonut.addEventListener('click', ()=>{
    console.log('test')
  })
})


