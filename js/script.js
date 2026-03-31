// ===== LOCAL STORAGE =====
function salvar(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

function obter(chave) {
    return JSON.parse(localStorage.getItem(chave)) || [];
}

// ===== FILMES =====
function salvarFilme() {
    let filmes = obter('filmes');

    let filme = {
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        descricao: document.getElementById('descricao').value,
        classificacao: document.getElementById('classificacao').value,
        duracao: document.getElementById('duracao').value,
        estreia: document.getElementById('estreia').value
    };

    filmes.push(filme);
    salvar('filmes', filmes);

    alert("Filme salvo!");
}

// ===== SALAS =====
function salvarSala() {
    let salas = obter('salas');

    let sala = {
        nome: document.getElementById('nomeSala').value,
        capacidade: document.getElementById('capacidade').value,
        tipo: document.getElementById('tipoSala').value
    };

    salas.push(sala);
    salvar('salas', salas);

    alert("Sala salva!");
}

// ===== SELECTS =====
function carregarSelectsSessao() {
    let filmes = obter('filmes');
    let salas = obter('salas');

    let selectFilme = document.getElementById('filme');
    let selectSala = document.getElementById('sala');

    if (!selectFilme || !selectSala) return;

    selectFilme.innerHTML = '<option value="">Selecione o Filme</option>';
    filmes.forEach((f, i) => {
        selectFilme.innerHTML += `<option value="${i}">${f.titulo}</option>`;
    });

    selectSala.innerHTML = '<option value="">Selecione a Sala</option>';
    salas.forEach((s, i) => {
        selectSala.innerHTML += `<option value="${i}">${s.nome}</option>`;
    });
}

// ===== SESSÕES =====
function salvarSessao() {
    let sessoes = obter('sessoes');

    let sessao = {
        filme: document.getElementById('filme').value,
        sala: document.getElementById('sala').value,
        data: document.getElementById('data').value,
        preco: document.getElementById('preco').value,
        idioma: document.getElementById('idioma').value,
        formato: document.getElementById('formato').value
    };

    sessoes.push(sessao);
    salvar('sessoes', sessoes);

    alert("Sessão salva!");
}

// ===== LISTAGEM =====
function listarSessoes() {
    let sessoes = obter('sessoes');
    let filmes = obter('filmes');
    let salas = obter('salas');

    let tabela = document.getElementById('lista');
    if (!tabela) return;

    tabela.innerHTML = "";

    sessoes.forEach((s, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${filmes[s.filme]?.titulo || '-'}</td>
            <td>${salas[s.sala]?.nome || '-'}</td>
            <td>${new Date(s.data).toLocaleString()}</td>
            <td>R$ ${parseFloat(s.preco).toFixed(2)}</td>
            <td>
                <a href="venda-ingressos.html?sessao=${i}" class="btn btn-success">
                    Comprar
                </a>
            </td>
        </tr>`;
    });
}

// ===== VENDA =====
function carregarSessoesVenda() {
    let sessoes = obter('sessoes');
    let filmes = obter('filmes');

    let select = document.getElementById('sessao');
    if (!select) return;

    select.innerHTML = '<option value="">Selecione</option>';

    sessoes.forEach((s, i) => {
        select.innerHTML += `<option value="${i}">
            ${filmes[s.filme]?.titulo} - ${s.data}
        </option>`;
    });
}

function salvarIngresso() {
    let ingressos = obter('ingressos');

    let ingresso = {
        sessao: document.getElementById('sessao').value,
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        assento: document.getElementById('assento').value,
        pagamento: document.getElementById('pagamento').value
    };

    ingressos.push(ingresso);
    salvar('ingressos', ingressos);

    alert("Compra realizada!");
}

// ===== INIT =====
window.onload = function () {
    carregarSelectsSessao();
    listarSessoes();
    carregarSessoesVenda();
};