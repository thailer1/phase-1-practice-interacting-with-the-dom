document.addEventListener("DOMContentLoaded", (event) => {
    intervalId = setInterval(startCount,1000)
});
let intervalId;

let counter = document.getElementById('counter');
let  minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let submit = document.getElementById('comment-form');
let heart = document.getElementById('heart');
let pause =document.getElementById('pause');
let reset = document.getElementById('reset')
let likes = document.querySelector('.likes');


let count = parseInt(counter.textContent);

function startCount(){ 
    counter.innerHTML = count++ 
}
plus.addEventListener('click',() =>{
    counter.innerHTML = count++ 
} )

minus.addEventListener('click', () =>{
    counter.innerHTML = count-- 
} )

pause.addEventListener('click',() => {
        clearInterval(intervalId)})
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled
        if(myInterval){
            clearInterval(intervalId);
            intervalId = null
        }else {
            intervalId =  setInterval(counter, 1000)
        }
        if(e.target.innerText === 'pause'){
            e.target.innerText = 'resume'
        }else {
            e.target.innerText = 'pause'
        }
    

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = e.target.comment.value
    let list = document.getElementById('list')
    list.appendChild(li)        
})       
heart.addEventListener('click',() => {
    let li = document.createElement('li')
    li.innerHTML= `${counter.innerHTML} has been liked`
    likes.appendChild(li)
})

reset.addEventListener('click', () => {
counter.innerHTML = setTimeout(clearInterval,1000)
})



