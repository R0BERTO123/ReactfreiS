
import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='todo2'>
    <div className='Tudo'>

    <div className="FREI">
     <img src="/assets/img/FREII.png" alt="" />
     <h2>React FreiS</h2>

     </div>
     <div className='inicio'>
      <p className='esoacinho'>inicio</p>
      
      <p>sobre</p>
     </div>

     </div>

    <h1>Escolha um  treino...</h1>

    <div className='cartoes'>

      <div className='cartao'>

        <div className='cor1'>
          <p ></p>
        </div>
        <p>cupom de desconto</p>
        <p><Link to={"/cupom"}>exercicio 1</Link></p>
      </div>

      <div className='cartao'>

<div className='cor2'>
  <p></p>
  
</div>
<p>cupon de desconto</p>
<p><Link to={"/tabuada"}>exercicio 11</Link></p>
</div>

<div className='cartao'>

<div className='cor3'>
  <p></p>
</div>
<p>cupon de desconto</p>
<p><Link to={"/imc"}>exercicio 10</Link></p>
</div>



    </div>

     <h2>
      <Link to={'/contato'}></Link>
     </h2>
    
     </div>
  );
}


