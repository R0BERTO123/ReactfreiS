
import './index.scss';

import { Link } from 'react-router-dom';

import Cabecalho, { Cartao } from '../../components/components';

export default function App() {
  return (
    <div className='pagina-inicio'>
            <Cabecalho/>
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                   <Cartao 
                   caminho ='/cupom'
                   retangulo ='retangulo laranja'
                   titulo='Cupom de desconto'
                   subtitulo ='Exercicio 01'
                   />
                   <Cartao
                   caminho ='/kg'
                   retangulo ='retangulo verde'
                   titulo='Converter Kg/gramas'
                   subtitulo ='Exercicio 02'
                   
                   />
                   <Cartao
                    caminho ='/quantidade'
                    retangulo ='retangulo ciano'
                    titulo='Valor total por quantidade'
                    subtitulo ='Exercicio 03'
                   
                   />
                   <Cartao
                   caminho ='/livro'
                   retangulo ='retangulo azul'
                   titulo='Leitura de livro'
                   subtitulo ='Exercicio 04'
                   
                   />
                   <Cartao
                   caminho ='/media'
                   retangulo ='retangulo outroroxo'
                   titulo='Média de notas'
                   subtitulo ='Exercicio 05'
                   />

                   <Cartao
                      caminho ='/salario'
                      retangulo ='retangulo vermelho'
                      titulo='Salário líquido'
                      subtitulo ='Exercicio 06'
                   
                   />

                   <Cartao
                     caminho ='/cor'
                     retangulo ='retangulo picina'
                     titulo='Cores primárias'
                     subtitulo ='Exercicio 07'
                   
                   />
                   <Cartao
                     caminho ='/temperatura'
                     retangulo ='retangulo preto'
                     titulo='Temperatura'
                     subtitulo ='Exercicio 08'
                   />

                   <Cartao
                     caminho ='/sorvete'
                     retangulo ='retangulo cinza'
                     titulo='Sorveteria'
                     subtitulo ='Exercicio 09'
                    />
                    <Cartao
                     caminho ='/imc'
                     retangulo ='retangulo marrom'
                     titulo='Calculo de IMC com histórico'
                     subtitulo ='Exercicio 10'
                    />
                    
                    <Cartao
                     caminho ='/tabuada'
                     retangulo ='retangulo roxo'
                     titulo='Tabuada'
                     subtitulo ='Exercicio 11'
                     />

                     <Cartao
                       caminho ='/comparador'
                       retangulo ='retangulo outroamarelo'
                       titulo='Comparador de pessoas'
                       subtitulo ='Exercicio 12'
                     />
                    
                   

                    

                    
                </div>
            </div>
        </div>
  );
}


