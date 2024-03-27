import React from 'react'
import './Contact.css'
import { SocialIcon } from 'react-social-icons';
import {  Row, Col, } from "react-bootstrap";


function Contact() {
   
    return(
      
        <div className='contactDiv1'>
            <h1 className='contactheading'>Contact</h1>
        <div className='contactDiv' id="contact">
            <div className="c-info">
                <div className='titleContainer'>
                <h2 className="i-title">Contact Information</h2>
                </div>
                <div className="txt-area">
                    <div className='contactBtnSection'>
                        <a className='contactp contactBtn' target="_blank" rel="noopener noreferrer" href='https://forms.gle/PzrZFp3dbixwajnN9'>Contact Form</a>
                    </div>
                    <Row className='contactSocial'>
                        <Col xs="auto" md="auto">
                            <SocialIcon target="_blank"  url="https://www.linkedin.com/in/refton-rebelo-5620b7214" />    
                        </Col>
                        <Col xs="auto" sm="auto" md="auto">
                            <SocialIcon target="_blank" url='https://github.com/Refton10?tab=repositories'/>    
                        </Col>
                        {/* <Col xs="auto" sm="auto" md="auto">
                            <SocialIcon url="https://www.example.com" label="Our portfolio" bgColor="#007FB1"/>    
                        </Col> */}
                    </Row>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;