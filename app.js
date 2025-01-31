let ListaNomes = [];
let nomeAmigo;
let sorteador 
let campoNulo;



console.log(sorteador)
console.log(ListaNomes)

function adicionarAmigo() {

    nomeAmigo = document.querySelector('Input').value;
    if (ListaNomes.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} ` + 'já foi inserido. Digite outro nome!')

    } else {
        if (nomeAmigo == '') {
            alert("O nome não pode ser nulo")
        } else {
            ListaNomes.push(nomeAmigo);
        }

    };
};


function sortearAmigo() {
    sorteador = Math.random()*ListaNomes.length;
console.log(sorteador)
}
console.log(ListaNomes[sorteador])


