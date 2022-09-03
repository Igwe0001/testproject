import React from 'react'
import Actors from "../components/Homecomponents/Actors";
import Comedians from '../components/Homecomponents/Comedians'
import Featured from '../components/Homecomponents/Featured'
import FirstSection from '../components/Homecomponents/FirstSection'
import Trending from '../components/Homecomponents/Trending'

const Home = () => {
  return (
      <React.Fragment>
          <FirstSection />
          <Featured />
          <Trending />
          <Actors />
          <Comedians />
    </React.Fragment>
  )
}

export default Home