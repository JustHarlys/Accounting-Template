import { useState } from "react"
import { wholeTeam } from "../data/teamMembers";
import OurTeam from "./OurTeam";

function OurTeamSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;

    const visibleMembers = wholeTeam.slice(currentIndex, currentIndex + visibleCount);

    const totalWindows = Math.ceil(wholeTeam.length / visibleCount);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + visibleCount >= wholeTeam.length ? 0 : prevIndex + visibleCount);
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - visibleCount < 0 ? Math.max(0, wholeTeam.length - visibleCount) : prevIndex - visibleCount);
    }


  return (
    <div className="our-team-slider">

        <h1>Nuestro equipo</h1>

        <div className="our-team-slider-inner"> 
        <button onClick={handlePrev} className="slider-btn">{'<'}</button>
        {visibleMembers.map((member, index) => (
            <OurTeam
            key={index}
            name={member.name}
            img={member.img}
            position={member.position}
            facebook={member.facebook}
            instagram={member.instagram}
            linkedin={member.linkedin}
            />
        ))}
        <button onClick={handleNext} className="slider-btn">{'>'}</button>
        </div>

        <div className="indicators">
        {Array.from({length: totalWindows}).map((_, index) => (
            <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / visibleCount) ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * visibleCount)}
            ></span>
        ))}
        </div>
    </div>
  )
}

export default OurTeamSlider