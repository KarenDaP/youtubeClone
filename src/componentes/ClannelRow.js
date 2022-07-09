import React from 'react'
import './estilos/ChannelRow.css'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ClannelRow({image, Channel, verified, subs, noOfVideos, description}) {
    return (<article className='main_section_article-channel_vb'>
        <img 
            src={image} 
            alt={Channel} 
            className='section_article_img-imageChannel_vb'
        />
        <div className='section_article_div-textoChannel_vb'>
            <h4>{Channel} {verified && <FontAwesomeIcon selected icon={faMusic}/>}</h4>
            <p className='article_div_p-textoChannel_vb'>
                {subs} M de suscriptores * {noOfVideos}
            </p>
            <p className='article_div_p-descriptionChannel_vb'>
                {description}
            </p>
        </div>
    </article>
    )
  } 




export default ClannelRow