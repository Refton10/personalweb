
import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import ProjectModal from "./ProjectModal";



const ProjectCards = ({ title, description, imgUrl, skills}) => {
    const [modalShow, setModalShow] = React.useState(false);
  
    const openDetails = () => {
      setModalShow(true);
    };
    
  const [projectTitle, setTitle] = useState("");
  const [projectDescription, setDescrip] = useState("");

  const [projectVideo, setProjectVideo] = useState("");
  const [codeLink, setCodeLink] = useState("");


  useEffect(() => {
    switch(title){
      case 'Weather Web App': 
      setTitle("Weather Web App"); 
      setDescrip("A basic weather app which dynamically changes the background based on the searched location through an api to get background pictures and also uses the weather Api, to get the weather data based on the searched location. The application was developed using HTML, CSS and JavaScript. Below is the demo of the web app.");
      setProjectVideo("https://www.youtube.com/embed/gVPF5zWJFzY?si=bOBPMWGWmrQLQ9CR");
      setCodeLink('https://github.com/Refton10/weatherApp')
      break;
  
      case 'Covid-19 Stats Web App': 
        setTitle("Covid-19 Stats Web App"); 
        setDescrip("A basic covid-19 stats app which was created to see cases in the searched location. The data was sourced through an online API and only selected data which is necessary was displayed on the app. Below is the demo of the web app.");
        setProjectVideo("https://www.youtube.com/embed/JUwU2JYqRtk?si=agWpIr0cuyLt0Hz3")
        setCodeLink('https://github.com/Refton10/covid-app')
        break;

        case 'Feeding London Web App': 
        setTitle("Features I developed for Feeding London Web App"); 
        setDescrip("This application was developed in regards to the sustainable development goal 'zero hunger'. The app allows people to post food for free or post adverts of discounted food in supermarkets and food store and people can search for this food using the borough map. The app has capabilities to automatically delete expired adverts and very old adverts and also allows users to manage their profile.Below is the demo of the web app.");
        setProjectVideo("https://www.youtube.com/embed/58-dmwdMNiY?si=V5SznNu16wytt3BV")
        setCodeLink('https://github.com/BrunelCS/cs2001-2022_23-groupone/tree/refton3')
        break;

        case "Number Guessing Game":
          setTitle("Number Guessing Game"); 
          setDescrip("This C++ number guessing game, developed using object-oriented programming in Visual Studio, involves two players: the user and the computer. The user must guess a randomly generated number within five turns. If successful, they win; otherwise, the game ends with a game over message, allowing the user to return to the menu screen. Each game generates a new random number.");
          setProjectVideo("https://www.youtube.com/embed/39wznUMmFtY?si=n8mW0LETqqUhCKjT")
          setCodeLink('https://docs.google.com/document/d/1sc1WqcxHax1fwNU1GNNJ8A1eCTr2FK6P7XZrH6pvCDk/edit?usp=sharing')
          break;

        case "Cinema Booking System":
          setTitle("Cinema Booking System"); 
          setDescrip("The Cinema Booking System, developed in C++ using object-oriented programming in Visual Studio, allows users to make bookings for available movies and view total sales.  Below is a demo of the system.");
          setProjectVideo('https://www.youtube.com/embed/HSDWYX3d8LQ?si=_C5yJoUETCJZU10a')
          setCodeLink('https://docs.google.com/document/d/1o-WIuATe1_w3dYgg4Y-QREJMa7llPN-GDP9bUpvannM/edit?usp=sharing')
          break;
        
        case "Flight Seat Booking":
            setTitle("Flight Seat Booking"); 
            setDescrip("Flight booking system provides a user-friendly interface for booking tickets. It dynamically displays seating plans based on flight details like dates and cities. Short flights show the Airbus A318 seating plan, while longer ones display the Boeing 747 plan. Users select seats matching their ticket quantity, and booked seats are disabled to prevent duplicates. This system was my contribution to a first-year group project.");
            setProjectVideo("https://www.youtube.com/embed/iCY3zUUYcUM?si=bkMPL-ZvvvvB9iyb")
            setCodeLink('github link')
            break;
        
            case 'Platformer Game': 
            setTitle("Shrooms Wild journey - an action packed 2D platformer game"); 
            setDescrip("Game Story - As the name suggests “Shrooms wild journey”, the character named shroom who leaves in the heart of a place filled with greenery away from the city, Shroom, a small and determined character, with his bow and arrow. Finds a magical plant with the power to cure, which could heal his family's long lasted illness. His journey back home takes him through the vibrant yet treacherous places. where he encounters harmful mushrooms and raging rhinos and has to avoid and destroy different obstacles on the land. Only by taking that mystical plant and returning home safely can Shroom save his family.");
            setProjectVideo("https://www.youtube.com/embed/bb1tO8fkESM?si=HEQoWAkb5sJLMlzw")
            setCodeLink('')
            break;

            case 'EnviroPlay': 
            setTitle("EnviroPlay - Game to raise awarness and knowledge of waste disposal and recycling"); 
            setDescrip("Game Story - This is waste management and recycling educational game. As an Eco Guardian, you must collect and dispose of waste in the correct bins while battling enemy monsters that thrive on waste. They will prevent you from disposing of the waste and has ability to hurt you. But you can battle and shoot the enemy monsters as killing them will allow you to regain health. Be cautious when disposing waste as every mistake damages the environment, leading to irreversible harm if left unchecked. which will eventinully affect your health due to bad environment. The game will also test your knowledge, so be prepared to answer the quiz when you have damaged the environment.");
            setProjectVideo("https://www.youtube.com/embed/u8Vuq5drmpk?si=7glqo3WUXdgOZVnD")
            setCodeLink('')
            break;
  
      default:
        setTitle("Title");
        setDescrip("description");
    }
  }, [title]);


  return (  
    <div className='detailsContainer'>
    <div className='articleContainer'>
      <img src={imgUrl} alt={title} className='projectImage' />
    </div>
    <h3 className='projectH3'>{title}</h3>
    <br></br>
    <h3 className='projectH4'>{description}</h3>
    <div className='projectSkills'>{skills}</div>
    <div className='projectBtnContainer'>
      <button className='projectBtn' onClick={openDetails}>View Details</button>
    </div>
     <ProjectModal
           show={modalShow}
           onHide={() => setModalShow(false)}
           title= {projectTitle}
           description={projectDescription}
           video = {projectVideo}
           code = {codeLink}
         />
  </div>

  );
}

export default ProjectCards;
