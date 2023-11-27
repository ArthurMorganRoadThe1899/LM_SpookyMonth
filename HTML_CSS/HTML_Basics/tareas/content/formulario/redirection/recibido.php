<html>
<body>

Bienvenido <?php echo $_GET["name"]; ?> <?php echo $_GET['surname'];?>
<br>
Tu dirección de correo es: <?php echo $_GET["email"]; ?>

<?php
$poblacion = $_GET['pob'];
$password = $_GET['password'];
$descripcion = $_GET['descripcion'];
$genero = $_GET['genero'];
?>
</body>
</html>