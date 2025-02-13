import { useState } from "react";

function ServiciosGenerales({ nombre, descripcion, icono }) {
  const [displayDescription, setDisplayDescription] = useState(false);

  function displayToggle() {
    setDisplayDescription(prevState => !prevState);
  }

  return (
    <div className="inner-general-services">
      <i className={`fa-solid ${icono}`}></i>
      <p style={{fontSize: 20}}>{nombre}</p>
      <button onClick={displayToggle} className="inner-service-btn"> Ver más</button>

      {displayDescription && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <button onClick={displayToggle} className="inner-service-btn">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiciosGenerales;
