const $btnIngresar = document.getElementById('btnIngresar');
const $pantallaCarga = document.getElementById('pantallaCarga');
const $user = document.getElementById('user');
const $pass = document.getElementById('pass');


async function logear(nombreUsuario, passUsuario){
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaRoles= await getData(`https://jets2020.herokuapp.com/api/verificarUsuario/${nombreUsuario}/${passUsuario}`);
    // const $listaRoles= await getData(`http://localhost:3000/api/obtenerUsuario/${nombreUsuario}/${passUsuario}`);
  alert(`hola ${$listaRoles.data[0].nombre}`)
    if($listaRoles.data.length != 0){
        alert(`Bienvenido ${$listaRoles.data[0].nombre}`)
        sessionStorage.setItem('nombre',`${$listaRoles.data[0].nombre} ${$listaRoles.data[0].apellido}`);
        sessionStorage.setItem('idUsuario',`${$listaRoles.data[0].id}`);
        sessionStorage.setItem('registro',`${$listaRoles.data[0].registro}`);
        sessionStorage.setItem('rol',`${$listaRoles.data[0].rol}`);
        location.href='menu.html';
    }else{
        alert(`Usuario o contraseña Incorrectos`)
    }
    
}

$btnIngresar.addEventListener('click',()=>{
    // console.log($user.value,$pass.value)
    logear($user.value, $pass.value)

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