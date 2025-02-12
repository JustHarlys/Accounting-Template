import aboutUs from '../assets/about-us.jpg'
import template from '../assets/template.jpg'

function WhoAreWe() {
  return (
    <div className="about-us-container">
        <img src={template} alt="About us picture" loading='lazy' style={{borderRadius: 20}} width={400}/>

        <div className='about-us-text'>


        <h1>Quiénes somos?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque nisi tempus massa cursus malesuada. Aliquam laoreet mauris vel ligula facilisis posuere. Proin in dignissim urna. Vestibulum mi libero, placerat vel eleifend a, posuere in ipsum. Duis tincidunt, felis ac condimentum venenatis, ipsum diam maximus tortor, non vestibulum tellus justo sit amet risus. Aenean condimentum libero ex, eget venenatis augue dapibus ac. </p>

        </div>
    </div>
  )
}

export default WhoAreWe