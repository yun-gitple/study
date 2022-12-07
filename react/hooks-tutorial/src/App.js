import logo from './logo.svg';
import './App.css';
import Info from './Info';
import { useState } from 'react';
import Counter from './Counter';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}>
          {visible ? 'Hide' : 'Show'}
      </button>
      <hr/>
      {visible && <Average/>}
    </div>
  );
}

export default App;
