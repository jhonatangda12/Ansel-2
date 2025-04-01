<?php
// Configurações do banco de dados
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'pendura');

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
function inserir_dados($conexao, $data, $nome, $produto, $valor) {
    $sql_inserir = "INSERT INTO `bella` (data, nome, produto, valor) VALUES (?, ?, ?, ?)";
    $stmt_inserir = mysqli_prepare($conexao, $sql_inserir);

    if ($stmt_inserir) {
        // Corrigido: os tipos corretos são "sssd" (string, string, string, double)
        mysqli_stmt_bind_param($stmt_inserir, "sssd", $data, $nome, $produto, $valor);
        if (mysqli_stmt_execute($stmt_inserir)) {
            mysqli_stmt_close($stmt_inserir);
            return true; // Retorna true em caso de sucesso
        } else {
            $erro = "Erro ao inserir dados: " . mysqli_stmt_error($stmt_inserir);
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
    $valor = isset($_POST['valor']) ? filter_var($_POST['valor'], FILTER_VALIDATE_FLOAT) : null; // Validação do valor
    $data = isset($_POST['data']) ? sanitizar_dados($conexao, $_POST['data']) : null;
    $produto = isset($_POST['produto']) ? sanitizar_dados($conexao, $_POST['produto']) : null;
    $nome = isset($_POST['nome']) ? sanitizar_dados($conexao, $_POST['nome']) : null; // Corrigido: captura corretamente 'nome'

    // Verifica se todos os campos foram preenchidos e são válidos
    if ($valor !== false && $data !== null && $nome !== null && $produto !== null) {
        // Insere os dados no banco de dados
        $resultado_insercao = inserir_dados($conexao, $data, $nome, $produto, $valor);

        if ($resultado_insercao === true) {
            echo "Dados inseridos com sucesso!";
        } else {
            echo "Erro ao inserir os dados: " . $resultado_insercao;
        }
    } else {
        echo "Por favor, preencha todos os campos corretamente!";
    }
}

// Fecha a conexão com o banco de dados
mysqli_close($conexao);
?>
