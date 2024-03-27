function imprimirOperacao() {
    let a = 2;
    let b = 3;
    console.log(`O resultado da soma entre ${a} e ${b} = ${a + b}`);
}

imprimirOperacao();

function imprimirOperacaoV2(a, b) {
    console.log(`O resultado da soma entre ${a} e ${b} = ${a + b}`)
}

imprimirOperacaoV2(1, 4);

function imprimirOperacaoV3(a, b, op) {
    let c;
    switch (op) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '/':
            c = a / b;
            break;
        case '*':
            c = a * b;
            break;
        default:
            break;
    }
    console.log(`O resultado da ${op} entre ${a} e ${b} = ${c}`)
}

imprimirOperacaoV3(3, 5, '+');
imprimirOperacaoV3(3, 5, '-');
imprimirOperacaoV3(3, 5, '*');
imprimirOperacaoV3(3, 5, '/');
imprimirOperacaoV3(3, 5, 'a');
