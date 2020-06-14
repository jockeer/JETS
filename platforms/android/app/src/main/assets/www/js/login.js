const $btnIngresar = document.getElementById('btnIngresar');
const $pantallaCarga = document.getElementById('pantallaCarga');

$btnIngresar.addEventListener('click',()=>{
    location.href='menu.html';
});

$pantallaCarga.addEventListener('animationend',()=>{
    $pantallaCarga.classList.remove('active')
});
// const V = [34,24,57,55,766,343,56,1,34,0];


// function cambiar(num1,num2){

//     let aux = V[num1] 
//     V[num1] = V[num2] 
//     V[num2] = aux 

//     console.log(V)
//     debugger
// }
// (function ordernar(){

//     for (let i = 1; i < V.length; i++) {

//         let p = i
//         let pos = i-1 
//         let aux = V[i]; 

//         while (V[pos] >= 0 && V[pos] > aux) {
//             cambiar(p, pos)
//             p--;        
//             pos--;
        
//         }
//     }
// })();