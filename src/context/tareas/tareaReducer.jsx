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

const TareaReducer = (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECT:
            return {
                ...state,
                tareasproyect: state.tareas.filter(tarea => tarea.proyectId === action.payload)
            }

        case ADD_TAREA:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],
                errortarea: false
            }

        case VALIDATE_TAREA:
            return {
                ...state,
                errortarea: true
            }

        case DELETE_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }

        case UPDATE_TAREA:
        case TAREA_STATUS: 
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        
        case ACTUAL_TAREA:
            return {
                ...state,
                selectedtarea: action.payload
            }

        case CLEAN_TAREA:
            return {
                ...state,
                selectedtarea: null
            }

        default:
            return state;
    }
}

export default TareaReducer;