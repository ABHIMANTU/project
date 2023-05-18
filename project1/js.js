const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    const table = document.querySelector('table');

    table.className = 'table';    
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener('click', function(){
    const table = document.querySelector('table');
    table.classList.remove('table');
});

const btn3 = document.querySelector('#new');
btn3.addEventListener('click',function(){
    const box = document.querySelector('td');
    box.id = 'td';
});