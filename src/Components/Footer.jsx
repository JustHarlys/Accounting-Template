import img from '../assets/template.jpg'

function Footer() {
  return (
    <div className='footer'>

        <img src={img} alt="" width={200}/>
        <p>Accounting Template</p>

        <div className='footer-info'>

        <p>4780 Waterview Lane, Las Cruces, New Mexico, 88001</p>
        <p><i className='fa-solid fa-phone'></i> 000-000-0000</p>
        <p><i className='fa-brands fa-instagram'></i> @username</p>
        <p><i className='fa-solid fa-envelope'></i> example@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer