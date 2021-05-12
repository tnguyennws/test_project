import React from 'react';

function BoutonChrono(bouton) {
  return (
    <div>
      {(bouton.status === 0)? 
        <button onClick={bouton.start}>Start</button> : ""
      }

      {(bouton.status === 1)? 
        <div>
          <button onClick={bouton.stop}>Stop</button>
          <button onClick={bouton.reset}>Reset</button>
        </div> : ""
      }

     {(bouton.status === 2)? 
        <div>
          <button onClick={bouton.resume}>Resume</button>
          <button onClick={bouton.reset}>Reset</button>
        </div> : ""
      }
    
    </div>
  );
}

export default BoutonChrono;