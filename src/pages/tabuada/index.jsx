import "./index.scss"


import { useState } from 'react'
import Cabecalho from "../../components/components";
import { Text } from "../../components/components";



export default function E11() {
   const [valor, setValor] = useState(0);
   const [tabuadas, setTabuadas] = useState([]);

   function calcularTabuada() {
       let tabuada = []
       let zero =0

       for (let i = 0; i <= 10; i++) {
           let resultado = zero * valor
           let tabuadaTexto = `${valor} x ${zero} = ${resultado}`

           tabuada.push(tabuadaTexto)
           zero++
       }

       setTabuadas(tabuada)
   }
       
    

    return(
        <div className="tabuada">

    <Cabecalho />


       <Text  titulo ='Exercício 11 - Tabuada' 
       caixa='Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.'
       bordinha ='broxo'
       />
       
       <div className="formulario">
        <div className="campos">
            <div className="campo">
 <p>tabuada do:</p>

        <input   placeholder='0'   onChange={e => setValor(e.target.value)} />

<button  className='executar'  onClick={calcularTabuada}>Executar</button>
            </div>
      
              

        </div>
{tabuadas.map(linha => <p>{linha}</p>)}
 
       </div>


    </div>
    )
   }
