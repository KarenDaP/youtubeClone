import React from 'react';
import './estilos/Aside.css'
import Liseleccion from './Liseleccion';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons'
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons'


function Aside() {
  return (
    <aside className="aside"> 
        <Liseleccion selected icon={faHome} tittle="Inicio"/>
        <Liseleccion icon={faWpexplorer} tittle="Explorar"/>
        <Liseleccion icon={faMeteor} tittle="Shorts"/>
        <Liseleccion icon={faCirclePlus} tittle="Subscription"/>
        <hr />
        <Liseleccion icon={faFolderTree} tittle="Biblioteca"/>
        <Liseleccion icon={faClockRotateLeft} tittle="Historial"/>
        <Liseleccion icon={faCirclePlay} tittle="Mis Videos"/>
        <Liseleccion icon={faClock} tittle="Ver mas tarde"/>
        <Liseleccion icon={faThumbsUp} tittle="Videos que me gustan"/>
    </aside>
  );
}

export default Aside