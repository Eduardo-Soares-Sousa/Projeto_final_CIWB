const buscarCepButton = document.getElementById("buscarCep");
const resultadoDiv = document.getElementById("resultado");
const cepInput = document.getElementById("cepInput");

buscarCepButton.addEventListener("click", () => {
    const cep = cepInput.value;
    if (!cep) {
        alert("Por favor, insira um CEP válido.");
        return;
    }

    const apiUrl = `https://brasilaberto.com/api/v1/zipcode/${cep}`;
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na solicitação');
            }
            return response.json();
        })

        .then((data) => {
            const result = data.result;
            resultadoDiv.innerHTML = `
                <p>CEP: ${result.zipcode}</p>
                <p>Logradouro: ${result.street}</p>
                <p>Bairro: ${result.district}</p>
                <p>Cidade: ${result.city}</p>
                <p>Estado: ${result.state}</p>
            `;
        })
    .catch((error) => {
        console.error(error);
        resultadoDiv.innerHTML = "Erro ao buscar o CEP.";
    });
});