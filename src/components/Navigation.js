import React, { useState, useEffect } from 'react'
import './naviagtion.css'
import {Navbar,Container, Nav } from 'react-bootstrap';

const Navigation =() => {
const [activeLink, setActiveLink] = useState('Home');

const updateActiveLink = (value) =>{
    setActiveLink(value);
}

const changeNav = () => {
let navLogo = document.getElementById('navLogo');
let navMenu1 = document.getElementById('navMen1');
let navMenu2 = document.getElementById('navMen2');

  navLogo.style.display = "none";
  navMenu1.style.display= "none";
  navMenu2.style.display= "";

  window.addEventListener('scroll', function() {
    // Check if the user has scrolled to the top of the page
    if (window.pageYOffset === 0) {
      // User has scrolled to the top
      navLogo.style.display = "";
      navMenu1.style.display= "";
      navMenu2.style.display= "none";
    }
  });
}

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    changeNav();
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [])



    return (
      //   <Navbar bg="light" expand="lg" className={['navBar', scrolled ? "scrolled" : ""]} style={{display: 'none'}}>
      //   <Container>
      //     <Navbar.Brand href="#home">LOGO</Navbar.Brand>

      //     <Navbar.Collapse className='NavMenu'>
      //       <Nav className="">
      //         <Nav.Link href="#home" className={['navBtn', activeLink === 'Home' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Home')}>Home</Nav.Link>
      //         <Nav.Link href="#Aboutpage" className={['navBtn', activeLink === 'About' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('About')}>About</Nav.Link>
      //         <Nav.Link href="#Projectpage" className={['navBtn', activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Projects')}>Projects</Nav.Link>
      //         <Nav.Link href="#contact" className={['navBtn', activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Contact')}>Contact</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>

<Navbar bg="light" expand="lg" className={['navBar', scrolled ? "scrolled" : ""]}>
<Container>
  <Navbar.Brand href="#home" className='navbarBrand' style={{display:'', color: 'orange', fontWeight: 'bold'}} id='navLogo'>Refton.R</Navbar.Brand>

  <Navbar.Collapse className='NavMenu'>
    <Nav className="" style={{display:''}} id='navMen1'>
      <Nav.Link href="#home" className={['navBtn', activeLink === 'Home' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Home')}>Home</Nav.Link>
      <Nav.Link href="#Aboutpage" className={['navBtn', activeLink === 'About' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('About')}>About</Nav.Link>
      <Nav.Link href="#Projectpage" className={['navBtn', activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Projects')}>Projects</Nav.Link>
      <Nav.Link href="#contact" className={['navBtn', activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Contact')}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>

<div className="NavOnScrollBox" style={{display:'none'}} id='navMen2'>
    <Nav className="NavOnScroll" >
      <Nav.Link href="#home" className={['navBtn', activeLink === 'Home' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Home')}>Home</Nav.Link>
      <Nav.Link href="#Aboutpage" className={['navBtn', activeLink === 'About' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('About')}>About</Nav.Link>
      <Nav.Link href="#Projectpage" className={['navBtn', activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Projects')}>Projects</Nav.Link>
      <Nav.Link href="#contact" className={['navBtn', activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link']} onClick={()=> updateActiveLink('Contact')}>Contact</Nav.Link>
    </Nav>
</div>
</Navbar>

      // </div>
    )
}

export default Navigation;