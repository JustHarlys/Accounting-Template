import aboutUs from '../assets/about-us.jpg';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-overlay"></div> {/* Capa oscura opcional */}
      
      <div className="about-us-content">

        <div className="about-us-text">
          <h1>Sobre Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque nisi tempus massa cursus malesuada.
            Aliquam laoreet mauris vel ligula facilisis posuere. Proin in dignissim urna. Vestibulum mi libero, placerat vel 
            eleifend a, posuere in ipsum. Duis tincidunt, felis ac condimentum venenatis, ipsum diam maximus tortor, non 
            vestibulum tellus justo sit amet risus. Aenean condimentum libero ex, eget venenatis augue dapibus ac.
          </p>

          <button>Nuestra Historia</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
