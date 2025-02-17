import { useState } from "react"

function Form() {

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs(values => ({...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="contact-form">

      <div style={{width: 100}} className="map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0616209302098!2d90.41976748458553!3d23.78081993257394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c796d245d8b7%3A0xeef970e7b9b7ff7e!2sMini%20Plaza%2C%20Ga%20-%2093%20Gulshan%20Badda%20Link%20Rd%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sil!4v1693302232785!5m2!1sen!2sil" width={640} height={480} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>

      <section className="form">
      <form onSubmit={handleSubmit} className="m-auto" style={{ maxWidth: 600 }}>
    <h3 className="my-4">Formulario de Contacto</h3>
    <hr className="my-4" />

    <div className="form-group mb-3 row">
      <label htmlFor="username" className="col-md-5 col-form-label">
        Nombre
      </label>
      <div className="col-md-7">
        <input
          type="text"
          className="form-control form-control-lg"
          id="username"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="form-group mb-3 row">
      <label htmlFor="email" className="col-md-5 col-form-label">
        Correo
      </label>
      <div className="col-md-7">
        <input
          type="email"
          className="form-control form-control-lg"
          id="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
        <small className="form-text text-muted">
          Por favor, introduce un correo válido.
        </small>
      </div>
    </div>

    <div className="form-group mb-3 row">
      <label htmlFor="asunto" className="col-md-5 col-form-label">
        Asunto
      </label>
      <div className="col-md-7">
        <input
          type="text"
          className="form-control form-control-lg"
          id="asunto"
          name="asunto"
          value={inputs.asunto || ""}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="form-group mb-3 row">
      <label htmlFor="mensaje" className="col-md-5 col-form-label">
        Mensaje
      </label>
      <div className="col-md-7">
        <textarea
          className="form-control form-control-lg"
          id="mensaje"
          name="mensaje"
          value={inputs.mensaje || ""}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <hr className="my-4" />

    <div className="form-group mb-3 row">
      <div className="col-md-7 offset-md-5">
        <button className="btn btn-primary btn-lg" type="submit">
          Enviar
        </button>
      </div>
    </div>
  </form>
</section>

    </section>
  )
}

export default Form