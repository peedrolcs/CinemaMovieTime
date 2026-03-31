let botao = document.getElementById('btnAdicionar');

function AdiconarTarefa(){

    const entrada = document.getElementById('txtTarefa');
    const texto = txtTarefa.value;
    const liTarefa = document.getElementById('listaTarefas');

    if(texto){
        const novaTarefa = document.createElement('li');
        const textoli = document.createTextNode(texto.toUpperCase());
        novaTarefa.appendChild(textoli);
        liTarefa.appendChild(novaTarefa);
            txtTarefa.value = '';
    }
    
}
btnAdicionar.addEventListener('click', AdiconarTarefa);