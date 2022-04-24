function inicio(){

document.querySelector('#guardar').addEventListener('click',function(){
    guardar()
});

document.querySelector('#eliminar').addEventListener('click',function(){
    eliminar()
});

document.querySelector('#limpiar').addEventListener('click',function(){
    limpiar()
});

document.querySelector('#editar').addEventListener('click',function(){
    editar()
});

}

function guardar(){
    const llave = document.querySelector('#llave').value;
    const valor = document.querySelector('#valor').value;

    if(llave && valor != ''){
        localStorage.setItem(llave, valor);
        document.querySelector('#llave').value = '';
        document.querySelector('#valor').value = '';
        if(localStorage.getItem(llave)){
            alert('Se Guardo Correctamente');

        }
    }

}

function eliminar(){
    const llave = document.querySelector('#llave').value;
    if(localStorage.getItem(llave)){
        localStorage.removeItem(llave)
        alert('Se Elimino Correctamente');
    }
}

function limpiar(){
    localStorage.clear();
    alert('Se Limpio Correctamente');
}

function editar(){
    const llave = document.querySelector('#llave').value
    const valor = document.querySelector('#valor').value
    if(localStorage.getItem(llave)){
        localStorage.setItem(llave, valor)
        alert('Se Edito Correctamente');
    }
}

window.onload = inicio;