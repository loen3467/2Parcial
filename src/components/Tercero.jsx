import React from 'react'
import { Primer } from './Primer';
import { Segundo } from './Segundo';
import '../styles/Tercer.css';

function Tercer() {
  return (
    <div className='tercer-container'>
        
        <Segundo/>
        <Primer/>
    </div>
  )
}

export {Tercer}