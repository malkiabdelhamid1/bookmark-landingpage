const off_buttons1 = document.getElementById("off-buttons1");
const off_buttons2 = document.getElementById("off-buttons2");
const off_buttons3 = document.getElementById("off-buttons3");
///////////////////////////////////////////////////////////////
const on_buttons1 = document.getElementById("on-buttons1");
const on_buttons2 = document.getElementById("on-buttons2");
const on_buttons3 = document.getElementById("on-buttons3");
/////////////////////////////////////////////////////////////////
/*const navc1 = document.getElementById("navc1");
const navc2 = document.getElementById("navc2");
const navc3 = document.getElementById("navc3");*/
////////////////////////////////////////////////////////////
off_buttons1.addEventListener("click",()=>{
    off_buttons1.style.display="none"
    on_buttons1.style.display="block"
    on_buttons2.style.display="none"
    on_buttons3.style.display="none"
    off_buttons2.style.display="block"
    off_buttons3.style.display="block"
    navc1.style.display="flex"
    navc2.style.display="none"
    navc3.style.display="none"

})
off_buttons2.addEventListener("click",()=>{
    off_buttons2.style.display="none"
    on_buttons2.style.display="block"
    on_buttons1.style.display="none"
    on_buttons3.style.display="none"
    off_buttons1.style.display="block"
    off_buttons3.style.display="block"
    navc1.style.display="none"
    navc2.style.display="flex"
    navc3.style.display="none"
})
off_buttons3.addEventListener("click",()=>{
    off_buttons3.style.display="none"
    on_buttons3.style.display="block"
    on_buttons1.style.display="none"
    on_buttons2.style.display="none"
    off_buttons1.style.display="block"
    off_buttons2.style.display="block"
    navc1.style.display="none"
    navc2.style.display="none"
    navc3.style.display="flex"
})