import { useState } from 'react';
import './index'

import { Link } from 'react-router-dom'

export default function Imc(){

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc,setImc]= useState(0);

    function calculaimc(){
        //let imcpeso= peso 
       // let imcaltura =altura

        let resultado= peso/(altura*2)

        setImc(resultado)

    }

    return(
        <div className='imc'>

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

    
<Link to={"/"}>  <img src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt=""  /></Link>

    <h1> Exercício 10 - Calculo de IMC com histórico</h1>


    </div>

    <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>


    <div className='calculaimc'>

        <h2>altura</h2>
        <h2>peso</h2>

        <input   placeholder='0'   onChange={e => setPeso(e.target.value)} />

        <input   placeholder='0'   onChange={e => setAltura(e.target.value)} />

        <button  className='executar'  onClick={calculaimc}>Executar</button>

        {imc.map(linha => <p>{linha}</p>)}

    </div>


        </div>
    )
}