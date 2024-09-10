import './index.scss'
import Cabecalho from '../../components/components';
import { Text } from '../../components/components';
import { useState } from 'react';

export default function Sorveteria(){

    const [sorvete,setSorvete]=useState(0);
    const [res,setRes]=useState(0);

   


    return(
        <div className='Sorveteria'>

            <Cabecalho />
            <Text  titulo ='Exercício 09 - Sorveteria' 
            caixa ='Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.'
            bordinha ='bcinza'
            />

<div className="formulario">
        <div className="campos">
            <div className="campo">
 <p>Total de gramas</p>

        <input   value={sorvete} onChange={e=>setSorvete(e.target.value)}  />

<button  className='executar' >Executar</button>
            </div>
      
              

        </div>
 <p>O total a pagar é R$ {res}</p>
 
       </div>

            

        </div>
    )
}