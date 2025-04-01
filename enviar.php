<?php
// Configurações do banco de dados
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'teste2');

// Função para conectar ao banco de dados
function conectar_banco_de_dados() {
    $conexao = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if (!$conexao) {
        die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
    }
    mysqli_set_charset($conexao, "utf8"); // Define o charset para UTF-8
    return $conexao;
}

// Função para escapar e sanitizar os dados
function sanitizar_dados($conexao, $dado) {
    return mysqli_real_escape_string($conexao, trim($dado)); // Remove espaços e previne SQL Injection
}

// Função para inserir dados no banco de dados
function inserir_dados($conexao, $valor, $datatime) {
    $sql_inserir = "INSERT INTO eder (valor, datatime) VALUES (?, ?)";
    $stmt_inserir = mysqli_prepare($conexao, $sql_inserir);

    if ($stmt_inserir) {
        mysqli_stmt_bind_param($stmt_inserir, "ds", $valor, $datatime); // 'sds' para string, double, string
        if (mysqli_stmt_execute($stmt_inserir)) {
            mysqli_stmt_close($stmt_inserir);
            return true; // Retorna true em caso de sucesso
        } else {
            $erro = "Erro ao inserir dados: " . mysqli_error($conexao);
            mysqli_stmt_close($stmt_inserir);
            return $erro; // Retorna a mensagem de erro
        }
    } else {
        return "Erro na preparação da consulta: " . mysqli_error($conexao);
    }
}

// Conecta ao banco de dados
$conexao = conectar_banco_de_dados();

// Verifica se a requisição HTTP é do tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém e sanitiza os dados do formulário
   // $nome = isset($_POST['nome']) ? sanitizar_dados($conexao, $_POST['nome']) : null;
    $valor = isset($_POST['valor']) ? filter_var($_POST['valor'], FILTER_VALIDATE_FLOAT) : null; // Validação do valor
    $datatime = isset($_POST['datatime']) ? sanitizar_dados($conexao, $_POST['datatime']) : null;

    // Verifica se todos os campos foram preenchidos e são válidos
    if ($valor !== false && $datatime) { // Verifica se $valor é um float válido
        // Formata a data/hora para o formato aceito pelo MySQL
        $datatime_formatado = date('Y-m-d H:i:s', strtotime($datatime));

        // Insere os dados no banco de dados
        $resultado_insercao = inserir_dados($conexao, $valor, $datatime_formatado);

        if ($resultado_insercao === true) {
            echo "Dados inseridos com sucesso!";
        } else {
            echo $resultado_insercao; // Exibe a mensagem de erro retornada pela função
        }
    } else {
        echo "Por favor, preencha todos os campos corretamente!";
    }
}

// Fecha a conexão com o banco de dados
mysqli_close($conexao);
?>
