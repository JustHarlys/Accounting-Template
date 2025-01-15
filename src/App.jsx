import Nav from './Components/Nav'
import Hero from './Components/Hero'
import { services } from './data/services'
import Services from './Components/Services'
import { nanoid } from 'nanoid'
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
    </>
  )
}

export default App
