// Selecionar os elementos
const inputElement = document.querySelector("#input")
// from determina qual o tipo do dado do input
const fromElement = document.querySelector("#from")
// to determina o tipo do dado que será convertido
const toElement = document.querySelector("#to")
// output nos dá os dados de saída
const outputElement = document.querySelector("#output")
// botao que vai converter as unidades
const convertButton = document.querySelector("#convert-bnt")
// vai exibir a mensagem final (resultado)
const messageElement = document.querySelector("#message")

// Função para converter as unidades
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    // pequena validação para verificar de entrada e saída são iguais
    if(fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return
    }

    console.log(fromValue, toValue)
}

convertButton.addEventListener("click", convert)