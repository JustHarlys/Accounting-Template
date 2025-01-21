

function OurTeam({position, img, name}) {
  return (
    <div className="our-team-inner">
        <img src={img} alt="" width={150}/>

        <p>{name}</p>
        <p>{position}</p>

        <div className="our-team-social-media">

        <a href=""><i className="fa-brands fa-instagram"></i></a>
        <a href=""><i className="fa-brands fa-facebook"></i></a>
        <a href=""><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
  )
}

export default OurTeam