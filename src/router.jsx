import App from './pages/app/index';
import Cupom from './pages/cupom/index';
import Tabuada from './pages/tabuada';
import Imc from './pages/imc';
import Sobre from './pages/sobre';
import Sorveteria from './pages/sorveteria';
import Kg from './pages/kg';
import Quantidade from './pages/quantidade';
import Cores from './pages/cores';
import Média from './pages/media';
import Salario from './pages/salario';
import Temperatura from './pages/temperatura';
import Livro from './pages/livro';
import Comparador from './pages/comparador';




import { BrowserRouter, Routes, Route } from 'react-router-dom';





export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/cupom' element={<Cupom />} />
                <Route path='/tabuada'element={<Tabuada/>}/>
                <Route path='/imc'element={<Imc/>}/>
                <Route path='/sobre'element={<Sobre/>}/>
                <Route path='/sorvete'element={<Sorveteria/>}/>
                <Route path='/kg'element={<Kg/>}/>
                <Route path='/quantidade'element={<Quantidade/>}/>
                <Route path='/cor'element={<Cores/>}/>
                <Route path='/media'element={<Média/>}/>
                <Route path='/salario'element={<Salario/>}/>
                <Route path='/temperatura'element={<Temperatura/>}/>
                <Route path='/livro'element={<Livro/>}/>
                <Route path='/comparador'element={<Comparador/>}/>

            <Route/>
            </Routes>
        </BrowserRouter>
    )
}