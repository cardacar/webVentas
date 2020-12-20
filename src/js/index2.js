window.addEventListener('load', function(){
    const imagen = document.getElementById('imagen');
    let arrImagenes = ['imagenes/4.jpg','imagenes/3.jpg','imagenes/2.jpg','imagenes/1.jpg']
    
    imagen.src =  arrImagenes[3];
    
    console.log('hola','mundo');
})