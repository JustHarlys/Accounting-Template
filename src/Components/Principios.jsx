

function Principios({ name, content, img }) {
  return (
    <div className="card">
      {/* Imagen de fondo con overlay */}
      <div className="image-container">
        <img src={img} alt={name} className="background-image" />
        <div className="overlay">
          <h1 className="title">{name}</h1>
        </div>
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Principios;
