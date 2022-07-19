import './App.css';
import { useState } from 'react';
import BSMComponent from './algorithms/BSM/BSMComponent.tsx';
import ITMComponent from './algorithms/ITM/ITMComponent.tsx';

function App() {

const [showBSM, setShowBSM] = useState<boolean>(false)
const [showITM, setShowITM] = useState<boolean>(false)

  return (
    <div>
        <nav>
        <button onClick={() => setShowBSM(!showBSM)}>BSM</button>
        <button onClick={() => setShowITM(!showITM)}>ITM</button>
        </nav>
        {showBSM && <BSMComponent/>}
        {showITM && <ITMComponent/>}
    </div>
  );
}

export default App;
