import App from './pages/app/index';
import Cupom from './pages/cupom/index';




import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/cupom' element={<Cupom />} />

            <Route/>
            </Routes>
        </BrowserRouter>
    )
}