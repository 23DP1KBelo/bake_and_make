const submit = document.querySelector('input.button')
submit.addEventListener('click', e =>{
  const form = document.forms['form']
  const required = form.querySelectorAll('input.required')
  required.forEach((ele, i) => {
    if(required[i].value === ''){
      const errorMassege = required[i].previousSibling.previousSibling
      if(errorMassege){
        errorMassege.style.display = 'block'
        return false
      }else{
        errorMassege.style.display = 'none'
      }
      e.preventDefault
    }
    return true
  })
})

const catFact = document.getElementById('catfact')
console.log(catFact.innerHTML)

  function catFactFetch() {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
        .then((json) => {
          console.log(json.fact)
          catFact.innerHTML = JSON.stringify(json.fact)
    })
  }

catFactFetch()
