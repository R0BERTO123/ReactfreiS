import { useState } from 'react'
import Cabecalho ,{Text}from '../../components/components'
import './index.scss'

export default function Salario(){

    const [salario,setSalario]=useState(0)
    const [bonus,setBonus]=useState(0)
    const [desconto,setDesconto]=useState(0)
    const [res,setRes]=useState(0)

    function salari0o(){
        let total = Number(salario)*(Number(bonus)/100)-Number(desconto)
        setRes(total)
    }


    return(
        <div className='salario'>

            <Cabecalho/>
            <Text  titulo ='Exercício 03 - Valor total por quantidade' 
caixa='Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente'
bordinha ='bvermelho'
/>

<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Salario base</label>
                            <input value={salario} onChange={e=>setSalario(e.target.value)}/>
                        </div>
                        <div className='campo'>
                            <label>Bônus mensal em porcentagem</label>
                            <input value={bonus} onChange={e=>setBonus(e.target.value)}/>
                        </div>
                        <div className='campo'>
                            <label>Total de descontos</label>
                            <input value={desconto} onChange={e=>setDesconto(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={salari0o}>Executar</button>
                    </div>
                    
                    <h3 className='resultado' ></h3>
                    <br />
                    <br />
                    <p>Seu salário líquido é de R${res} </p>
                    
                </div>


        </div>
    )
}