

function Principios({ name, content}) {
  return (
    <div className="principios-container">
        <div className="vision-mission">
            <h1>{name}</h1>
            <p>{content}</p>
        </div>
    </div>
  );
}

export default Principios;
