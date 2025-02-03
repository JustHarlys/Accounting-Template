import Nav from "../Components/Nav"
import founder from '../assets/founder.png'
import Hero from "../Components/Hero"
import Principios from "../Components/Principios"
import valuesImg from '../assets/values.png'
import { principios } from "../data/principles"
import { nanoid } from "nanoid"

const principiosData = principios.map(principio => {

  return <Principios 
    key={nanoid()}
    name={principio.name}
    content={principio.content}
  />
})

function AboutUsPage() {



  return (
    <>
      <Nav />

      <Hero />

      <div className="founder-container">
        <img src={founder} alt="" width={250}/>


        <div className="founder-text">

        <h1>Founder</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus dui, semper vel egestas in, venenatis non sapien. Sed tortor massa, iaculis ac urna ac, varius sollicitudin ante. Proin vestibulum id metus eget condimentum. Cras dignissim porta est, viverra egestas urna placerat ac. Praesent sagittis luctus blandit. Suspendisse quis nibh ante. Sed mattis dolor aliquet arcu tempor, in ornare eros commodo. Donec bibendum molestie mauris.

        Fusce feugiat lectus in magna auctor, id mollis massa sodales. Vivamus sit amet sapien tristique, tincidunt purus at, finibus odio. Nullam in gravida tortor, sit amet blandit elit. Maecenas consectetur tortor quis bibendum ultricies. Nulla sodales, mauris bibendum pharetra ullamcorper, felis orci maximus ante, non aliquam arcu lectus sed metus. Fusce a ornare magna. Sed et metus quis ipsum rhoncus eleifend sit amet quis tortor. 
        </p>
        </div>
      </div>


      <section className="principios-container">
        {principiosData}
      </section>
    </>
  )
}

export default AboutUsPage