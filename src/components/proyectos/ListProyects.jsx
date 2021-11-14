import React, { useContext, useEffect } from 'react';
import Proyect from './Proyect';

import proyectContext from '../../context/proyects/proyectContext';

const ListProyects = () => {

    // Extraer proyectos del state inicial
    const proyectsContext = useContext(proyectContext);
    const { proyects, getProyects } = proyectsContext;

    useEffect(() => {
        getProyects();
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyects.length === 0) return <p className="ft-sidebar">No hay proyectos pendientes, agrega uno...</p>;

    return (
        <ul className="listado-proyectos">
            {proyects.map(proyect => (
                <Proyect
                    key={proyect.id}
                    proyect={proyect}
                />
            ))}
        </ul>
    );
}

export default ListProyects;