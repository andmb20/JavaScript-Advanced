/*
    JSON - JAVASCRIPT OBJECT NOTATION

    - Padrão de troca e armazenamento de informações.
    - Padrão lógico simples.
    - Leve para ser enviado e recebido.
    - Simples e fácil de entender.
    - Derivado do JavaScript.
    - Utiliza o formato chave/valor.

    // NÃO PODE HAVER UMA VIRGULA APÓS O ULTIMO ITEM EM UM OBJETO OU ARRAY. ISSO CAUSARIA UM ERRO DE SINTAXE JSON.

*/

const user = {
    name: "André",
    age: 24,
    job: "Developer",
    skills: ["HTML", "CSS", "JavaScript"]
}

console.log(user)

// Converter para código JSON
const userJson = JSON.stringify(user)

console.log(userJson)

// Converter para código JavaScript
const userJsonParse = JSON.parse(userJson)

console.log(userJsonParse)
