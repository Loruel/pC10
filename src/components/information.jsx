import React from 'react'
import CardText from './CardText'
import Contador from './Contador'
import ButtonAdd from './ButtonAdd'

export default function Information() {
  return (
    <div className='m-10 mr-24 w-4/6'>
      <CardText />
      <div className='flex items-end m-16'>
        <Contador />
        <ButtonAdd />
      </div>
    </div>
  )
}
