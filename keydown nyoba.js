let input=document.getElementById('input');
let teks=document.getElementsByClassName('teks')[0];

input.addEventListener('keyup',function(e){
    teks.innerText=input.value;
});