import React from 'react'
import Header from './Header'
import Bannerpic from './Bannerpic'
import Bannervid from './Bannervid'
import Brand from './Brand'

import Categories from './Categories.jsx'

import { useProductcontext } from './Context.jsx'
import FooterLogo from './FooterLogo.jsx'
import Footer from './Footer.jsx'
import Scroller from './Scroller.jsx'

const Home = () => {
  const {Blocks} = useProductcontext()
  const {Arrivals}= useProductcontext()
  return (
    <div>
<Header/>
<Bannerpic/>
<Bannervid/>
<Brand/>
<Scroller Blocks ={Blocks} title="In Demand"/> 
<Categories/> 
<Scroller Blocks ={Arrivals} title="Fresh Drop"/>
<FooterLogo/> 
<Footer/>
    </div>
  )
}

export default Home
