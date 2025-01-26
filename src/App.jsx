import Nav from './Components/Nav'
import Hero from './Components/Hero'
import { services } from './data/services'
import Services from './Components/Services'
import { nanoid } from 'nanoid'
import AboutUs from './Components/AboutUs'
import OurTeamSlider from './Components/OurTeamSlider'
import Counter from './Components/Counter'
import { numbers } from './data/quantities'
import { preguntas } from './data/faq'
import FAQ from './Components/FAQ'
import './App.css'
import faqimg from './assets/faq.jpg'

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

  const preguntasFaq = preguntas.map((pregunta) => {
    return <FAQ
    key={nanoid()}
    question={pregunta.question}
    answer={pregunta.answer}
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


        <h1 style={{textAlign: 'center' }}>FAQ</h1>
      <section className='faq'>

        <img src={faqimg} alt="Imagen de preguntas" width={600} style={{borderRadius: 10}}/>

        <div className='questions'>


        {preguntasFaq}
        </div>
      </section>
    </>
  )
}

export default App
