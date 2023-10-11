import './contactcomponent.css'
import { ArrowRight } from 'react-bootstrap-icons'
export default function Contact(){
    return(
        <section classname='contact-section-main'>
        <div className='contact-section-div'>
        <p className='contact-first-p'>Call us to reserve your vehicle with us <br /> <span>+91-9350572047</span></p>
        <hr></hr>
        <p className='contact-second-p'>Book Online Today <ArrowRight /></p>
        </div>
        </section>
    )
}