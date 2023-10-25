const modal=document.getElementById("modal-selector")
const modalCloser=document.getElementById("button-closer")
console.log(modal,modalCloser)

    modalCloser.addEventListener("click",()=>{
        var isModalClosed=false;
    
        modal.classList.toggle("modal-closed")
        isModalClosed=!isModalClosed
    
    })
