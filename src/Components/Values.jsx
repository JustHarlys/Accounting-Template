

function Values({nombre, descripcion, img}) {
  return (
    <div className="inner-valores">
        <img src={img} alt="" width={250} height={166}/>
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
    </div>
  )
}

export default Values