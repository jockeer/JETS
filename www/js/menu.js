const $hola = document.getElementById('hola');
const $tipoUsuario = document.getElementById('tipoUsuario');
const $conregistro = document.getElementById('conregistro');

$hola.textContent = sessionStorage.getItem('nombre');

$tipoUsuario.addEventListener('change',()=>{
    if($tipoUsuario.value == 'estudiante'){
        $conregistro.style.display = 'block'
    }else{
        $conregistro.style.display = 'none'      
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
