import React, { Fragment, useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';

import Tarea from './Tarea';

const ListTareas = () => {
    // Extraer proyecto del state
    const proyectsContext = useContext(proyectContext);
    const { actualproyect, deleteProyect } = proyectsContext;

    // Si no hay proyecto seleccionado
    if(!actualproyect) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer proyecto actual
    const [ actualProyect ] = actualproyect;

    const tareasProyecto = [
        {nameTarea: 'Agregar Carpeta Individual', tareaActive: true},
        {nameTarea: 'Agregar Carpeta Grupal', tareaActive: false},
        {nameTarea: 'Agregar Documentación', tareaActive: false},
        {nameTarea: 'Agregar Código del Proyecto', tareaActive: true}
    ];

    return (  
        <Fragment>
            <h2>Proyecto: {actualProyect.nameProyect}</h2>
            <ul class="listado-tareas">
                {tareasProyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
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