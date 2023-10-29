const buttonForm = document.querySelector("#formGoogle");
const buttonUbicacion = document.querySelector("#ubicacion");
const buttonCalendar = document.querySelector('#btn-calendario');

const buttonNext = document.querySelector("#btn_right");
const buttonPrev = document.querySelector("#btn_left");
const slider = document.querySelector(".slider");

const buttonMusica = document.querySelector("#cards > div:nth-child(1) > button");
const buttonDress = document.querySelector('#btn-dress');
const buttonNotas = document.querySelector('#btn-notas');

const buttonEmi = document.querySelector("#pagar-tarjeta > div > div:nth-child(1) > button");
const buttonShei = document.querySelector("#pagar-tarjeta > div > div:nth-child(2) > button");

const templateEmi = document.querySelector('#my-template')

const btnContacto = document.querySelector('#btn-conil')

//Funciones para calendario ubicacacion y formulario

buttonCalendar.addEventListener('click',()=>{
    console.log('click calendario')
    Swal.fire({
        html:'<iframe src="./calendario.html" width="100%" height="643" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
    })

})

buttonForm.addEventListener("click",(e)=>{
    //let ventana = window.open("https://forms.gle/Huj4FgwJ1dgkWVgt8","_blank");

    Swal.fire({
        html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe46V1G_7SeRwoxcvaztCNKVAS6fYmfttOUG49KQ8qbBrhcSw/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
        showCloseButton: true,
        focusConfirm: false,
        showConfirmButton: false,
        background: '#1D1D1B',
        width:'',
        padding: '20px',
    })
    
})

buttonUbicacion.addEventListener("click",(e)=>{
    window.open("https://maps.app.goo.gl/cwxKdMbJmg7kBgF39","_blank")
    
})

//Funciones para slider de fotos

let index = 0;

function mostrarFoto(){
    switch(index){
        case -1:
            index = 3;
            slider.style.marginLeft = "-300%";
            break
        case 0:
            slider.style.marginLeft = "0%";
            break;
        case 1:
            slider.style.marginLeft = "-100%";
            break;
        case 2:
            slider.style.marginLeft = "-200%";
            break;
        case 3:
            slider.style.marginLeft = "-300%";
            break;
        case 4:
            index = 0;
            slider.style.marginLeft = "0%";
    }
}

buttonNext.addEventListener("click",()=>{
    index +=1;
    console.log(index)
    mostrarFoto();

})

buttonPrev.addEventListener("click",()=>{
    index -=1;
    console.log(index);
     mostrarFoto();
});

buttonMusica.addEventListener('click',()=>{
    Swal.fire({
        html:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGZxUgFmmdQ2pJqBtICiv0m4V41CZLKYv4XwugqR1bQnOQMQ/viewform?embedded=true" width="100%" height="643" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
    })
})

buttonEmi.addEventListener('click',()=>{
    console.log('click Emi');
    Swal.fire({
        html:'<iframe src="./cuenta-emi.html" width="100%" height="600" frameborder="0"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
            onOpen: function() {
                // Obtén el ancho de la ventana modal
                const modalWidth = this.getModal().querySelector('.swal-modal').offsetWidth;
            
                // Establece el ancho del iframe al ancho de la ventana modal
                this.getContent().querySelector('iframe').style.width = `${modalWidth}px`;
                
            }
    })
})

buttonShei.addEventListener('click',()=>{
    console.log('click Shei');
    Swal.fire({
            html:'<iframe src="./cuenta-shei.html" width="100%" height="600" frameborder="0"></iframe>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            background: '#1D1D1B',
            width:'',
            onOpen: function() {
                // Obtén el ancho de la ventana modal
                const modalWidth = this.getModal().querySelector('.swal-modal').offsetWidth;
            
                // Establece el ancho del iframe al ancho de la ventana modal
                this.getContent().querySelector('iframe').style.width = `${modalWidth}px`;

            }
        })
})  

buttonDress.addEventListener('click',()=>{
    console.log('click Emi');
    Swal.fire({
        html:'<iframe src="./dress-code.html" width="100%" height="400" frameborder="0"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
            onOpen: function() {
                // Obtén el ancho de la ventana modal
                const modalWidth = this.getModal().querySelector('.swal-modal').offsetWidth;
            
                // Establece el ancho del iframe al ancho de la ventana modal
                this.getContent().querySelector('iframe').style.width = `${modalWidth}px`;
                
            }
    })
})

buttonNotas.addEventListener('click',()=>{
    console.log('click Emi');
    Swal.fire({
        html:'<iframe src="./notas.html" width="100%" height="400" frameborder="0"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
            onOpen: function() {
                // Obtén el ancho de la ventana modal
                const modalWidth = this.getModal().querySelector('.swal-modal').offsetWidth;
            
                // Establece el ancho del iframe al ancho de la ventana modal
                this.getContent().querySelector('iframe').style.width = `${modalWidth}px`;
                
            }
    })
})

btnContacto.addEventListener('click',()=>{
    Swal.fire({
        html:'<iframe src="./contacto.html" width="100%" height="400" frameborder="0"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'',
            onOpen: function() {
                // Obtén el ancho de la ventana modal
                const modalWidth = this.getModal().querySelector('.swal-modal').offsetWidth;
            
                // Establece el ancho del iframe al ancho de la ventana modal
                this.getContent().querySelector('iframe').style.width = `${modalWidth}px`;
                
            }
    })
})