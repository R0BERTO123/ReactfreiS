
import './index.css';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
     <p>oi</p>

     <h2>
      <Link to={'/contato'}>nao aperta</Link>
     </h2>
    </div>
  );
}


