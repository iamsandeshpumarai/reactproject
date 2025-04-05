import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { pumacollection } from './brandcollection'

const Puma = () => {
  return (
    <div>
      <GenderCollection Collection={pumacollection} Category="Puma Shoes And Sneaker Collection" />
    </div>
  )
}

export default Puma
