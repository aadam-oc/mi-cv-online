<?php
// config.php

define('DB_HOST', 'localhost');
define('DB_USER', 'cv_user');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'cv_db');

// Funcion para establecer la conexion a la base de datos
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $pdo = new PDO($dsn, DB_USER, DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Conexion fallida: ' . $e->getMessage()]);
        exit;
    }
}
?>
