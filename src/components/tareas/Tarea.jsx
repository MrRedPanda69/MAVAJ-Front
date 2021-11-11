import React from 'react';

const Tarea = ({tarea}) => {
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
                            >Completo</button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                            >Incompleto</button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                ><i class="fas fa-edit estado"></i>Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                ><i class="fas fa-trash estado"></i>Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;