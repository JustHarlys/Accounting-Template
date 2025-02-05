import Hero from "../Components/Hero"
import Nav from "../Components/Nav"
import { serviciosGenerales } from "../data/servicesPages"
import ServiciosGenerales from "../Components/ServiciosGenerales"

const servicios = serviciosGenerales.map(servicio => {
  return <ServiciosGenerales
          key={servicio.id}
          nombre={servicio.nombre}
          descripcion={servicio.descripcion}
          icono={servicio.icono}
          />
})


function ServicesPages() {
  return (
    <>
    <Nav />

    <Hero />

    <div className="outer-general-services">
    {servicios}
    </div>

    </>
  )
}

export default ServicesPages