import React from "react";
import { FaInstagram,FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";
import '../styles.css'
const Footer = () => {
    const links = [
        [
            {label : 'Categories' , key: 'header-1'},
            {label : 'Electronics' , key: 'item-1-1'},
            {label : 'Appliances' , key: 'item-1-2'},
            {label : 'Home Needs' , key: 'item-1-3'},
            {label : 'Furniture' , key: 'item-1-4'},
            {label : 'Ecommerce' , key: 'item-1-5'},
        ],
        [
            {label : 'Support' , key: 'header-2'},
            {label : 'Help center' , key: 'item-2-1'},
            {label : 'Terms of service' , key: 'item-2-2'},
            {label : 'Legal' , key: 'item-2-3'},
            {label : 'Privacy policy' , key: 'item-2-4'},
            {label : 'Status' , key: 'item-2-5'},
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <h1>Tech craft</h1>
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2023 Tech Craft ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                    <span>
                        Design & Developed By Nandu
                    </span>
                </div>
                <div className="footer-icons">
                <a href="https://instagram.com/nanduvarma__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                    <a href="https://www.linkedin.com/in/ramineni-nandu-varma-85a226251" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    <a href="https://youtube.com/@Nandu_Varma?feature=shared" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
                </div>
            </div>
            <div className="footer-links">
                    {links.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" placeholder="Enter Your Email" />
                
            </div>
        </div>
        
    )
}

export default Footer;