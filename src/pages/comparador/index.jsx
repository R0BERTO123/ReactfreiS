import Cabecalho,{Text} from '../../components/components'
import './index.scss'

export default function Comparador(){

    return(
        <div className='comparador'>

            <Cabecalho/>

            <Text titulo ='Exercício 12 - Comparador de pessoas' 
            caixa='Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.'
bordinha ='boutroamarelo'
/>

<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nome</label>
                            <input   />
                        </div>
                        <div className='campo'>
                            <label>Idade</label>
                            <input  />
                        </div>
                        <div className='campo'>
                            <label>Sexo</label>
                            <input  />
                        </div>
                        <button href='#' className='executar' >Executar</button>
                    </div>
                    
                    <h3 className='resultado'></h3>
                    <p></p>
                    
                </div>


        </div>
    )
}