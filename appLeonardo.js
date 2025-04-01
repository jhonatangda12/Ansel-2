function calcularResultados() {
    let num1 = parseFloat(document.getElementById("numero1").value) || 0; // Se não informado, usa 0
    let num2 = parseFloat(document.getElementById("numero2").value) || 0; // Se não informado, usa 0
    let taxa01 = parseFloat(document.getElementById("taxa1").value) || 0; // Se não informado, usa 0

    let multiplicar = num2 * 5;
    let total = multiplicar + num1 + taxa01;

    document.getElementById("resultadoTaxas").textContent = taxa01.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("valorAPagar").textContent = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function imprimirFormulario() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const nome = document.getElementById("nome").value;
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const taxa1 = document.getElementById("taxa1").value;
    const taxaDia = document.getElementById("resultadoTaxas").textContent;
    const pagar = document.getElementById("valorAPagar").textContent;
    const mensagem = document.getElementById("mensagem")?.value || "";


    const conteudoImpressao = `
        <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada}</strong></p>
        <p style="font-size: 30px; text-align: center;"><strong> ${nome}</strong></p>
        <p style="font-size: 18px; text-align: center;"><strong> ${numero1.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
        <p style="font-size: 18px; text-align: center;"><strong> ${numero2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
        <p style="font-size: 20px; text-align: center;"><strong>Taxa: ${taxaDia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
        <p style="width: 200px; height: 50px; font-size: 40px; border: 2px dashed black; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
        <strong> ${pagar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
              <p style="font-size: 18px;"><strong>${mensagem}</strong></p>
    `;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.open();
    janelaImpressao.document.write(`
        <html>
            <head>
                <title>Fechamento do ${nome} ${dia}-${mes}-${ano}</title>
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

// Adicionando a funcionalidade de navegação por Enter
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