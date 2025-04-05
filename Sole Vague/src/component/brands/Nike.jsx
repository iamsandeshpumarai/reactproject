import React from 'react'

import GenderCollection from '../gendercategory/GenderCollection.jsx'
import { Nikecollection } from './brandcollection'

const Nike = () => {
  return (
    <div>
     
<GenderCollection Collection= {Nikecollection} Category="Nike Shoes And Sneaker Collection"/>
    </div>
  )
}

export default Nike
