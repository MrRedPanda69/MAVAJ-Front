import { 
    PROYECT_FORM,
    GET_PROYECTS,
    ADD_PROYECT,
    VALIDATE_FORM,
    ACTUAL_PROYECT,
    DELETE_PROYECT
} from '../../types';

const proyectReducer = (state, action) => {
    switch(action.type) {
        case PROYECT_FORM:
            return {
                ...state,
                form: true
            }

        case GET_PROYECTS:
            return {
                ...state,
                proyects: action.payload
            }
        
        case ADD_PROYECT:
            return {
                ...state,
                proyects: [...state.proyects, action.payload],
                form: false, 
                errorform: false
            }
            
        case VALIDATE_FORM:
            return {
                ...state,
                errorform: true,
            }   
            
        case ACTUAL_PROYECT:
            return {
                ...state,
                actualproyect: state.proyects.filter(proyect => proyect.id === action.payload)
            }

        case DELETE_PROYECT:
            return {
                ...state,
                proyects: state.proyects.filter(proyect => proyect.id !== action.payload),
                actualproyect: null
            }

        default:
            return state;
    }
}

export default proyectReducer;