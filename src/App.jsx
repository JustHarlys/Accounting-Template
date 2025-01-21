import Nav from './Components/Nav'
import Hero from './Components/Hero'
import { services } from './data/services'
import Services from './Components/Services'
import { nanoid } from 'nanoid'
import AboutUs from './Components/AboutUs'
import OurTeamSlider from './Components/OurTeamSlider'
import './App.css'

function App() {

  const servicios = services.map((service) => {
    return <Services 
      key={nanoid()}
      service={service.service}
      icon={service.icon}
      content={service.content}
    />
  })


  return (
    <>
      <Nav />
      <Hero />

      <div className='services'>

      {servicios}
      </div>

      <AboutUs />
      
      <div className='our-team'>
        <OurTeamSlider />
      </div>

    </>
  )
}

export default App
