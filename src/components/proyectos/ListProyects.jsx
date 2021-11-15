import React, { useContext, useEffect } from 'react';
import Proyect from './Proyect';

import proyectContext from '../../context/proyects/proyectContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProyects = () => {

    // Extraer proyectos del state inicial
    const proyectsContext = useContext(proyectContext);
    const { proyects, getProyects } = proyectsContext;

    useEffect(() => {
        getProyects();
        // eslint-disable-next-line
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyects.length === 0) return <p className="ft-sidebar">No hay proyectos pendientes, agrega uno...</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyects.map(proyect => (
                    <CSSTransition
                        key={proyect.id}
                        timeout={200}
                        classNames="tarea"
                    >
                        <Proyect
                            proyect={proyect}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProyects;