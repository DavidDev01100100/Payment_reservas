// script.js

function adicionarItem() {
    const partNumber = document.getElementById('partNumber').value;
    const quantidade = document.getElementById('quantidade').value;
    const lote = document.getElementById('lote').value;

    // Validação de entrada (opcional)

    if (partNumber && quantidade && lote) {
        const novoItem = `<tr>
            <td><span class="math-inline">${partNumber}</span></td>
            <td>${quantidade}</td>
            <td>${lote}</td>
            <td><button onclick="apagarLinha(this)">Apagar</button></td>
        </tr>`;
        document.getElementById('tabela-historico').innerHTML += novoItem;

        // Salvar no armazenamento local (opcional)

        limparCampos();
    }
}

function limparCampos() {
    document.getElementById('partNumber').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('lote').value = '';
}

function apagarLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}

function limparHistorico() {
    document.getElementById('tabela-historico').innerHTML = `<thead>
        <tr>
            <th>Part Number</th>
            <th>Quantidade</th>
            <th>Lote</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody></tbody>`;
}
