

function Services({service, icon}) {
  return (
    <div className="service">
      <i className={`fa-solid ${icon}`}></i>
      <p>{service}</p>
    </div>
  )
}

export default Services