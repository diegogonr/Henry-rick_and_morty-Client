
import * as React from 'react';
import './Home.css'

export default function Home({message}) {
  return (
    <div className='home_img'>
      <div className='home_container'>
        <div className='home_title'>
           <h1>BIENVENIDO</h1>
        </div>
        <h3>{message}</h3>
      </div>
    </div>
  );
}