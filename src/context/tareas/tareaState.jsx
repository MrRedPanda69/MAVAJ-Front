import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {v4 as uuidv4} from 'uuid';

import {
    TAREAS_PROYECT,
    ADD_TAREA,
    VALIDATE_TAREA,
    DELETE_TAREA, 
    TAREA_STATUS,
    ACTUAL_TAREA,
    UPDATE_TAREA,
    CLEAN_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1,nameTarea: 'Agregar Carpeta Individual', tareaActive: true, proyectId: 1},
            {id: 2,nameTarea: 'Agregar Carpeta Grupal', tareaActive: false, proyectId: 2},
            {id: 3,nameTarea: 'Agregar Documentación', tareaActive: false, proyectId: 3},
            {id: 4,nameTarea: 'Agregar Carpeta Individual', tareaActive: true, proyectId: 2},
            {id: 5,nameTarea: 'Agregar Carpeta Grupal', tareaActive: false, proyectId: 3},
            {id: 6,nameTarea: 'Agregar Documentación', tareaActive: false, proyectId: 1},
            {id: 7,nameTarea: 'Agregar Carpeta Individual', tareaActive: true, proyectId: 3},
            {id: 8,nameTarea: 'Agregar Carpeta Grupal', tareaActive: false, proyectId: 1},
            {id: 9,nameTarea: 'Agregar Documentación', tareaActive: false, proyectId: 2},
        ],
        tareasproyect: null,
        errortarea: false,
        selectedtarea: null
    }

    // Dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear funciones 

    // Obtener tareas del proyecto
    const getTareas = proyectId => {
        dispatch({
            type: TAREAS_PROYECT,
            payload: proyectId
        });
    }

    // Agregar tarea al state 
    const addTarea = tarea => {
        tarea.id = uuidv4();
        
        dispatch({
            type: ADD_TAREA,
            payload: tarea
        });
    }

    // Valida y muestra error si es necesario
    const validateTarea = () => {
        dispatch({
            type: VALIDATE_TAREA
        });
    }

    // Eliminar tarea por ID
    const deleteTarea = id => {
        dispatch({
            type: DELETE_TAREA,
            payload: id
        });
    }

    // Cambia el status de cada tarea 
    const changeTareaStatus = tarea => {
        dispatch({
            type: TAREA_STATUS,
            payload: tarea
        });
    }

    // Extrae una tarea para edicion
    const saveActualTarea = tarea => {
        dispatch({
            type: ACTUAL_TAREA,
            payload: tarea
        });
    }

    // Edita o modifica una tarea
    const updateTarea = tarea => {
        dispatch({
            type: UPDATE_TAREA,
            payload: tarea
        });
    }

    // Elimina la tarea seleccionada 
    const cleanTarea = () => {
        dispatch({
            type: CLEAN_TAREA
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyect: state.tareasproyect,
                errortarea: state.errortarea,
                selectedtarea: state.selectedtarea,
                getTareas,
                addTarea,
                validateTarea,
                deleteTarea,
                changeTareaStatus,
                saveActualTarea,
                updateTarea,
                cleanTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;