document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario');
    const inputs = Array.from(form.querySelectorAll('input, textarea'));

    if (form) {
        form.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const currentInput = document.activeElement;
                const currentIndex = inputs.indexOf(currentInput);

                if (currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus();
                } else {
                    // form.submit();
                }
            }
        });
    }
});

function imprimirPendura() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const data = document.getElementById("data").value;
    const bairro = document.getElementById("bairro").value;
    const funcionario = document.getElementById("nome").value;
    const valor = document.getElementById("valor").value;

    // Validação de entrada
    if (!data || !bairro || !funcionario || !valor) {
        alert("Por favor, preencha todos os campos!");
        return; // Impede a execução se algum campo estiver vazio
    }
    const dataFormatada2 = data.split('-').reverse().join('/');

    const conteudoImpressao = `
    <p style="font-size: 30px; text-align: center;"><strong>TAXA</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada2}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${bairro}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${funcionario}</strong></p>
    <p style="font-size: 40px; text-align: center;">R$ <strong> ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
    
    `;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.open();
    janelaImpressao.document.write(`
        <html>
            <head>
                <title>Taxa do ${funcionario} ${dataFormatada2}</title>
            </head>
            <body>
                ${conteudoImpressao}
            </body>
        </html>
    `);
    janelaImpressao.document.close();
    janelaImpressao.print();
    janelaImpressao.close();
}


  //impressão 2

  function imprimirPendura2() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const data2 = document.getElementById("data2").value;
    const bairro2 = document.getElementById("bairro2").value;
    const funcionario2 = document.getElementById("nome2").value;
    const valor2 = document.getElementById("valor2").value;

    // Validação de entrada
    if (!data2 || !bairro2 || !funcionario2 || !valor2) {
        alert("Por favor, preencha todos os campos!");
        return; // Impede a execução se algum campo estiver vazio
    }
    const dataFormatada22 = data2.split('-').reverse().join('/');

    const conteudoImpressao2 = `
    <p style="font-size: 30px; text-align: center;"><strong>CORRIDA</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada22}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${bairro2}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${funcionario2}</strong></p>
    <p style="font-size: 40px; text-align: center;">R$ <strong> ${valor2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
    
    `;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.open();
    janelaImpressao.document.write(`
        <html>
            <head>
                <title>Taxa do ${funcionario2} ${dataFormatada22}</title>
            </head>
            <body>
                ${conteudoImpressao2}
            </body>
        </html>
    `);
    janelaImpressao.document.close();
    janelaImpressao.print();
    janelaImpressao.close();
}

//coluna 1
function calcularFormadePagaMento1() {
    let soma1 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement1 = document.getElementById(`column1-line${i}`);
        const valor1 = parseFloat(inputElement1.value) || 0;
        soma1 += valor1;
    }
    document.getElementById("total1").textContent = soma1.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma1; // Retorna o valor da soma
}

//coluna 2
function calcularFormadePagaMento2() {
    let soma2 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement2 = document.getElementById(`column2-line${i}`);
        const valor2 = parseFloat(inputElement2.value) || 0;
        soma2 += valor2;
    }
    document.getElementById("total2").textContent = soma2.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma2; // Retorna o valor da soma
}

//coluna 3
function calcularFormadePagaMento3() {
    let soma3 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement3 = document.getElementById(`column3-line${i}`);
        const valor3 = parseFloat(inputElement3.value) || 0;
        soma3 += valor3;
    }
    document.getElementById("total3").textContent = soma3.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma3; // Retorna o valor da soma
}

///coluna 4
function calcularFormadePagaMento4() {
    let soma4 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement4 = document.getElementById(`column4-line${i}`);
        const valor4 = parseFloat(inputElement4.value) || 0;
        soma4 += valor4;
    }
    document.getElementById("total4").textContent = soma4.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma4; // Retorna o valor da soma
}

///coluna 5
function calcularFormadePagaMento5() {
    let soma5 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement5 = document.getElementById(`column5-line${i}`);
        const valor5 = parseFloat(inputElement5.value) || 0;
        soma5 += valor5;
    }
    document.getElementById("total5").textContent = soma5.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma5; // Retorna o valor da soma
}

///coluna 6
function calcularFormadePagaMento6() {
    let soma6 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement6 = document.getElementById(`column6-line${i}`);
        const valor6 = parseFloat(inputElement6.value) || 0;
        soma6 += valor6;
    }
    document.getElementById("total6").textContent = soma6.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma6; // Retorna o valor da soma
}

///coluna 7
function calcularFormadePagaMento7() {
    let soma7 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement7 = document.getElementById(`column7-line${i}`);
        const valor7 = parseFloat(inputElement7.value) || 0;
        soma7 += valor7;
    }
    document.getElementById("total7").textContent = soma7.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma7; // Retorna o valor da soma
}

///coluna 8
function calcularFormadePagaMento8() {
    let soma8 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement8 = document.getElementById(`column8-line${i}`);
        const valor8 = parseFloat(inputElement8.value) || 0;
        soma8 += valor8;
    }
    document.getElementById("total8").textContent = soma8.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma8; // Retorna o valor da soma
}

///coluna 9
function calcularFormadePagaMento9() {
    let soma9 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement9 = document.getElementById(`column9-line${i}`);
        const valor9 = parseFloat(inputElement9.value) || 0;
        soma9 += valor9;
    }
    document.getElementById("total9").textContent = soma9.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma9; // Retorna o valor da soma
}

///coluna 10
function calcularFormadePagaMento10() {
    let soma10 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement10 = document.getElementById(`column10-line${i}`);
        const valor10 = parseFloat(inputElement10.value) || 0;
        soma10 += valor10;
    }
    document.getElementById("total10").textContent = soma10.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma10; // Retorna o valor da soma
}

///coluna 11
function calcularFormadePagaMento11() {
    let soma11 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement11 = document.getElementById(`column11-line${i}`);
        const valor11 = parseFloat(inputElement11.value) || 0;
        soma11 += valor11;
    }
    document.getElementById("total11").textContent = soma11.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma11; // Retorna o valor da soma
}

///coluna 12
function calcularFormadePagaMento12() {
    let soma12 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement12 = document.getElementById(`column12-line${i}`);
        const valor12 = parseFloat(inputElement12.value) || 0;
        soma12 += valor12;
    }
    document.getElementById("total12").textContent = soma12.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma12; // Retorna o valor da soma
}

///coluna 13
function calcularFormadePagaMento13() {
    let soma13 = 0;
    for (let i = 1; i <= 20; i++) {
        const inputElement13 = document.getElementById(`column13-line${i}`);
        const valor13 = parseFloat(inputElement13.value) || 0;
        soma13 += valor13;
    }
    document.getElementById("total13").textContent = soma13.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return soma13; // Retorna o valor da soma
}
function calcularSomadeTudo() {
    const resultado1 = calcularFormadePagaMento1();
    const resultado2 = calcularFormadePagaMento2();
    const resultado3 = calcularFormadePagaMento3();
    const resultado4 = calcularFormadePagaMento4();
    const resultado5 = calcularFormadePagaMento5();
    const resultado6 = calcularFormadePagaMento6();
    const resultado7 = calcularFormadePagaMento7();
    const resultado8 = calcularFormadePagaMento8();
    const resultado9 = calcularFormadePagaMento9();
    const resultado10 = calcularFormadePagaMento10();
    const resultado11 = calcularFormadePagaMento11();
    const resultado12 = calcularFormadePagaMento12();
    const resultado13 = calcularFormadePagaMento13();
    const somaTotal = resultado1 + resultado2 + resultado3 + resultado4+ resultado5 + resultado6
    + resultado7 + resultado8 + resultado9 + resultado10 + resultado11 + resultado12 + resultado13;
    const somacredito = resultado2 + resultado3 + resultado4;
    const somadebito = resultado5 + resultado6 + resultado7;
    const somavoucher = resultado8 + resultado10;
    const somapix = resultado9 + resultado11 + resultado12;
    const somadinheiro = resultado9 + resultado11 + resultado12;

    // Exibe o resultado total em um elemento HTML (por exemplo, "totalGeral")
    document.getElementById("SomadeTudo").textContent = somaTotal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,});

    document.getElementById("somaFormadePagamento").textContent = somacredito.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,});

            document.getElementById("somaFormadePagamento2").textContent = somadebito.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,});

                document.getElementById("somaFormadePagamento3").textContent = somavoucher.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,});

                    document.getElementById("somaFormadePagamento4").textContent = somapix.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,});

                        document.getElementById("somaFormadePagamento0").textContent = somadinheiro.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,});
    

                    

}

  // Adicionando a funcionalidade de navegação por Enter
  document.addEventListener('DOMContentLoaded', function() {
    const div = document.getElementById('Ifood'); // Seleciona o formulário pelo ID
    const inputs = Array.from(div.querySelectorAll('input, textarea')); // Seleciona todos os inputs e textareas

    if (div) {
        div.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Impede o comportamento padrão do Enter
                const currentInput = document.activeElement;
                const currentIndex = inputs.indexOf(currentInput);

                if (currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus(); // Move o foco para o próximo campo
                } else {
                    // form.submit(); // Se quiser enviar o form ao apertar enter no ultimo campo.
                }
            }
        });
    }
});




// ... (seu código JavaScript existente)

function ImorimirFormadePagamento1() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(1) ul"); // Seleciona o primeiro ul dentro da div Ifood
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim(); // Obtém o nome da forma de pagamento
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column1-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento2() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(2) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column2-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento3() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(3) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column3-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento4() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(4) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column4-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento5() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(5) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column5-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento6() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(6) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column6-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento6() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(6) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column6-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento7() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(7) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column7-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento8() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(8) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column8-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento9() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(9) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column9-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento10() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(10) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column10-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento11() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(11) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column11-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento12() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(12) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column12-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.

// Adapte as funções ImorimirFormadePagamento2, 3, etc. de forma similar, alterando o seletor do ul e o id dos inputs

function ImorimirFormadePagamento13() {
    const ulElement = document.querySelector("#Ifood > div:nth-child(13) ul");
    const nomeFormaPagamento = ulElement.firstChild.textContent.trim();
    const valores = [];
    let soma = 0;

    for (let i = 1; i <= 20; i++) {
        const inputElement = document.getElementById(`column13-line${i}`);
        const valor = parseFloat(inputElement.value);

        if (!isNaN(valor)) {
            valores.push(valor);
            soma += valor;
        }
    }

    let conteudoImpressao = `${nomeFormaPagamento}\n\n`;

    valores.forEach((valor, index) => {
        conteudoImpressao += `${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    });

    conteudoImpressao += `\nTotal: ${soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(`<pre>${conteudoImpressao}</pre>`);
    janelaImpressao.document.close();
    janelaImpressao.print();
}

// Repita o padrão para ImorimirFormadePagamento3, ImorimirFormadePagamento4, etc.
