import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLetest from '../Components/NewLetest/NewLetest'

const Shop = () => {
  return (
    <div style={{paddingTop: '76px'}}>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewLetest/>
    </div>
  )
}

export default Shop
  