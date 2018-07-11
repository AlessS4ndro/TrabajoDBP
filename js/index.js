addEventListener('load',inicializarEventos,false);
function inicializarEventos()
{
  var boton=document.getElementById("botonLogin");
  var botonBusqueda = document.getElementById("botonBusqueda");
  var exhibidora=document.getElementsByClassName("imagenesCamaras");
  for ( x = 0;x<exhibidora.length;x++){
    exhibidora[x].addEventListener("click",presionarImagen,false);
  }
  //var botonIngresar=document.getElementById("botonIngresar");
  boton.addEventListener("click",presionarEnlace,false);
  botonBusqueda.addEventListener("click",presionarLupa,false);

  //botonIngresar.addEventListener("click",presionarEnlace,false);
}
function presionarEnlace(e)
{
  e.preventDefault();
  var url=e.target.getAttribute("href");
  mostrarDatos(url);
}
var conexion1;
function mostrarDatos(url)
{
  conexion1= new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open("GET",url,true);
  conexion1.send();
}

function procesarEventos()
{
  var campoAjax = document.getElementById("campoAjax");
  if(conexion1.readyState==4){
    campoAjax.innerHTML = conexion1.responseText;
  }
  else{
    campoAjax.innerHTML= "cargando....";
  }
  //inicializarEventos();
  //alert(botonIngresar.value);
  botonIngresar.addEventListener("click",presionarSubmit,false);

}
function presionarSubmit(e)
{
  e.preventDefault();
  url="php/login.php";
  enviarSubmit(url);
}
function enviarSubmit(url)
{
  var http = new XMLHttpRequest();
  id = document.getElementById("ID");
  password =document.getElementById("PASSWORD");
  var botonIngresar=document.getElementById("botonIngresar");

  var params = "ID="+id.value+"&PASSWORD="+password.value+"&FORM="+botonIngresar.value;  //'orem=ipsum&name=binny'
  http.open('POST', url, true);

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {
        campoAjax.innerHTML = http.responseText;
        mensajeBienvenida = document.getElementById("mensajeBienvenida").innerHTML;
        if(mensajeBienvenida="BIENVENIDO"){
          mostrarCarrito();
          if(http.readyState == 4 && http.status == 200) {
        }
      }
      else{
        campoAjax.innerHTML= "cargando....";
      }
  }
  http.send(params);
}
function mostrarCarrito(){
  carrito= document.getElementById("carrito");
  carrito.innerHTML="<h3 >Carrito de compras</h3><table>  <td><tr>Producto</tr><tr>Precio</tr></td>  <td id='productosEnElCarro'></td></table>"
}
function presionarImagen(e)
{
  e.preventDefault();
  url="php/descripcionProducto.php";
  var src=e.target.getAttribute("src");
  //src=src.substring(3);
  //src="img"+src;
  var cod=e.target.getAttribute("name");
  url=url+"?src="+src+"&cod="+cod;
  mostrarImagen(url);

}

function mostrarImagen(url)
{
  exhibicion = document.getElementById("exhibicion");
  var conexion = new XMLHttpRequest();
  conexion.onreadystatechange = function() {
    if(conexion.readyState==4){
      exhibicion.innerHTML = conexion.responseText;
      var flecha=document.getElementById("flecha");
      var billetera=document.getElementById("billetera");
      flecha.addEventListener("click",presionarFlecha,false);
      
    }
    else{
      exhibicion.innerHTML= "cargando....";
    }
  }
  //inicializarEventos();
  //alert(botonIngresar.value);;
  conexion.open("GET",url,true);
  conexion.send();
  //addEventListener("click",comprar,false);
}
function presionarLupa(e)
{
  e.preventDefault();
  formularioBuscar();
}
function formularioBuscar()
{
  conexion = new XMLHttpRequest();

  conexion.onreadystatechange = function() {
    if(conexion.readyState==4){
      campoAjax.innerHTML = conexion.responseText;
    }
    else{
      campoAjax.innerHTML= "cargando....";
    }
  }
  conexion.open("GET","php/busqueda.php",true);
  conexion.send();
}
function presionarFlecha(e)
{
  e.preventDefault();
  volver();
}
function volver()
{
  conexion = new XMLHttpRequest();

  conexion.onreadystatechange = function() {
    if(conexion.readyState==4){
      exhibicion.innerHTML = conexion.responseText;
    }
    else{
      exhibicion.innerHTML= "cargando....";
    }
  }
  conexion.open("GET","php/productos.php",true);
  conexion.send();
}
/*function comprar()
{

}*/
