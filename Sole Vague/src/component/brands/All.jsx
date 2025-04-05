import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { allshoes } from './brandcollection'

const All = () => {
  return (
    <div>
      <GenderCollection Collection={allshoes} Category=" Shoes And Sneaker Collection"/>
    </div>
  )
}

export default All
