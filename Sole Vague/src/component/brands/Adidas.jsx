import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { Adidascollection } from './brandcollection'

const Adidas = () => {
  return (
    <div>
      <GenderCollection Collection={Adidascollection} Category="Adidas Shoes And Sneaker Collection"/>
    </div>
  )
}

export default Adidas
