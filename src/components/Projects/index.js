import React from 'react';
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'
import { 
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP } from './ProjectsElement'


const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1></ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>React Portfolio Placeholder</ProjectsH2>
                    <ProjectsP>Create website/portfolio using React.js, include About me, projects, resume and a contact me.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Weather Dashboard Placeholder</ProjectsH2>
                    <ProjectsP>Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Use the OpenWeather One Call API to retrieve weather data for cities.</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Work Day Scheduler Placeholder</ProjectsH2>
                    <ProjectsP>Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. Use the Moment.js library to work with date and time.</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects