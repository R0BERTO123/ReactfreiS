import './index.scss'

import { Link } from 'react-router-dom';

export default function Cupom() {
   
    return(
        <div className='uiui'>

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

 <div className='textos'>

    
<Link to={"/"}>   <img src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt=""  /></Link>

    <h1> Exercicio 01 Cupom de descomto</h1>

    </div>

    

    <div className='caixinha'>
        <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>

    </div>

    <div className='calculacupom'>
        <h2>imforme o valor do pedido</h2>
        <input type="text" />
        <h2>imforme o valor do cupom</h2>
        <input type="text" />
        <h3>Executar</h3>
    </div>

 

        </div>
    )
}