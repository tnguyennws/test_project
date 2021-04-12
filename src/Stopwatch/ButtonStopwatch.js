import React from 'react';

function ButtonStopwatch(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button onClick={props.stop}>Stop</button>
          <button onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button onClick={props.resume}>Resume</button>
          <button onClick={props.reset}>Reset</button>
        </div> : ""
      }
    
    </div>
  );
}

export default ButtonStopwatch;