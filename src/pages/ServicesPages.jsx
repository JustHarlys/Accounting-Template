import Hero from "../Components/Hero"
import Nav from "../Components/Nav"
import { serviciosGenerales } from "../data/servicesPages"

const servicios = serviciosGenerales.map(servicio => {
  return <ServicesPages
          key={servicio.id}
          nombre={servicio.nombre}
          descripcion={servicio.descripcion}
          />
})


function ServicesPages() {
  return (
    <>
    <Nav />

    <Hero />


    </>
  )
}

export default ServicesPages