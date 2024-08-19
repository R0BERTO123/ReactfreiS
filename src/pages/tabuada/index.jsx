import "./index.scss"

import { Link } from 'react-router-dom';

import { useState } from 'react'



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

   <div className='todo2'>
    <div className='Tudo'>

    <div className="FREI">
     <img src="/assets/img/FREII.png" alt="" />
     <h2>React FreiS</h2>

     </div>
     <div className='inicio'>
      <p className='esoacinho'>inicio</p>
      
      <p>sobre</p>
     </div>

     </div>


        </div>


        <div className='textos'>

    
<Link to={"/"}>   <img src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt=""  /></Link>

    <h1> Exercio 11 - Tabuada</h1>

    </div>

    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>

       
       <div className="tabuada">

        <p>tabuada do:</p>

        <input   placeholder='0'   onChange={e => setValor(e.target.value)} />

<button  className='executar'  onClick={calcularTabuada}>Executar</button>
              
{tabuadas.map(linha => <p>{linha}</p>)}
       </div>


    </div>
    )
   }
