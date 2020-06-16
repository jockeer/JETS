
var app = {


    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // document.getElementById('btnIngresar').addEventListener('click',buscarUsuario,false);

        // function buscarUsuario(){
        //     $.ajax({
        //         type: "GET",
        //         url: `https://jets2020.herokuapp.com/api/verificarUsuario/dan/123`,
        //         crossDomain: true,
        //         cache: false,
        //         success: function(result){
        //             alert(`hola ${result.data[0].nombre} ${result.data[0].apellido}`);
        //         },
        //         error: function(result){
        //             alert('no funciona');
        //         }
        //     });
        // }

    },
    
    receivedEvent: function(id) {
       
    }
};

app.initialize();