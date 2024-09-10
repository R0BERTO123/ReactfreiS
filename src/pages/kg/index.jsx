import { useState } from 'react'
import Cabecalho,{Text} from '../../components/components'
import './index.scss'

export default function Kg(){

    const [kilos,setKilos]=useState(0);
    const [res,setRes]=useState(0);


    function converter(){
        let grama = Number(kilos)*1000
        setRes(grama)
    }

    return(
        <div className='kg'>

            <Cabecalho/>
            <Text  titulo ='Exercício 02 - Converter Kg/gramas' 
       caixa='Implementar um programa em Javascript para converter kilos em gramas.'
       bordinha ='bverde'
       />

<div className="formulario">
        <div className="campos">
            <div className="campo">
 <p>Valor em kilos</p>

        <input   value={kilos} onChange={e=>setKilos(e.target.value)}  />

<button  className='executar' onClick={converter}  >Executar</button>
            </div>
      
              

        </div>
 <p>Resultado: O total é {res} gramas</p>
 
       </div>

        </div>
    )
}