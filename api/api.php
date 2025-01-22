<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type, Authorization'); 
function connectDB() {
    require_once('../config/config.php');
    return getDBConnection();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $pdo = connectDB();
        $stmt = $pdo->query("SELECT * FROM cv_info LIMIT 1");
        $data = $stmt->fetch();
        echo json_encode($data);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Error al obtener los datos: " . $e->getMessage()]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $pdo = connectDB();
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE cv_info SET name = :name, profession = :profession, experience = :experience, email = :email WHERE id = 1");
        $stmt->execute([
            ':name' => $data['name'],
            ':profession' => $data['profession'],
            ':experience' => $data['experience'],
            ':email' => $data['email']
        ]);
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Error al actualizar los datos: " . $e->getMessage()]);
    }
}
?>
