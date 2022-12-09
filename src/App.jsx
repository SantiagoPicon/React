import react from 'react';
import navBar from './components/navBar'
import itemListContainer from './components/itemListContainer'
import { BrowserRouter } from 'react-router-dom';
import catalogo from './components/catalogo';
import detalleDeProducto from './components/detalleDeProducto';

const App = () => {
return (
    <BrowserRouter>
    <navBar/>
    <routes>
        <route exact patch= '/' element={<itemListContainer/>}/>
        <route patch='catalogo' element= {<catalogo/>} />
        <route patch='detalle/:name' element={detalleDeProducto}/>

    </routes>
        <itemListContainer.js/>
    </BrowserRouter>
);


}

export default App;
