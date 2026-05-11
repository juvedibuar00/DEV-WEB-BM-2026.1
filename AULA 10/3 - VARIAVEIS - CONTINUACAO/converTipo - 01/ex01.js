// Conversão do tipo de dados



    let numero1 = window.prompt("Digite o primeiro número: ")
    let numero2 = window.prompt("Digite o segundo número: ")

    let resultado = numero1 + numero2

    window.alert("O resultado da soma é: " + resultado)

// O código acima apresenta um problema de concatenação, pois os valores obtidos do prompt são do tipo string. Quando usamos o operador de adição (+) com strings, ele concatena os valores em vez de somá-los numericamente. Por exemplo, se o usuário digitar "5" e "3", o resultado será "53" em vez de 8.

// Para resolver o problema da concatenação, precisamos converter os valores para o tipo numérico (number) usando a função Number() ou parseFloat().
let numero1 = parseFloat(window.prompt("Digite o primeiro número: "))
let numero2 = parseFloat(window.prompt("Digite o segundo número: "))

let resultado = numero1 + numero2

window.alert("O resultado da soma é: " + resultado)


    // Para resolver o problema da concatenação, precisamos converter os valores para o tipo numérico (number) usando a função Number() ou parseFloat().

    // Ou usando apenas Number():
    let numero1 = Number(window.prompt("Digite o primeiro número: "))
    let numero2 = Number(window.prompt("Digite o segundo número: "))

    let resultado = numero1 + numero2

    window.alert("O resultado da soma é: " + resultado)

    