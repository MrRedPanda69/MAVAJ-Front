import React, { useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyect = ({proyect}) => {
    // Obtener state de proyectos
    const proyectsContext = useContext(proyectContext);
    const { actualProyectFn } = proyectsContext;

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { getTareas } = tareasContext

    // Funcion para agregar proyecto actual
    const selectProyect = id => {
        actualProyectFn(id);   // Fijar un proyecto actual 
        getTareas(id);        // Filtrar tareas cuando se da click
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-block btn-bar ft-sidebar"
                onClick={() => selectProyect(proyect.id)}
            >{proyect.nameProyect}</button>
        </li>
    );
}

export default Proyect;