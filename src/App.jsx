import Nav from './Components/Nav'
import Hero from './Components/Hero'
import { services } from './data/services'
import Services from './Components/Services'
import { nanoid } from 'nanoid'
import AboutUs from './Components/AboutUs'
import OurTeamSlider from './Components/OurTeamSlider'
import Counter from './Components/Counter'
import { numbers } from './data/quantities'
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

  const numeros = numbers.map(number => {
    return <Counter 
    key={nanoid()}
    data={number.data}
    number={number.number}
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

      <div className='numbers'>
      {numeros}
      </div>
      
      <div className='our-team'>
        <OurTeamSlider />
      </div>





    </>
  )
}

export default App
