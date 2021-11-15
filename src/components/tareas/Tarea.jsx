import React, { useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TareaContext from '../../context/tareas/tareaContext';


const Tarea = ({tarea}) => {
    // Extraer si un proyecto esta activo
    const proyectsContext = useContext(proyectContext);
    const { actualproyect } = proyectsContext;

    // Obtener funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { getTareas, deleteTarea, changeTareaStatus, saveActualTarea } = tareasContext;

    // array descructuring al actualproyect
    const [actualProyect] = actualproyect;

    // Funcion qie se ejecuta cuando el user presiona el btn de eliminar tarea 
    const tareaDelete = id => {
        deleteTarea(id);
        getTareas(actualProyect.id);
    }

    // Funcion que modifica el estado de las tareas
    const changeStatus = tarea => {
        (tarea.tareaActive) ? tarea.tareaActive = false : tarea.tareaActive = true;
        changeTareaStatus(tarea);
    }

    // Agrega una tarea actual cuando el user desea editarla
    const selectTarea = (tarea) => {
        saveActualTarea(tarea);
    }

    return (  
        <li className="tarea sombra">
            <p className="ft-bold">{tarea.nameTarea}</p>
            <div className="estado">
                {tarea.tareaActive
                    ? 
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => changeStatus(tarea)}
                            >Completo</button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => changeStatus(tarea)}
                            >Incompleto</button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTarea(tarea)}
                ><i class="fas fa-edit estado"></i>Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaDelete(tarea.id)}
                ><i class="fas fa-trash estado"></i>Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;