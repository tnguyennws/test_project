import React from 'react';

function AffichageChrono(chrono) {
  const h = () => {
     if(chrono.time.h === 0){
       return '';
     }else {
       return <span>{(chrono.time.h >= 10)? chrono.time.h : "0" + chrono.time.h}</span>;
     }
  }
  //Affichage des nombres
  return (
    <div>
       {h()}&nbsp;&nbsp;
       <span>{(chrono.time.m >= 10)? chrono.time.m : "0"+ chrono.time.m}</span>&nbsp;:&nbsp;
       <span>{(chrono.time.s >= 10)? chrono.time.s : "0"+ chrono.time.s}</span>&nbsp;:&nbsp;
       <span>{(chrono.time.ms >= 10)? chrono.time.ms : "0"+ chrono.time.ms}</span>
    </div>
  );
}

export default AffichageChrono;