import Cabecalho,{Text} from '../../components/components'
import './index.scss'

export default function Livro(){

    return(
        <div className='livro'>

            <Cabecalho/>

            <Text  titulo ='Exercício 04 - Leitura de livro' 
       caixa='Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página'
       bordinha ='bazul'
       />

<div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nome do livro</label>
                            <input  />
                        </div>
                        <div className='campo'>
                            <label>Total de páginas</label>
                            <input  />
                        </div>
                        <div className='campo'>
                            <label>Tempo em segundos de leitura</label>
                            <input  />
                        </div>
                        <button href='#' className='executar' >Executar</button>
                    </div>
                    
                    <h3 className='resultado'></h3>
                    <br />
                    <br />
                    <p>Você lerá Java para iniciantes em 15.64 horas.</p>
                    
                    
                </div>
                

      

        </div>
    )
}
    
