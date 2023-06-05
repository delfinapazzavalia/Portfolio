import React from 'react';
import './Projects.css';
import Viajes from './cardsProjects/Viajes';
import Peliculas from './cardsProjects/Peliculas';
import Gym from './cardsProjects/Gym';

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <h1>Projects</h1>
        <div className='projects-cards'>
          <Viajes />
          <Peliculas />
          <Gym />
        </div>
      </div>
    </>
  );
}

export default Projects