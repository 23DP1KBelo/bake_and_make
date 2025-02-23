fetch('http://89.250.69.87/api/fact').then(async response => {
  if(!response.ok) {
    alert('Failed to fetch data')
    return 0
  }
  const data = await response.json()
  document.getElementById('qoute').innerHTML = data.fact
})

// Navigations
const navigations = document.querySelectorAll('nav > div.link')
const sections = document.querySelectorAll('section, .bg-image')
navigations[0].querySelector(".romb").classList.add('active')
const main = document.querySelector('.container')

main.addEventListener('scroll', () => {
    let arr = []
    sections.forEach((section, index) => {
        var rect = section.getBoundingClientRect();
        navigations[index].querySelector(".romb").classList.remove('active')
        if (section.querySelector('h2') && section.querySelector('h2').getBoundingClientRect().bottom <= window.innerHeight || rect.bottom <= window.innerHeight) {
          arr.push(index)
        }
    })
    navigations[arr[arr.length - 1]].querySelector(".romb").classList.add('active')
})

//Validate email
const submit = document.getElementById('submit')
let text = document.getElementById('email-validation')
const email = document.getElementById('email')
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

submit.addEventListener('click', e =>{
  if(email.value === ''){
    text.innerHTML = 'Please put in a valid e-mail!'
    text.style.display = 'block'
  }else if(!emailPattern.test(email.value)){
    text.innerHTML = 'Please put in a valid e-mail!'
    text.style.display = 'block'
  }
  else{
    text.innerHTML = ''
    text.style.display = 'none'
    email.value = ''
  }
})