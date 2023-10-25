const copyEmiCbu = document.querySelector('#copyEmiCbu');
const copyEmiAlias = document.querySelector('#copyEmiAlias');

const CBU = document.querySelector("body > div:nth-child(4) > p").innerText;
const ALIAS = document.querySelector("body > div:nth-child(6) > p").innerText;

copyEmiCbu.addEventListener('click',()=>{
    console.log(CBU)
    navigator.clipboard.writeText(CBU)
})

copyEmiAlias.addEventListener('click',()=>{
    console.log(ALIAS)
    navigator.clipboard.writeText(ALIAS)
})