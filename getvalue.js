let search=document.getElementById('search');
let result=document.getElementById('result');
const form=document.getElementsByTagName('form')[0];

// function stop(params) {
//     params.preventDefault();
// }

search.addEventListener('keyup',(function(e){
    console.log(e.target);
    if(e.key=="Enter"){
        alert('ok');
        console.log(search.value);
        e.preventDefault();
    }
}));

// search.addEventListener('keydown',(function(e){
//     console.log(e.target);
//     result.textContent=search.value;

// }));

// window.addEventListener('keydown',function(e){
//     if(e.key=="Enter"){
//         alert('ok');
//         console.log(search.value);
//         e.preventDefault();
//     }
// });

// function fun() {
//     result.innerHTML=search.value;
// }

// search.addEventListener('click',fun);