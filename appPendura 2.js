function imprimirPendura() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const data = document.getElementById("data").value;
    const empresa = document.getElementById("empresas").value;
    const funcionario = document.getElementById("nome").value;
    const produto = document.getElementById("produto").value;
    const valor = document.getElementById("valor").value;

    // Validação de entrada
    if (!data || !empresa || !funcionario || !produto || !valor) {
        alert("Por favor, preencha todos os campos!");
        return; // Impede a execução se algum campo estiver vazio
    }
    const dataFormatada2 = data.split('-').reverse().join('/');

    const conteudoImpressao = `
    <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada2}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${empresa}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${funcionario}</strong></p>
    <p style="font-size: 30px; text-align: center;"><strong>${produto}</strong></p>
    <p style="font-size: 40px; text-align: center;">R$ <strong> ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
    
    `;

    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.open();
    janelaImpressao.document.write(`
        <html>
            <head>
                <title>Pendura do ${dataFormatada2} ${dataFormatada2}</title>
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
document.querySelector('form').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });