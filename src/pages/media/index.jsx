import { useState } from 'react'
import Cabecalho,{Text} from '../../components/components'
import './index.scss'

export default function Média(){

    const [nota1,setNota1]=useState(0)
    const [nota2,setNota2]=useState(0)
    const [nota3,setNota3]=useState(0)
    const [res,setRes]=useState(0)

    function media(){
        let final =(Number(nota1) +Number(nota2) +Number(nota3))/3
        setRes(final)
    }

    return(
        <div className='media'>

            <Cabecalho/>

            <Text titulo ='Exercício 05 - Média de notas' 
            caixa='Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.'
bordinha ='outroroxo'/>

<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nota 1</label>
                            <input value={nota1} onChange={e=>setNota1(e.target.value)}  />
                        </div>
                        <div className='campo'>
                            <label>Nota 2</label>
                            <input value={nota2} onChange={e=>setNota2(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Nota 3</label>
                            <input value={nota3} onChange={e=>setNota3(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={media}>Executar</button>
                    </div>
                    
                    <h3 className='resultado'></h3>
                    <p>{res}</p>
                    
                </div>


        </div>
    )
}