
<?php
	//	INICIAMOS LA CONEXION
  header('Content-Type: text/html ; charset=utf-8');
  if(!$_POST["FORM"] || $_POST["FORM"]!="ingresar"){
    ?>
    <h3 style="color: #000000">Bienvenido a nuestra tienda virtual</h3>
    <h4 style="color:#000000">Ingrese sus datos</h4>
    <form action="php/login.php" method="post" >
      <label for= "ID" style="color: #000000">ID</label>
      <input id="ID" type ="text" name="ID" required>
      <label for="password" style="color: #000000">Contraseña</label>
      <input id="PASSWORD" type ="password" name = "PASSWORD" required>
      <input id ="botonIngresar" type ="submit" name ="FORM" value="ingresar" >
    </form>
    <?php
  }
  else{
    $interruptor=0;
    $password=($_POST["PASSWORD"]);//echo $password;
    $ID=$_POST['ID'];

    $link=mysqli_connect('localhost','root','merino','TiendaVirtual',3306);
    if(!$link){
      echo" no conecta esta mierda";
    }

    $sql  = 'SELECT * FROM `LOGIN`';
    $result=mysqli_query($link,$sql);

    while($fila=mysqli_fetch_array($result)){
      if($fila['ID']==$ID && $fila['PASSWORD']==$password){
        echo "<h4 id='mensajeBienvenida' style='color:#000000'>BIENVENIDO</h4>"."<br>";
        echo "<h4 style='color:#000000'>USUARIO: </h4>";
        echo "<h4 style='color:#000000'>".$fila['ID']."</h4>"."<br>";
        $interruptor=1;
        break;
      }
    }

    if($interruptor==0){
      echo "<strong style='color:#000000'>FAVOR DE REGISTRARSE</strong>";
    }

    mysqli_free_result($result);
    mysqli_close($link);
  }
?>
