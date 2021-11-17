import { 
    REGISTRATION_OK,
    REGISTRATION_ERROR,
    // GET_USER,
    // LOGIN_OK,
    // LOGIN_ERROR,
    // LOG_OUT
} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case REGISTRATION_OK:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }

        case REGISTRATION_ERROR:
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }

        default: 
        return state;
    }
}

export default authReducer;