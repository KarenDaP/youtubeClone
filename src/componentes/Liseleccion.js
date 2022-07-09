import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Liseleccion({ selected, icon, tittle }) {
  return (
    <ul className='aside_ul'>
        <li className={`aside_ul_li ${selected && "selected"}`}>
            <FontAwesomeIcon icon={icon} className="aside_ul_li_i-icon"/>
            <h4 className="aside_ul_li_h4">{tittle}</h4>
        </li>           
    </ul>
  )
}

export default Liseleccion