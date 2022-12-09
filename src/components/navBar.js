import {Link} from 'react-router-dom';
const navBar = () =>{
    return (
        <div>
        <ul>
        <link to='catalogo'>
            <li>
                catalogo
            </li>
        </link>
        <link to='detalle'>
            <li>
                catalogo
            </li>
        </link>
        </ul>
        

        <cartWidget>
                
        </cartWidget>
        </div>
    )
    /*<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">PUNTO CLEAN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">INICIO</a>
                <a class="nav-link" href="#">PRODUCTOS</a>
                <a class="nav-link disabled">LOGISTICA</a>
                
            </div>
            </div>

            <cartWidget>
                
            </cartWidget>
        </div>
    </nav>*/
        

}


export default navBar;