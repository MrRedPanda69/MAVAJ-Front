import React, { Fragment, useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TareaContext from '../../context/tareas/tareaContext';

import Tarea from './Tarea';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTareas = () => {
    // Extraer proyecto del state
    const proyectsContext = useContext(proyectContext);
    const { actualproyect, deleteProyect } = proyectsContext;

    // Obtener las tareas del proyecto
    const tareasContext = useContext(TareaContext);
    const { tareasproyect } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!actualproyect) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer proyecto actual
    const [ actualProyect ] = actualproyect;
    

    return (  
        <Fragment>
            <h2>Proyecto: {actualProyect.nameProyect}</h2>
            <ul class="listado-tareas">
                {tareasproyect.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                    <TransitionGroup>
                    {tareasproyect.map(tarea => (
                        <CSSTransition
                            key={tarea.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Tarea
                                tarea={tarea}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProyect(actualProyect.id)}
            ><i class="fas fa-folder-minus estado"></i>Eliminar Proyecto</button>
        </Fragment>
    );
}

export default ListTareas;