import App from './pages/app/index';
import Contato from './pages/contato/index'
import Naoencontrado from './pages/nao encontrado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />

            <Route path='*'element={<Naoencontrado/>}/>
            </Routes>
        </BrowserRouter>
    )
}