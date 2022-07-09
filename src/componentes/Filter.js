import React, { useState } from 'react'
import './estilos/Filter.css'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Filter() {
    return (<article className='main_section_article-x_vb'>
        <input type="checkbox" id="spoiler1"></input>
        <label for="spoiler1">
            <FontAwesomeIcon selected icon={faFilter}/>
            <h2 className='article_label_h2-filter_vb'>FILTER</h2>            
        </label>
        <ul class="spoiler">
            <li className='spoiler_li'>
                <h2 className='spoiler_li_h2'>FECHA DE SUBIDA</h2>
                <hr/>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
            </li>
            <li className='spoiler_li'>
                <h2 className='spoiler_li_h2'>FECHA DE SUBIDA</h2>
                <hr/>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
            </li>
            <li className='spoiler_li'>
                <h2 className='spoiler_li_h2'>FECHA DE SUBIDA</h2>
                <hr/>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
            </li>                        
            <li className='spoiler_li'>
                <h2 className='spoiler_li_h2'>FECHA DE SUBIDA</h2>
                <hr/>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
            </li>
            <li className='spoiler_li'>
                <h2 className='spoiler_li_h2'>FECHA DE SUBIDA</h2>
                <hr/>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
                <h4 className='spoiler_li_h4'>Última hora</h4>
            </li>                        
        </ul>
    </article>
    )
  } 

export default Filter