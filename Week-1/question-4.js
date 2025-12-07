let current = document.getElementById('curent')
//  
let increse = document.getElementById('increase')
let derease = document.getElementById('derease')
let reset = document.getElementById('reset')
let num;


// this part increase number
let o = increse.addEventListener('click',()=>{
num = Number(current.innerHTML) +1;
current.innerHTML = num;
})


// this part decrese number
derease.addEventListener('click', ()=>{
   num = Number(current.innerHTML) -1;
   current.innerHTML = num;
})

//  this reset function is for ....
reset.addEventListener('click', demo)
function demo(){
   current.innerHTML = 0
}
