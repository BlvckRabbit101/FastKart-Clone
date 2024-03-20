import react from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header/Header'
import Subheader from './components/Subheader'
import Hero from './components/Hero'
import Title from './components/Title'
import Shopitem from './components/Shopitem'
import BestSection from './components/BestSection'
import Oursection from './components/Oursection'
import Aftersection from './components/Aftersection'
import Trysection from './components/Trysection'
import Newsletter from './components/Newsletter'
import Topsection from './components/Topsection'
// import Newsection from './components/Newsection'
import Footer from './components/Footer'



const App = () => {
   
  return (
    <div>
      <Banner />
      <Header/>
      <Subheader />
      <Hero />
      <Title props='A' />
      <Shopitem  />
      <BestSection />
      <Oursection />
      <Aftersection />
      <Trysection />
      <Topsection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
