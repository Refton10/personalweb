import React from 'react'
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
   
    return(
        <div className= 'aboutSection' id='Aboutpage'>
            <div className= 'aboutSubsec1'>
                <h1 className='aboutHeading1'>
                    About
                </h1>
               
                <div className= 'aboutSubsec1_1'>
                <p className='aboutPara1'>
                I'm a passionate computer science student at Brunel University, eager to 
                make a positive impact through software development. I constantly strive to learn 
                new skills, languages, frameworks, and principles as technology evolves. 
                My coursework has honed my critical thinking, time management, communication, 
                and teamwork abilities, vital for solving IT problems and collaborating 
                effectively in the industry.
                </p>
                </div>
                {/* <h3 className='aboutHeading2'>My Experience</h3> */}
                <div className= 'aboutSubsec1_2'>
                {/* <div className='experienceSection'>
                        <p>i have ddgshdgasdgjgsajgfajfgajffafgaffe r3ry2 ry2 fhef efhwef efgwef w ffhhrgytwy f  w wfw
                            gghghgsfg  gfdgffy 
                        </p>
                    </div> */}
                 <h3 className='aboutHeading2'>My Skills</h3>
                   
                    <div className='skillsSections'>
                        <div className='skillSection1'>
                            <h4 className='aboutH4'>Technical Skills</h4>
                            <ul className='listTech'>
                                <li>Programming Languages: Proficient in Java (including Spring Boot Framework), C#, C++ and JavaScript.</li>
                                <li>Web Development: Experience with HTML, CSS, and front-end frameworks like React.js.</li>
                                <li>Database Management: Familiarity with SQL and database design principles.</li>
                                <li>Software Development: Understanding of Agile and waterfall methodologies and version control systems like Git.</li>
                            </ul>
                        </div>
                        <div className='skillSection2'>
                            <h4 className='aboutH4'>Soft Skills</h4>
                            <ul className='listTech'>
                                <li>Communication: Excellent verbal and written communication skills, demonstrated through group projects and presentations.</li>
                                <li>Problem Solving: Strong analytical and problem-solving skills developed through coursework and personal projects.</li>
                                <li>Teamwork: Collaborative approach to working in team environments, with experience in group coding projects and discussion.</li>
                                <li>Learning Agility: Proven ability to quickly learn new technologies and adapt to changing environments.</li>
                                <li>Time Management: Effective time management skills, demonstrated through successful completion of academic projects.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;