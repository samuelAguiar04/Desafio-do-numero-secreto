let ListaNomes = [];


function adicionarAmigo() {
    
    nomeAmigo = document.querySelector('Input').value;
    if (ListaNomes.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} ` + 'já foi inserido. Digite outro nome!')

    } else {
        ListaNomes.push(nomeAmigo);
    }
    
};
console.log(ListaNomes)


