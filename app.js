let Amigos = [];  // Array para armazenar os nomes
let nomeAmigo; //variavel para guardar os nomes que serão colocados no input


function ApagarNomesDaLista(){
let listaItens = document.getElementById('listaAmigos'); // Obtém o elemento da lista HTML
listaItens.innerHTML = "";
Amigos.length = 0;
}


function limpaCampo() {
    // limpa input
    document.querySelector('input').value = '';
    document.getElementById('resultado').innerHTML = null;  // Apaga o valor de "nome"
 
    
}

function adicionarAmigo() {
    //botão para adicionar a lista de nomes...

    nomeAmigo = document.querySelector('input').value;
    // verifica se o nome já esta na lista de nomes(array)
    if (Amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} ` + 'já foi inserido. Digite outro nome!')

    } else {
        // verifica se o campo esta vazio... trim() é um metodo para ajudar a fazer isso
        if (nomeAmigo.trim() == '') {
            alert("Por favor, insira um nome válido")
            return;
        } else {
            // insere os nomes adicionados no array
            Amigos.push(nomeAmigo);
            atualizarListaAmigos()
        }
        limpaCampo();
    };
    console.log(Amigos)
};



function  atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtém o elemento da lista HTML
    lista.innerHTML = "";
    // Percorre o array ListaNomes e cria um <li> para cada nome
    for (let i = 0; i < Amigos.length; i++) {
        let li = document.createElement('li');  // Cria o <li>
        li.textContent = Amigos[i];  // Define o conteúdo do <li>
        lista.appendChild(li);  // Adiciona o <li> 
    }

}



// Função para exibir o resultado do sorteio
function sortearAmigo() {
    
    if (Amigos.length === 0) {

       alert("Ainda não há amigos na lista. Por favor, adicione alguns amigos para sortear !");
       
        } else{

        let sorteador = Math.floor(Math.random() * Amigos.length);
        nomeSorteado = Amigos[sorteador]

        document.getElementById('resultado').innerHTML = "Amigo sorteado: " + nomeSorteado;

        ApagarNomesDaLista()
    }
    }



