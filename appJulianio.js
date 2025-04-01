

function enviarMensagem() {
    var mensagem = document.getElementById("mensagem").value;
    alert("Mensagem enviada:\n" + mensagem); // Substitua por sua lógica de envio
    document.getElementById("mensagem").value = "";//limpa o campo de mensagem
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
    const numero3 = document.getElementById("numero3").value;
    const numero4 = document.getElementById("numero4").value;
    const numero5 = document.getElementById("numero5").value;
    const numero6 = document.getElementById("numero6").value;
    const numero7 = document.getElementById("numero7").value;
    const numero8 = document.getElementById("numero8").value;
    const numero9 = document.getElementById("numero9").value;
    const numero10 = document.getElementById("numero10").value;
    const numero11 = document.getElementById("numero11").value;
    const numero12 = document.getElementById("numero12").value;
    const numero13 = document.getElementById("numero13").value;
    const numero14 = document.getElementById("numero14").value;
    const numero15 = document.getElementById("numero15").value;
    const numero16 = document.getElementById("numero16").value;
    const numero17 = document.getElementById("numero17").value;
    const numero18 = document.getElementById("numero18").value;
    const numero19 = document.getElementById("numero19").value;
    const numero20 = document.getElementById("numero20").value;
    const taxa1 = document.getElementById("taxa1").value;
    const soma = document.getElementById("resultadoSoma").textContent;
    const pagar = document.getElementById("valorAPagar").textContent;
  
    let conteudoImpressao = `
        <p style="font-size: 30px; text-align: center;"><strong>${dataFormatada}</strong></p>
        <p style="font-size: 30px; text-align: center;"><strong> ${nome}</strong></p>
    `;
  
    // Adiciona os números apenas se forem diferentes de zero
    if (numero1 !== "0" && numero1 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero1}</strong></p>`;
    if (numero2 !== "0" && numero2 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero2}</strong></p>`;
    if (numero3 !== "0" && numero3 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero3}</strong></p>`;
    if (numero4 !== "0" && numero4 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero4}</strong></p>`;
    if (numero5 !== "0" && numero5 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero5}</strong></p>`;
    if (numero6 !== "0" && numero6 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero6}</strong></p>`;
    if (numero7 !== "0" && numero7 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero7}</strong></p>`;
    if (numero8 !== "0" && numero8 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero8}</strong></p>`;
    if (numero9 !== "0" && numero9 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero9}</strong></p>`;
    if (numero10 !== "0" && numero10 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero10}</strong></p>`;
    if (numero11 !== "0" && numero11 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero11}</strong></p>`;
    if (numero12 !== "0" && numero12 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero12}</strong></p>`;
    if (numero13 !== "0" && numero13 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero13}</strong></p>`;
    if (numero14 !== "0" && numero14 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero14}</strong></p>`;
    if (numero15 !== "0" && numero15 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero15}</strong></p>`;
    if (numero16 !== "0" && numero16 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero16}</strong></p>`;
    if (numero17 !== "0" && numero17 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero17}</strong></p>`;
    if (numero18 !== "0" && numero18 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero18}</strong></p>`;
    if (numero19 !== "0" && numero19 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero19}</strong></p>`;
    if (numero20 !== "0" && numero20 !== "") conteudoImpressao += `<p style="font-size: 18px; text-align: center;"><strong> ${numero20}</strong></p>`;
  
    conteudoImpressao += `
        <p style="font-size: 20px; text-align: center;"><strong>Taxa: ${taxa1}</strong></p>
        <p style="font-size: 20px; text-align: center;"><strong>Subtotal: ${soma}</strong></p>
        <p style="width: 200px; height: 50px; font-size: 40px; border: 2px dashed black; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
        <strong>${pagar}</strong></p>
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
  
  function calcularResultados() {
      // Obter os valores dos campos de entrada
      let num1 = parseFloat(document.getElementById("numero1").value);
      let num2 = parseFloat(document.getElementById("numero2").value);
      let num3 = parseFloat(document.getElementById("numero3").value);
      let num4 = parseFloat(document.getElementById("numero4").value);
      let num5 = parseFloat(document.getElementById("numero5").value);
      let num6 = parseFloat(document.getElementById("numero6").value);
      let num7 = parseFloat(document.getElementById("numero7").value);
      let num8 = parseFloat(document.getElementById("numero8").value);
      let num9 = parseFloat(document.getElementById("numero9").value);
      let num10 = parseFloat(document.getElementById("numero10").value);
      let num11 = parseFloat(document.getElementById("numero11").value);
      let num12 = parseFloat(document.getElementById("numero12").value);
      let num13 = parseFloat(document.getElementById("numero13").value);
      let num14 = parseFloat(document.getElementById("numero14").value);
      let num15 = parseFloat(document.getElementById("numero15").value);
      let num16 = parseFloat(document.getElementById("numero16").value);
      let num17 = parseFloat(document.getElementById("numero17").value);
      let num18 = parseFloat(document.getElementById("numero18").value);
      let num19 = parseFloat(document.getElementById("numero19").value);
      let num20 = parseFloat(document.getElementById("numero20").value);
      let taxa01 = parseFloat(document.getElementById("taxa1").value);
  
      // Verificar se os valores são números válidos
      if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || 
        isNaN(num6) ||isNaN(num7) ||isNaN(num8) ||isNaN(num9) ||isNaN(num10) || isNaN (num11) || 
        isNaN (num12) ||isNaN (num13) ||isNaN (num14) ||isNaN (num15) ||isNaN (num16) ||isNaN (num17) || 
        isNaN (num18) ||isNaN (num19) ||isNaN (num20) || isNaN(taxa01)
      ) {
        alert("Por favor, insira números válidos.");
        return;
      }
    // Calcular a soma e a multiplicação
    let soma = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12 + num13 + num14 + num15 + num16 + num17 + num18 + num19 + num20) - taxa01;
    let multiplicacao = soma * 0.115;
    let pagar = multiplicacao + taxa01;
    let taxadodia = taxa01 + 0;
  
      // Exibir os resultados nos elementos HTML
      document.getElementById("resultadoSoma").textContent = soma.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });// Formatação para português do Brasil
      document.getElementById("resultadoTaxas").textContent = taxadodia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      document.getElementById("valorAPagar").textContent = pagar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

