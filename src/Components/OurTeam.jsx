

function OurTeam({position, img, nombre, experience}) {
  return (
    <div className="our-team-inner">


        <img src={img} alt="" width={240}/>

        <div className="member-text">

        <p>{nombre}</p>
        <p>{position}</p>
        <p>{experience}</p>
        </div>
    </div>
  )
}

export default OurTeam