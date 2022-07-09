import React, { useState } from 'react'
import './estilos/VideoCard.css'
import { Link } from "react-router-dom";

function VideoCard( {image, title, channel, views, timestamp, channelImage} ) {
  const [video={title}, setTitle] = useState();
  return (

    <Link className='main_section_link-videosRecomendados' to={`/video/${title}`}>
      <article className='section_article-cardVideoR'>
          <img src={image} alt="foto" className='article_img-cardVideoR'/>
          <div className='article_div-fototitulo'>
              <img src={channelImage} alt={channel} className='article_div_img-channelImage'/>
              <h4 className='article_div_h4-fototitulo'>{title}</h4>
          </div>
          <div className='article_div-info'>
              <p className='article_div_p-info'>{channel}</p>
              <p className='article_div_p-info'>{views}</p>
              <p className='article_div_p-info'>{timestamp}</p>
          </div>
      </article>
    </Link> 
  )
}

export default VideoCard