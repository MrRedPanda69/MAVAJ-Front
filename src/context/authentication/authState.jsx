import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios';

import { 
    REGISTRATION_OK,
    REGISTRATION_ERROR,
    // GET_USER,
    // LOGIN_OK,
    // LOGIN_ERROR,
    // LOG_OUT
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState); 

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clientAxios.post('/api/usuarios', datos);
            console.log(respuesta)
            dispatch({
                type: REGISTRATION_OK
            })
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: REGISTRATION_ERROR
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                loading: state.loading,
                registrarUsuario,
                // userAuth,
                // logIn,
                // logOff
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}

export default AuthState;