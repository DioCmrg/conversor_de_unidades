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

    // Converter a entreda para metros
    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value
            break;
        case "km":
            meters = inputElement.value * 1000
            break;
        case "cm":
            meters = inputElement.value / 100
            break;
        case "mm":
            meters = inputElement.value / 1000
            break;
    }

    // Converter metros para unidade de saída
    let result 
    switch (toValue) {
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000
            break;
        case "cm":
            result = meters * 100
            break;
        case "mm":
            result = meters * 1000
            break;
    }

    console.log(fromValue, toValue);
    console.log(meters, result);
}

convertButton.addEventListener("click", convert)