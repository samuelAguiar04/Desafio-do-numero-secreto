let ListaNomes = [];  // Array para armazenar os nomes
let nomeAmigo; //variavel para guardar os nomes que serão colocados no input


function exibirNomesDaLista() {
    let listaElemento = document.getElementById('listaAmigos'); // Obtém o elemento da lista HTML
    listaElemento.innerHTML = "";
    // Percorre o array ListaNomes e cria um <li> para cada nome
    for (let i = 0; i < ListaNomes.length; i++) {
        let li = document.createElement('li');  // Cria o <li>
        li.textContent = ListaNomes[i];  // Define o conteúdo do <li>
        listaElemento.appendChild(li);  // Adiciona o <li> à lista
    }
}

// Função para exibir o resultado do sorteio

function limpaCampo() {
    // limpa input
    document.querySelector('input').value = '';
}

function adicionarAmigo() {
    //botão para adicionar a lista de nomes...

    nomeAmigo = document.querySelector('input').value;
    // verifica se o nome já esta na lista de nomes(array)
    if (ListaNomes.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} ` + 'já foi inserido. Digite outro nome!')

    } else {
        // verifica se o campo esta vazio... trim() é um metodo para ajudar a fazer isso
        if (nomeAmigo.trim() == '') {
            alert("Por favor, insira um nome válido")
            return;
        } else {
            // insere os nomes adicionados no array
            ListaNomes.push(nomeAmigo);
            exibirNomesDaLista()
        }
        limpaCampo();
    };
    console.log(ListaNomes)
};

function sortearAmigo() {

    if (ListaNomes.length !== 0) {

        let sorteador = Math.floor(Math.random() * ListaNomes.length);
        nomeSorteado = ListaNomes[sorteador]
        // Exibe o nome sorteado no parágrafo com id "nomeSorteado
                //document.getElementById('botaoSortear').removeAttribute('disabled');

        document.getElementById('resultado').innerHTML = "Amigo sorteado: " + nomeSorteado;
        document.getElementById('botaoSortear').removeAttribute('disabled');
    } else {
        console.log('desabilitado')
        return;

    }
}









