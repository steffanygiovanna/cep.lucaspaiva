function consultaendereco (){
    let cep = document.getElementById('cep').value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    if (cep.length !== 8){
        alert("CEP inválido!!!");
        return;
    }

    fetch(url).then(function(response){
        response.json().then(mostrardados)
    })
    
}

function mostrardados (dados) {
    let resultado = document.querySelector('#resultado');
    if (dados.erro){
        resultado.innerHTML = `Não foi possivel localizar o endereço`
    } else {
        resultado.innerHTML = `
        <p> Endereço: ${dados.localidade}</p>
        <p> logradouro: ${dados.logradouro}</p>
        <p> complemento: ${dados.complemento}</p>
        <p> estado: ${dados.estado}</p>
        <p> região: ${dados.regiao}</p>
        <p> DDD: ${dados.ddd}</p>
        `
    }
}