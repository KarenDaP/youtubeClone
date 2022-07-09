import React from 'react';
import './estilos/AsideHidden.css'
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


function AsideHidden() {
  return (
    <aside className="aside_hidden"> 
        <Liseleccion selected icon={faHome} />
        <Liseleccion icon={faWpexplorer} />
        <Liseleccion icon={faMeteor} />
        <Liseleccion icon={faCirclePlus} />
        <hr />
        <Liseleccion icon={faFolderTree} />
        <Liseleccion icon={faClockRotateLeft} />
        <Liseleccion icon={faCirclePlay} />
        <Liseleccion icon={faClock}  />
        <Liseleccion icon={faThumbsUp} />
    </aside>
  );
}

export default AsideHidden