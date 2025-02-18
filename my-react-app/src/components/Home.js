import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import SignUpBar from './SignUpBar'

const Home = () => {
  return (
    <>
    <div style={{ gap: "8px" }} className="d-flex">
        <LeftSection/>
        <RightSection />
    </div>
    <SignUpBar/>
    </>
  )
}

export default Home
