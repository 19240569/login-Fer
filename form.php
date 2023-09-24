<?php
$pdo = new PDO('mysql:host=localhost;dbname=users', 'root', '');

if (isset($_POST['acao'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = $pdo->prepare("INSERT INTO `usuarios` VALUES (null,?,?,?)");
    $sql->execute(array($nome,$email,$senha));

    sleep(2);
    header('Location:http://localhost/Projeto_Login/index.html');
}
