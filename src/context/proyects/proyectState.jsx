import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import { 
    PROYECT_FORM,
    GET_PROYECTS,
    ADD_PROYECT,
    VALIDATE_FORM,
    ACTUAL_PROYECT, 
    DELETE_PROYECT
} from '../../types';

const ProyectState = props => {

    const proyects = [
        {id: 1, nameProyect: 'PIA Taller POO'},
        {id: 2, nameProyect: 'PIA POO'},
        {id: 3, nameProyect: 'Actividades de Ingeco'}
    ]

    const initialState = {
        proyects : [],
        form: false,
        errorform: false,
        actualproyect: null
    }

    //Dispach para ejecutar acciones
    const [state, dispatch] = useReducer(proyectReducer, initialState);

    // Funciones para CRUD
    const showForm = () => {
        dispatch({
            type: PROYECT_FORM
        })
    }

    const getProyects = () => {
        dispatch({
            type: GET_PROYECTS,
            payload: proyects
        })
    }

    const addProyect = proyect => {
        proyect.id = uuidv4();

        // Insertar proyect al state 
        dispatch({
            type: ADD_PROYECT,
            payload: proyect
        })
    }

    // Validar form por errores
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Selecciona el proyecto al que el user le dio click
    const actualProyectFn = proyectId => {
        dispatch({
            type: ACTUAL_PROYECT,
            payload: proyectId
        })
    }

    // Elimina un proyecto
    const deleteProyect = proyectId => {
        dispatch({
            type: DELETE_PROYECT,
            payload: proyectId
        })
    }

    return (
        <proyectContext.Provider
            value = {{
                proyects: state.proyects,
                form: state.form,
                errorform: state.errorform,
                actualproyect: state.actualproyect,
                showForm,
                getProyects,
                addProyect,
                showError,
                actualProyectFn,
                deleteProyect
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState;