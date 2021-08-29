const body=document.body;
const coswitch=document.querySelector('.switch')
;
const text=document.querySelector('.color')
coswitch.addEventListener('click',function(){
    const c1=retrandom();
    const c2=retrandom();
    const c3=retrandom();
    const colorStr=`rgb(${c1},${c2},${c3})`;
    body.style.backgroundColor=colorStr;
    text.innerText=colorStr;
    console.log(colorStr);
    
})
function retrandom(){
    return Math.floor(Math.random()*256);
}