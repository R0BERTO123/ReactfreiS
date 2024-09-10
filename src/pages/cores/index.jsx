import { useState } from 'react'
import Cabecalho,{Text} from '../../components/components'
import './index.scss'


export default function Cores(){

    const [cor1,setCor1]=useState()
    const [cor2,setCor2]=useState()
    const [res,setRes]=useState('nao')


    function cores(){
    
        let primarias=false

       
      
        setRes(primarias)
        
    }

    return(
        <div className='cor'>
            
            <Cabecalho/>
            <Text titulo ='Exercício 07 - Cores primárias' 
            caixa='Implementar um programa em javascript para verificar se duas cores são primárias'
bordinha ='bpicina'/>


<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Cor 1</label>
                            <input value={cor1} onChange={e=>setCor1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Cor 2</label>
                            <input value={cor2} onChange={e=>setCor2(e.target.value)}  />
                        </div>
                        <button href='#' className='executar'onClick={cores} >Executar</button>
                    </div>
                    <h3 className='resultado'>{res}</h3>
                </div>

        </div>
    )
}