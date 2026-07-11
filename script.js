const boton = document.querySelector("button");
const circulo = document.getElementById("circulo");

boton.onclick = function () {
    boton.style.display = "none";

    let grande = false;

    setInterval(function () {
        if (grande) {
            circulo.style.transform = "scale(1)";
        } else {
            circulo.style.transform = "scale(1.4)";
        }

        grande = !grande;
    }, 2000);
};



    

