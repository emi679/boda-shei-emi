const buttonForm = document.querySelector("#formGoogle");
const buttonUbicacion = document.querySelector("#ubicacion");

const buttonNext = document.querySelector("#btn_right");
const buttonPrev = document.querySelector("#btn_left");
const slider = document.querySelector(".slider");

const buttonMusica = document.querySelector("#cards > div:nth-child(1) > button");

const buttonEmi = document.querySelector("#pagar-tarjeta > div > div:nth-child(1) > button");
const buttonShei = document.querySelector("#pagar-tarjeta > div > div:nth-child(2) > button");

const templateEmi = document.querySelector('#my-template')

//Funciones para ubicacacion y formulario

buttonForm.addEventListener("click",(e)=>{
    //let ventana = window.open("https://forms.gle/Huj4FgwJ1dgkWVgt8","_blank");

    Swal.fire({
        html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe46V1G_7SeRwoxcvaztCNKVAS6fYmfttOUG49KQ8qbBrhcSw/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
        showCloseButton: true,
        focusConfirm: false,
        showConfirmButton: false,
        background: '#1D1D1B',
        width:'auto',
        padding: '20px',
    })
    
})

buttonUbicacion.addEventListener("click",(e)=>{
    //let ventana = window.open("https://maps.app.goo.gl/cwxKdMbJmg7kBgF39","_blank")
    Swal.fire({
        html:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.745860044815!2d-60.837225593854654!3d-31.659214420224846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a72091885b8b%3A0xe3b48f36e5e35f0f!2sSal%C3%B3n%20La%20Colonia!5e0!3m2!1ses-419!2sar!4v1698183120650!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'auto',
    })
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
        html:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGZxUgFmmdQ2pJqBtICiv0m4V41CZLKYv4XwugqR1bQnOQMQ/viewform?embedded=true" width="640" height="643" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'auto',
    })
})

buttonEmi.addEventListener('click',()=>{
    console.log('click Emi');
    Swal.fire({
        html:'<iframe src="./cuenta-emi.html" width="640" height="643" frameborder="0"></iframe>',
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: true,
        background: '#1D1D1B',
        width:'auto',
    })
})

buttonShei.addEventListener('click',()=>{
    console.log('click Shei');
    Swal.fire({
            html:'<iframe src="./cuenta-shei.html" width="640" height="643" frameborder="0"></iframe>',
            focusConfirm: false,
            showConfirmButton: false,
            showCloseButton: true,
            background: '#1D1D1B',
            width:'auto',
        })
})