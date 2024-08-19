import App from './pages/app/index';
import Cupom from './pages/cupom/index';
import Tabuada from './pages/tabuada';
import Imc from './pages/imc';




import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/cupom' element={<Cupom />} />
                <Route path='/tabuada'element={<Tabuada/>}/>
                <Route path='/imc'element={<Imc/>}/>

            <Route/>
            </Routes>
        </BrowserRouter>
    )
}