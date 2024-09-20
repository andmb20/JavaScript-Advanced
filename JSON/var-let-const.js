/*
    VAR X LET X CONST
        VAR
        - Escopo de função ou global.
        - Sofre hoisting (iniciando como undefined)
        - Permite redeclaração.

        LET
        - Escopo de Bloco.
        - Sofre hoisting (não inicializado até a linha de declaração)
        - Permite reatribuir o valor da váriavel.

        CONST
        - Escopo de Bloco.
        - Não pode ser reatribuido, mas objetos podem ser modificados.
        - Deve ser inicializado na declaração.
*/