import React from 'react';
import Proyect from './Proyect';

const ListProyects = () => {

    const proyects = [
        {nameProyect: 'PIA Taller POO'},
        {nameProyect: 'PIA POO'},
        {nameProyect: 'Actividades de Ingeco'}
    ];

    return (
        <ul className="listado-proyectos">
            {proyects.map(proyect => (
                <Proyect
                    proyect={proyect}
                />
            ))}
        </ul>
    );
}

export default ListProyects;