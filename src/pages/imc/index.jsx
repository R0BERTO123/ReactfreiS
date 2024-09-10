import { useState } from 'react';
import './index'


import Cabecalho from '../../components/components';
import { Text } from '../../components/components';

export default function Imc(){

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc,setImc]= useState(0);

    function calculaimc(){
      

        let resultado= peso/(altura*2)

        setImc(resultado)

    }

    return(
        <div className='imc'>

<Cabecalho/>
<Text  titulo ='Exercício 10 - Calculo de IMC com histórico' 
caixa='Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação'
bordinha ='bmarrom'
/>

<div className='lado'>

<div className="formulario">
        <div className="campos">
            <div className="campo">

            <h2>altura</h2>
            <h2>peso</h2>

        
        <input   placeholder='0'   onChange={e => setPeso(e.target.value)} />
        <input   placeholder='0'   onChange={e => setAltura(e.target.value)} />

        <button  className='executar'  onClick={calculaimc}>Executar</button>
            </div>
 
        </div>
       </div>

       <p>Altura: 1.80 | Peso: 80.5 | Situação: Peso Normal</p>

</div>
    
      


        </div>
    )
}