
import './components.scss'
import { Link } from "react-router-dom"

export default function Cabecalho(){

    return(
        
        <div className='comp-cabecalho'>
        <div className='titulo'>
            <img src='/assets/img/FREII.png' alt='logo'/>
            <h1>
                React FreiS
            </h1>
        </div>
        <div className='links'>
            <Link to='/' className='link'>Inicio</Link>
            <Link to='/sobre' className='link'>Sobre</Link>


            
        </div>
    </div>
   
    )
}

export function Text(props){

    return(
        <div className='comp-text'>
            <div className='textos'>

    
<Link to={"/"}>⬅

</Link>

    <h1>{props.titulo}</h1>

    

    </div>
    <div className='bordinha'>
        <p className={props.bordinha}></p>
    </div>

    

    <div className='caixinha'>
        <p>{props.caixa}</p>

    </div>
        </div>
    )
}

export function Cartao(props){

    return(
       
       
                    <Link to={props.caminho} className='link'>
                        <div className='card'>
                            <div className={props.retangulo}/>
                            <h3 className='titulo'>{props.titulo}</h3>
                            <h4 className='subtitulo'>{props.subtitulo}</h4>
                        </div>
                    </Link>

        
    )
}