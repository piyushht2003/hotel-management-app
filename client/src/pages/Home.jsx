import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Newletter from '../components/Newletter'
import RecommendedHotels from '../components/RecommendedHotel'

const Home = () => {
  return (
    <>
        <Hero />
        <RecommendedHotels />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <Newletter />
    </>
  )
}

export default Home
