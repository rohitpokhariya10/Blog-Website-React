import React from 'react'
import Header from '../components/home/Header'
import LineCount from '../components/home/LineCount'
import HomeGrid from '../components/home/HomeGrid'

const Home = () => {
  return (
    <section id='home' className='page'>
      <Header />
      <LineCount />
      <HomeGrid />
    </section>
  )
}

export default Home
