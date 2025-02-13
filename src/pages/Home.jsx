import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import { services } from '../data/services'
import Services from '../Components/Services'
import { nanoid } from 'nanoid'
import AboutUs from '../Components/AboutUs'
import Counter from '../Components/Counter'
import { numbers } from '../data/quantities'
import { preguntas } from '../data/faq'
import FAQ from '../Components/FAQ'
import '../App.css'
import faqimg from '../assets/faq.jpg'
import WhatsappChatBot from '../Components/WhatsappChatBot'
import Chat from '../Components/Chat'
import { useContext } from 'react'
import { BotContext } from '../Context/BotToggle'
import building from '../assets/numberBuildings.jpg'
import OverNav from '../Components/OverNav'
import Footer from '../Components/Footer'

function Home() {

  const {toggle} = useContext(BotContext)

  const servicios = services.map((service) => {
    return <Services 
      key={nanoid()}
      service={service.service}
      icon={service.icon}
      content={service.content}
    />
  })

  const numeros = numbers.map((number, index) => {
    return <Counter 
    key={nanoid()}
    data={number.data}
    number={number.number}
    index={index}
    div={number.div}
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
      <OverNav />
      <Nav />
      <Hero />

      <div className='services'>

      {servicios}
      </div>

      <AboutUs />

      <div className='numbers'>
      {numeros}

      <img src={building} alt="" width={600}/>
      </div>


        <h1 style={{textAlign: 'center' }}>FAQ</h1>
      <section className='faq'>

        <img src={faqimg} alt="Imagen de preguntas" width={600} style={{borderRadius: 10}}/>

        <div className='questions'>


        {preguntasFaq}
        </div>
      </section>

      {toggle ? <Chat /> : <WhatsappChatBot />}

      <Footer />

    </>
  )
}

export default Home
