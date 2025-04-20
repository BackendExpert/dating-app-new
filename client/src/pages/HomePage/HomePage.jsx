import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'
import SuccessStories from './SuccessStories'
import CallAction from './CallAction'
import Community from './Community'
import Works from './Works'
import FAS from './FAS'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Features />
        <SuccessStories />
        <Community />
        <Works />
        <CallAction />
        <FAS />
    </div>
  )
}

export default HomePage