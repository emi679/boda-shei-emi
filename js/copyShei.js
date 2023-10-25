const copySheiCbu = document.querySelector('#copySheiCbu');
const copySheiAlias = document.querySelector('#copySheiAlias');

const CBU = document.querySelector("body > div:nth-child(4) > p").innerText;
const ALIAS = document.querySelector("body > div:nth-child(6) > p").innerText;

copySheiCbu.addEventListener('click',()=>{
    console.log(CBU)
    navigator.clipboard.writeText(CBU)
})

copySheiAlias.addEventListener('click',()=>{
    console.log(ALIAS)
    navigator.clipboard.writeText(ALIAS)
})