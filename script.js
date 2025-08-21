let btn = document.querySelector('.btn')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let h1 = document.querySelector('h1')
let inp = document.querySelector('.inp')
let inp1 = document.querySelector('.inp1')



plus.addEventListener('click', ()=> {
    h1.textContent++
})
minus.addEventListener('click', ()=> {
    h1.textContent--
})

btn.addEventListener('click' ,()=> {
    h1.textContent = inp.value
})


