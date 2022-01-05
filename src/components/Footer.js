import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link className = "link-dec" to="/">Home</Link></li>
                        <li><Link className = "link-dec" to="/aboutus">About Us</Link></li>
                        <li><Link className = "link-dec" to="/menu">Menu</Link></li>
                        <li><Link className = "link-dec" to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className ="col-7 col-sm-2">
                    <h5>Our Address</h5>
                    <address>
                    525, Hussainpur Main Road<br />
                    Madurdaha, Kolkata<br />
                    India<br />
                    <i className="fa fa-phone"></i>: +91123456789<br />
                    <i className="fa fa-at"></i>: <a className="link-dec "href="mailto:adarsh.raj.cse22@heritageid.edu.in">
                    foodify@heritageit</a>
                    </address>
                </div>
            </div>
            <div className="row justify-content-center">
                <a className="fa fa-facebook f-icons" href="http://www.facebook.com/profile.php?id="></a>
                <a className="fa fa-linkedin f-icons" href="http://www.linkedin.com/in/"></a>
                <a className="fa fa-twitter f-icons" href="http://twitter.com/"></a>
                <a className="fa fa-youtube f-icons" href="http://youtube.com/"></a>
                <a className="fa fa-google f-icons" href="mailto:"></a>
            </div>
            <br/>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 FOODIFY</p>
                </div>
            </div>
            
        </div>
        
    </div>
    )
}

export default Footer
