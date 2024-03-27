import React from 'react'
import "./Project1.css";
import airbus from '../Images/img/airbus.png';
import weather from '../Images/img/weather.png';
import cov from '../Images/img/covid.png';
import feed from '../Images/img/feedingLondon.jpeg';
import guessNum from '../Images/img/guessNum.png';
import cinema from '../Images/img/cinema.png';
import ProjectCards  from '../components/ProjectCards';
import shroomys from '../Images/img/shroomys.png';
import enviro from '../Images/img/enviro.png';


const projects = [
  {
    title: "Weather Web App",
    description: "A basic Weather app which allows to search locations and displays weather information using an API. ",
    imgUrl: weather,
    skills: "HTML, CSS, JAVASCRIPT"
  },
  {
    title: "Covid-19 Stats Web App",
    description: "Shows Covid-19 stats in searched country, using an API to find the data. "+
    "Developed using HTML, CSS and JavaScript",
    imgUrl: cov,
    skills: "HTML, CSS, JAVASCRIPT"
  },
  {
      title: "Feeding London Web App",
      description: "Posting and viewing of discounted food ads from local supermarkets and stores, User profile management, Viewing food banks in location selected by user and has all the data validations to prevent errors",
      imgUrl: feed,
      skills: "REACT.JS, JAVA, Spring Boot Framework and MySQL Database"
  },
  {
      title: "Flight Seat Booking",
      description: "Java application developed in eclipse IDE using the Java Swing UI, the feature allows to enter number of tickets and choose seats for those tickets, by displaying seat plan based on flight distance",
      imgUrl: airbus,
      skills: "JAVA"
    },
    {
      title: "Number Guessing Game",
      description: "A game in C++ where the computer generates a random secret number and the user playing that games has to guess the number and has 5 turns to guess it",
      imgUrl: guessNum,
      skills: "C++"
    },
    {
      title: "Cinema Booking System",
      description: "A basic commond line application that allow to take booking for movies at cinema, by allowing the staff to see the total sales at the end of the day or when all tickets are sold. ",
      imgUrl: cinema,
      skills: "C++"
    },
    {
      title: "Platformer Game",
      description: "A action platformer game with 3 levels with rising difficulty. The player has to avoid obstacles, kills enemy's and jump on different platforms.",
      imgUrl: shroomys,
      skills: "C#, Unity Game Engine"
    },
    {
      title: "EnviroPlay",
      description: "Final Year Project game with the aim to help people with climate change by developing an engaging, user-friendly, and "+
      "educational game on recycling and waste disposal. This game-based solution should show them how to identify recyclable waste and where different types of waste are to be"+
      "disposed of and have a quiz on this topic. That focuses on raising awareness and knowledge about recycling and proper waste disposal.",
      imgUrl: enviro,
      skills: "C#, Unity Game Engine"
    },
];



function Project1()
{
    return(
        
        <section className='projSection' id="Projectpage">
        <div className='mainBoxProject'>
            <div className='subBoxProject'>
                <div className='infoBoxProject'>

                    <h2 className='proH2'>Projects</h2>
                    <p className='projectP'>This are my personal and acadamic projects, which have 
                        been divided into categories based on the programming language used.
                    </p>
                </div>
                <div className='experienceDetailsContainer'>
                  <div className='aboutContainer'>
                   

                {/* {projects.map(project => (
                <div className='detailsContainer'>
                  <div className='articleContainer'>
                    <img src={project.imgUrl} alt={project.title} className='projectImage' />
                  </div>
                  <h3 className='projectH3'>{project.title}</h3>
                  <br></br>
                  <h3 className='projectH4'>{project.description}</h3>
                  <div className='projectSkills'>{project.skills}</div>
                  <div className='projectBtnContainer'>
                    <button className='projectBtn' onClick={() => openDetails(project)}>View Details</button>
                  </div>
                </div>
              ))} */}

              {projects.map(project => (
                <ProjectCards key={project.title} {...project} />
              ))}
                    





                  </div>
                </div>
    
                {/* {selectedProject && <ProjectCards title={projects}/>} */}
            </div>
            </div>
        </section>
    )
}


export default Project1;