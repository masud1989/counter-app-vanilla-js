// Select Dom Element 
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// Set Initial State
let count = 0;


// Set EventListener 
incrementEl.addEventListener('click', ()=> {
    count++
    counterEl.innerText = count;
});

decrementEl.addEventListener('click', ()=> {
    count--
    counterEl.innerText = count;
});
