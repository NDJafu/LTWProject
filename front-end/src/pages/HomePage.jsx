import React from 'react'
import Cover from '../components/Banner/Cover'
import HomeItems from '../components/Products/HomeItems'

const HomePage = () => {
  return (
    <section>
        <Cover/>
        <section className="">
        <HomeItems/>
        </section>
    </section>  
  )
}

export default HomePage