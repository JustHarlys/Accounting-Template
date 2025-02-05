

function ServiciosGenerales({nombre, descripcion, icono}) {
  return (
    <div className="inner-general-services">
      <i className={`fa-solid ${icono}`}></i>
      <p>{nombre}</p>
      <p>{descripcion}</p>
    </div>
  )
}

export default ServiciosGenerales