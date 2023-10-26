const copyEmiCbu = document.querySelector('#copyEmiCbu');
const copyEmiAlias = document.querySelector('#copyEmiAlias');

const CBU = document.querySelector("#cbu").innerText;
const ALIAS = document.querySelector("#alias").innerText;

copyEmiCbu.addEventListener('click',()=>{
    console.log(CBU)
    navigator.clipboard.writeText(CBU)
})

copyEmiAlias.addEventListener('click',()=>{
    console.log(ALIAS)
    navigator.clipboard.writeText(ALIAS)
})