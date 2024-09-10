import { useState } from 'react'
import Cabecalho,{Text} from '../../components/components'
import './index.scss'


export default function Quantidade(){

    const [pequeno, setPequeno]=useState(0);
    const [medio, setMedio]=useState(0);
    const [grande, setGrande]=useState(0);
    const [res, setRes]=useState(0);

    function acai(){
        let qpequeno = Number(pequeno)* 13.50
        let qmedio = Number(medio)* 15
        let qgrande = Number(grande)* 17.50
        let total =qpequeno + qmedio + qgrande
        setRes(total)
    }

    return(
        <div className='quantidade'>

            <Cabecalho/>
            <Text  titulo ='Exercício 03 - Valor total por quantidade' 
caixa='Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente'
bordinha ='bbebe'
/>

<div className="formulario">
        <div className="campos">
            <div className="campo">
  <div className='canpinho'>
    <div  className='reto'>

<p>Quantidade pequeno</p>
    <input   placeholder='0'value={pequeno} onChange={e=>setPequeno(e.target.value)}  />
    </div>
    <div className='reto'>
        <p>Quantidade medio</p>
        <input   placeholder='0'value={medio} onChange={e=>setMedio(e.target.value)}  />
    </div>
        <div className='reto'>
            <p>Quantidade grande</p>

        <input   placeholder='0'  value={grande} onChange={e=>setGrande(e.target.value)}/>
        </div>
        
    </div>   
 

</div>
        
<button  className='executar' onClick={acai}>Executar</button>
            </div>
      <p>Resultado: O total é R${res} </p>
              

        </div>
<p></p>
 
       </div>




        
    )
}