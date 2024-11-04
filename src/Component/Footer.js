import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='c'>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>JOB</span>Hunt</h3>
                            <p>Connecting Employers With Job Seekers</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                            
                                <li className="nav-item">
                                    <Link className="" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="" to="/jobs-list">Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="" to="/emp-prof">Employer Profiles</Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 7845135871</p>
                            <p><i class="fa-solid fa-envelope"></i> Jobhunting123@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i>xyz</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Happy Hunting</p>
            </div>
        </div>
    )
}

export default Footer