const Header = () =>{
    const view = `
    
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PlafiP</title>
        <link rel="shortcut icon" href="img/iconoP.png" type="image/x-icon">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">    
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="css/estilos.css">
    </head>
    
    <body>
    
        <nav class="navbar navbar-expand-md navbar-dark bg-success">
            <a class="navbar-brand" href="#"><img src="./img/Plafip.png" alt="logo Plafip" height="50px"></a>                
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>    
            <div class="navbar-collapse collapse" id="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/iniciarSesion.html">Iniciar Sesión</a>
                    </li>      
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/registro.html">Registro</a>
                    </li>
                </ul>
            </div>
        </nav>
    <hr>
        <div>
            <img src="./img/banner 1.jpg" alt="imagen Bienvenida PlafiP" width="100%">
        </div>
        
    <hr>
    
        <div class="row">
            <div class="col-sm-4">
                <p>
                    <h3>Nuestro Proposito</h3>
                    <p class="lead">La finalidad de PLAFIP es hacer más fácil tu vida al momento de administrar tu dinero y ser tu confidente en la planeación de tus metas y sueños cuando es necesaria una inversión económica.</p>
                </p>
            </div>
            <div class="col-sm-4">
                <p>
                    <h3>Desarrolladores</h3>
                    <p class="lead">Camila, Raul, Ronald, Mitchel y Jhon</p>
                </p>
            </div>    
            <div class="col-sm-4">
                <p>
                    <h3>Agradecimioentos</h3>
                    <p class="lead">Unab y MisionTic2022</p>
                </p>
            </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="col-md-6 d-flex flex-column mx-auto">
                    <h3>Conoce más sobre Finanzas Personales</h3>
                    <a href="https://www.youtube.com/embed/dUiZ5is-Chw">Video: La Manera Más Fácil para Entender las Finanzas</a>
                    <a href="https://www.youtube.com/embed/zaj2-42la9U">Video: Cómo administrar tu dinero con 4 CUENTAS</a>
                </div>
            </div>
        </div>
    
        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>   
        <script src="js/interactividad.js"></script>
    </body>
    </html>

    `;
    return view;
};

export default Header;