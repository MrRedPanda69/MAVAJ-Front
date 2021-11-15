import React, { useContext, useState, useEffect } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    // Extraer si un proyecto esta activo
    const proyectsContext = useContext(proyectContext);
    const { actualproyect } = proyectsContext;

    // Obtener la function del context de tarea
    const tareasContext = useContext(TareaContext);
    const { errortarea, selectedtarea, getTareas, addTarea, validateTarea, updateTarea, cleanTarea } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(selectedtarea !== null) setTarea(selectedtarea)
        else {
            setTarea({
                nameTarea: ''
            })
        }
    }, [selectedtarea]);

    const [tarea, setTarea] = useState({
        nameTarea: ''
    })

    const { nameTarea } = tarea;

    // Si no hay tareas para mostrar
    if(!actualproyect) return null;

    const [ actualProyect ] = actualproyect;

    // Leer valores del form 
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitTarea = e => {
        e.preventDefault();

        // Validar
        if(nameTarea.trim() === '') {
            validateTarea();
            return;
        }

        // Si es edicion o si es nueva tarea 
        if(selectedtarea === null) {
            // Agregar nueva tarea al state de tareas
            tarea.proyectId = actualProyect.id;
            tarea.tareaActive = false;
            addTarea(tarea);
        } else {
            // Actualizar tarea existente
            updateTarea(tarea);

            // Elimina selectedtarea del state
            cleanTarea();
        }

        // Obtener y filtrar tareas del proyecto actual
        getTareas(actualProyect.id);

        // Reiniciar form
        setTarea({
            nameTarea: ''
        })
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmitTarea}
            >
                <div className="contenedor">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nameTarea"
                        value={nameTarea}
                        onChange={handleChange}
                    />

                    <div className="contenedor-input">
                        <button
                            type="submit" 
                            className="btn btn-primario btn-submit-tarea btn-block"  
                        >
                            {selectedtarea ? <i class="fas fa-edit estado"></i> : <i class="fas fa-plus estado"></i> }
                            {selectedtarea ? 'Editar Tarea' : 'Agregar Tarea'}
                        </button>
                    </div>
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTarea;