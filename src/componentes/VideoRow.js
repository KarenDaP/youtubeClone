import React from 'react'
import './estilos/VideoRow.css'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function VideoRow({ views, description, timestamp, channelImage, verified, channel, title, image }) {
  return (
    <article className='main_section_article-videos_vb'>
        <img src={image} className="section_article_img-videos_vb"></img>
        <div className='section_article_div-textvideos_vb'>
            <h2>{title}</h2>
            <p className='article_div_p-textvideos_vb'>
              {views} M de visualizaciones * {timestamp}  
            </p>
            <span className='article_div_span-channelvideos_vb'>
                <img src={channelImage} className="div_span_img-imgchannel_vb"/>
                <p>
                    {channel} {verified && <FontAwesomeIcon selected icon={faMusic}/>}
                </p>
            </span>
            <p className='article_div_p-descripcionvideos_vb'>
                {description}
            </p>
        </div>
    </article>
  )
}

export default VideoRow