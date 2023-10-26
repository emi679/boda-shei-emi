const copySheiCbu = document.querySelector('#copySheiCbu');
const copySheiAlias = document.querySelector('#copySheiAlias');

const CBU = document.querySelector("#cbu").innerText;
const ALIAS = document.querySelector("#alias").innerText;

copySheiCbu.addEventListener('click',()=>{
    console.log(CBU)
    navigator.clipboard.writeText(CBU)
})

copySheiAlias.addEventListener('click',()=>{
    console.log(ALIAS)
    navigator.clipboard.writeText(ALIAS)
})