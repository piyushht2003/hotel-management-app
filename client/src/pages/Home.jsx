import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Newletter from '../components/Newletter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <Newletter />
    </>
  )
}

export default Home
