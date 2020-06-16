const $btnVerificar = document.getElementById('btnVerificar')
const $registro = document.getElementById('registro')
const $nombre = document.getElementById('nombre')
const $apellido = document.getElementById('apellido')
const $ci = document.getElementById('ci')
const $palabra = document.getElementById('palabra')

async function verificarRegistro(registro){
    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaRoles= await getData(`https://jets2020.herokuapp.com/api/verificarRegistro/${registro}`);
    // const $listaRoles= await getData(`http://localhost:3000/api/obtenerUsuario/${nombreUsuario}/${passUsuario}`);
    if($listaRoles.data.length != 0){
        $nombre.value = $listaRoles.data[0].nombre
        $apellido.value = $listaRoles.data[0].apellido
        $ci.value = $listaRoles.data[0].ci
        $palabra.textContent = 'Si'
    }else{
        $palabra.textContent = 'No'
    }
    
}

$btnVerificar.addEventListener('click',()=>{
    // console.log($user.value,$pass.value)
    verificarRegistro($registro.value)

});