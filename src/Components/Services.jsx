import { useState } from "react"

function Services({service, icon, content}) {

  const [readMore, setReadMore] = useState(false)

  function handleHover() {
    setReadMore(true)
  }

  function hoverOut() {
    setReadMore(false)
  }

  return (
    <div className="service" onMouseEnter={handleHover} onMouseLeave={hoverOut}>
      <i className={`fa-solid ${icon}`}></i>

      <div className="service-text">

      <p style={{marginBottom: 20, fontWeight: 'bold'}}>{service}</p>
      <p style={{marginBottom: 20}}>{content}</p>
      <p className={readMore ? "read-more fade-in" : "read-more"}>{readMore && 'Read More'}</p>
      </div>
    </div>
  )
}

export default Services