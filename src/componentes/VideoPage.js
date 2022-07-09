import React from 'react'
import ReactPlayer from 'react-player'
import './estilos/VideoPage.css'

function VideoPage({ video }) {
  return (
    <section className='main_section-videosReproductor'>
        <ReactPlayer         
            url={video}
        />
    </section>
  )
}

export default VideoPage