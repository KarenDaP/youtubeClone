import React from 'react'
import VideoPage from './VideoPage';
import './estilos/SectionReproduction.css'

function Sectionvideos() { 
  return (
    <main className="main_Reproduction"> 
        <VideoPage 
            video="https://www.youtube.com/watch?v=p38WgakuYDo"
        />                      
    </main>
  );
}

export default Sectionvideos