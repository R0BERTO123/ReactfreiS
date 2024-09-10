import Cabecalho,{Text} from '../../components/components'
import './index.scss'

export default function Temperatura(){

    return(
        <div className='temperatura'>

            <Cabecalho/>

            <Text titulo ='Exercício 08 - Temperatura' 
            caixa='Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação'
bordinha ='bpreto'/>

<div className='tabela'>
<img src="/assets/img/image 3.png" alt="" />
</div>


<div className="formulario">
        <div className="campos">
            <div className="campo">
 <p>Temperatura </p>

        <input     />

<button  className='executar' >Executar</button>
            </div>
      
              

        </div>
 <p>A situação para sua temperatura é Febre Alta </p>
 
       </div>

        </div>
    )
}