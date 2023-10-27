import logo from './logo.svg';
import './style/App.css';
import React, { useEffect, useState } from 'react';
import {MinKanne} from './MinKanne';
import {Oversikt} from "./Oversikt";

function App() {
  const [socketData, setSocketData] = useState('4');
  const [view, setView] = useState('min kanne');
  const [minKanne, setMinKanne] = useState(3);

  useEffect(() => {
    /*const ws = new WebSocket('ws://localhost:1337');
    ws.onopen = function() {
      console.log("connected");
    }
    ws.onmessage = function(evt) {
      console.log(evt);
      const received_msg = evt.data;
      setSocketData(received_msg); // Store the data in the state variable
    }
    ws.onclose = function() {
      console.log("dead")
    }

    return () => {
      ws.close();
    }*/
  }, []);

  function restartServer() {
    console.log("restarting");
    const ws = new WebSocket('ws://localhost:1337');
    ws.send("Restarting");
  }

  return (
      <div className="App" style={{backgroundColor: view === 'min kanne' ? '#fff' : '#f7f7f7'}}>
          <div className="nav-wrapper">
              <button className="nav-button" style={{borderBottomColor: view === 'min kanne' ? '#1B1917' : '#C8C5C3'}} onClick={() => setView('min kanne')}>Min kanne</button>
              <button className="nav-button" style={{borderBottomColor: view === 'oversikt' ? '#1B1917' : '#C8C5C3'}} onClick={() => setView('oversikt')}>Oversikt</button>
          </div>
      {view === 'min kanne' &&
          <MinKanne kaffe={socketData} />}
        {view === 'oversikt' && <Oversikt kaffe={socketData} />}
      </div>
  );
}

export default App;