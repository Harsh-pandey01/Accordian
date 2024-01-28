let accordians = document.querySelectorAll('.accordian')

accordians.forEach((accordian)=>{
  let answer = accordian.querySelector('.answer')
  let icon = accordian.querySelector('.icon')
  accordian.addEventListener('click',()=>{
    answer.classList.toggle('active')
    icon.classList.toggle('iactive')
  })
    
})