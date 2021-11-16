window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById('retroceder'); 
    let $botonAvanzar = document.getElementById('avanzar');
    let $imagen = document.getElementById('imagen');
    let $botonPlay = document.getElementById('play'); 
    let $botonStop = document.getElementById('stop');

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {

        if(posicionActual == IMAGENES.length-1){
            posicionActual = 0;
            renderizarImagen();
        }else{
            posicionActual++;
            renderizarImagen();
        }  

        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {

        if(posicionActual == 0){
            posicionActual = 2;
            renderizarImagen();
        }else{
            posicionActual--;
            renderizarImagen();
        }
        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {

        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);        
        $botonAvanzar.disabled = true;
        $botonRetroceder.disabled = true;
        $botonPlay.disabled = true;
        $botonStop.disabled = false;

        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
        

        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {

        clearInterval(intervalo);

        $botonAvanzar.disabled = false;
        $botonRetroceder.disabled = false;
        $botonStop.disabled = true;
        $botonPlay.disabled = false;


        // Desactivar la ejecución de intervalo.

        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    function zoomIn(e){
        var zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';

        
        // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        // e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX

        // alert("qweqweqwe");

        // var $text = docuemnt.getElementById("text");
        // $text.style.left
        

        // alert(offsetX +" "+ offsetY);



    }
    
    function zoomOut(e){
        $imagen.style.backgroundPosition = 'unset';        
    }

    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.
        $botonAvanzar.addEventListener("click", pasarFoto);
        $botonRetroceder.addEventListener("click", retrocederFoto);
        $botonPlay.addEventListener("click", playIntervalo);
        $botonStop.addEventListener("click", stopIntervalo);
        $imagen.addEventListener("mousemove", zoomIn, true);
        $imagen.addEventListener("mouseleave", zoomOut, true);
        

    // Iniciar
    renderizarImagen();
} 

