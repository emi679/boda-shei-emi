const buttonForm = document.querySelector("#formGoogle");
const buttonUbicacion = document.querySelector("#ubicacion");

const buttonNext = document.querySelector("#btn_right");
const buttonPrev = document.querySelector("#btn_left");
const slider = document.querySelector(".slider")


//Funciones para ubicacacion y formulario

buttonForm.addEventListener("click",(e)=>{
    let ventana = window.open("https://forms.gle/Huj4FgwJ1dgkWVgt8","_blank")
})

buttonUbicacion.addEventListener("click",(e)=>{
    let ventana = window.open("https://maps.app.goo.gl/cwxKdMbJmg7kBgF39","_blank")
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