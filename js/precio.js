window.addEventListener('load',()=>{

    let precioMayores = "25.000" //PRECIO TARJETA MAYORES
    let precioMenores = "15.000" //PRECIO TARJETA MENORES

    const spanMenores = document.querySelector('#menores');
    const spanMayores = document.querySelector('#mayores')

    function renderizarPrecio(){
        spanMayores.innerText = ""
        spanMenores.innerText =""

        spanMayores.innerText += precioMayores;
        spanMenores.innerText += precioMenores;
    }

    renderizarPrecio();


})