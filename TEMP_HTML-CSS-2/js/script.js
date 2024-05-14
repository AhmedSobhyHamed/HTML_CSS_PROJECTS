
window.addEventListener('load' , function() {
    let e =document.querySelector("nav .ASH-list-body .ASH-list-ul-flex")
    changeliststyle(e)
    window.onresize = _=> {changeliststyle(e)}
})

function changeliststyle(e) {
    if(window.innerWidth < 768)
    {
        e.classList.remove("ASH-list-ul-flex")
        e.classList.add("ASH-list-ul-drop")
    }
    else
    {
        e.classList.remove("ASH-list-ul-drop")
        e.classList.add("ASH-list-ul-flex")
    }
}