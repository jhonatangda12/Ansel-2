function enviarMensagem() {
    var mensagem = document.getElementById("mensagem").value;
    alert("Mensagem enviada:\n" + mensagem);
    document.getElementById("mensagem").value = "";
}

function imprimirFormulario() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const nome = document.getElementById("nome")?.value || "N/A";
    const taxa1 = parseFloat(document.getElementById("taxa1")?.value) || 0;
    const soma = document.getElementById("resultadoSoma")?.textContent || "0,00";
    const pagar = document.getElementById("valorAPagar")?.textContent || "0,00";
    const mensagem = document.getElementById("mensagem")?.value || "";

    let conteudoImpressao = `
        <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada}</strong></p>
        <p style="font-size: 30px; text-align: center;"><strong>${nome}</strong></p>
    `;

    for (let i = 1; i <= 20; i++) {
        const numero = document.getElementById(`numero${i}`)?.value;
        if (numero && numero !== "0") {
            conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong>${numero}</strong></p>`;
        }
    }

    conteudoImpressao += `
        <div style="text-align: center;">
            <p style="font-size: 20px;"><strong>Taxa: ${taxa1.toLocaleString('pt-BR')}</strong></p>
            <p style="font-size: 20px;"><strong>Subtotal: ${soma}</strong></p>
            <p style="font-size: 20px;"><strong>Valor a Pagar:</strong></p>
            <p style="width: 200px; height: 50px; font-size: 40px; border: 2px dashed black; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
            <strong>${pagar}</strong>
            </p>
            <p style="font-size: 18px;"><strong>${mensagem}</strong></p>
        </div>
    `;

    const janelaImpressao = window.open("", "_blank");
    if (janelaImpressao) {
        janelaImpressao.document.open();
        janelaImpressao.document.write(`
            <html>
                <head>
                    <title>Fechamento do ${nome} - ${dataFormatada}</title>
                </head>
                <body>${conteudoImpressao}</body>
            </html>
        `);
        janelaImpressao.document.close();
        janelaImpressao.print();
        janelaImpressao.close();
    } else {
        alert("Falha ao abrir a janela de impressão.");
    }
}

function calcularResultados() {
    let soma = 0;
    for (let i = 1; i <= 20; i++) {
        const valor = parseFloat(document.getElementById(`numero${i}`)?.value) || 0;
        soma += valor;
    }

    const taxa1 = parseFloat(document.getElementById("taxa1")?.value) || 0;
    const totalComTaxa = soma - taxa1;
    const pagar = totalComTaxa * 0.115 + taxa1;

    const formatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    document.getElementById("resultadoTaxas").textContent = taxa1.toLocaleString('pt-BR', formatOptions);
    document.getElementById("resultadoSoma").textContent = totalComTaxa.toLocaleString('pt-BR', formatOptions);
    document.getElementById("valorAPagar").textContent = pagar.toLocaleString('pt-BR', formatOptions);
}
  // Adicionando a funcionalidade de navegação por Enter
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario'); // Seleciona o formulário pelo ID
    const inputs = Array.from(form.querySelectorAll('input, textarea')); // Seleciona todos os inputs e textareas

    if (form) {
        form.addEventListener('keydown', function(event) {
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
