import React, { useReducer } from 'react';

import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';

const proyectState = props => {
    const initialState = {
        isNewProyect : false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectReducer, initialState);
}