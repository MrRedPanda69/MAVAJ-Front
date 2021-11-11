import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListTareas = () => {

    const tareasProyecto = [
        {nameTarea: 'Agregar Carpeta Individual', tareaActive: true},
        {nameTarea: 'Agregar Carpeta Grupal', tareaActive: false},
        {nameTarea: 'Agregar Documentación', tareaActive: false},
        {nameTarea: 'Agregar Código del Proyecto', tareaActive: true}
    ];

    return (  
        <Fragment>
            <h2>Proyecto: PIA Taller POO</h2>
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
            ><i class="fas fa-folder-minus"></i> Eliminar Proyecto</button>
        </Fragment>
    );
}

export default ListTareas;