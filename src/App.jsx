import Nav from './Components/Nav'
import Hero from './Components/Hero'
import { services } from './data/services'
import Services from './Components/Services'
import { nanoid } from 'nanoid'
import AboutUs from './Components/AboutUs'
import OurTeam from './Components/OurTeam'
import { wholeTeam } from './data/teamMembers'
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

  const team = wholeTeam.map((member) => {
    return <OurTeam
    key={nanoid()}
    position={member.position}
    img={member.img}
    name={member.name}
    />
  })

  return (
    <>
      <Nav />
      <Hero />

      <div className='services'>

      {servicios}
      </div>

      <div className='our-team'>
        {team}
      </div>

      <AboutUs />
    </>
  )
}

export default App
