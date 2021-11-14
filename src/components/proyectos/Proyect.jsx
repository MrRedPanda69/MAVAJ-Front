import React, { useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const Proyect = ({proyect}) => {
    // Obtener state de proyectos
    const proyectsContext = useContext(proyectContext);
    const { actualProyectFn } = proyectsContext;

    return (  
        <li>
            <button
                type="button"
                className="btn btn-block btn-bar ft-sidebar"
                onClick={() => actualProyectFn(proyect.id)}
            >{proyect.nameProyect}</button>
        </li>
    );
}

export default Proyect;