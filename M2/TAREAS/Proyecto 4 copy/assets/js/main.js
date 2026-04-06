// Boton con id="btnTop"
const btnTop = document.getElementById("btnTop");
if (btnTop) {
    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth"}) ;
    });
}

#btnTop {
    position: fixed;
    right: 16px;
    bottom: 16px;
    padding: 10px 14px; 
}