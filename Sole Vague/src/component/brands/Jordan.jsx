import React from 'react'
import GenderCollection from '../gendercategory/GenderCollection'
import { Jordancollection } from './brandcollection'

const Jordan = () => {
  return (
    <div>
      <GenderCollection Collection={Jordancollection} Category="Jordan Shoes And Sneaker Collection" />
    </div>
  )
}

export default Jordan
