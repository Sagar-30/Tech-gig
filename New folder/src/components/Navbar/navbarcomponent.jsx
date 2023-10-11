import {Person} from 'react-bootstrap-icons'
import {BrowserRouter , Link ,Routes , Route } from 'react-router-dom'
import "./navbarcomponent.css";

export default function Navbar(){
    return(
        <section className="navbar-section-main">
            <div className="navbar-icon-div">
                  <p><b>Just rent it</b></p>
            </div>
            <div className="navber-links-div">
                <BrowserRouter>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Rent</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">{<Person />}</Link></li>
                </ul>
                </BrowserRouter>

            </div>

        </section>
    )
}
