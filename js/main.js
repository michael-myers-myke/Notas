
//Array para almacenar las notas
notas = ["5", "4", "5", "4", "3"];

//Funcion para mostrar la lista de calificaciones
function listaCalificaciones() {
    let lista = document.getElementById("lista-calificaciones");
    lista.innerHTML = "";  

    for (let nota of notas) {
        let item = document.createElement("li");  
        item.textContent = "Calificación: " + nota;  
        lista.appendChild(item); 
    }
}


function promedio() {
    let suma = 0; 

    
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];  
    }

   
    let resultado = suma / 5;

    
    let p = document.getElementById("promedio");
    p.textContent = "Promedio: " + resultado.toFixed(2);  
}
function calificacionMasAlta() {
    let i = 0; 
    let calificacionAlta = 0; 

    
    while (i < notas.length) {
        if (notas[i] > calificacionAlta) {
            calificacionAlta = notas[i];  
        }
        i++;  
    }

    
    let pAlta = document.getElementById("calificacion_masAlta");
    pAlta.textContent = "Calificación más alta: " + calificacionAlta;
}

function verificarAplazos() {
    let i = 0;  
    let aplazo = false;  

    
    do {
        if (notas[i] < 4) {
            aplazo = true;  
            break;  
        }
        i++;  
    } while (i < notas.length);

    
    let pAplazo = document.getElementById("aplazo");
    if (aplazo) {
        pAplazo.textContent = "Hay un aplazo.";
    } else {
        pAplazo.textContent = "No hay aplazos.";
    }
}