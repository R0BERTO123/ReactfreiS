import { useState } from 'react';
import Cabecalho from '../../components/components';
import { Text } from '../../components/components';
import './index.scss'



export default function Cupom() {

    const [pedido,setPedidos]=useState(0);
    const [cupom,setCupom]=useState(0);
    const [res,setRes]=useState(0);


    function cupomm(){
        let resultado = Number(pedido)-Number(cupom)
        setRes(resultado)
    }
   
    return(
        <div className='uiui'>

<Cabecalho/>

<Text titulo ='Exercício 01 - Cupom de desconto' caixa='Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.'
bordinha ='blaranja'
/>
<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input value={pedido} onChange={e=>setPedidos(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input value={cupom} onChange={e=>setCupom(e.target.value)} />
                        </div>
                        <button href='#' className='executar'onClick={cupomm} >Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O total é R${res} </h3>
                </div>


 

        </div>
    )
}