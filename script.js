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




                                          //  Counter2 
// ----------------------------------------------------------------------------------------------
// Select Dom Element 
const counterEl2 = document.getElementById('counter2');
const incrementEl2 = document.getElementById('increment2');
const decrementEl2 = document.getElementById('decrement2');

// Set Initial State
let count2 = 0;


// Set EventListener 
incrementEl2.addEventListener('click', ()=> {
    count2++
    counterEl2.innerText = count2;
});

decrementEl2.addEventListener('click', ()=> {
    count2--
    counterEl2.innerText = count2;
});
