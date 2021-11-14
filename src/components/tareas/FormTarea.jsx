import React, { useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const FormTarea = () => {
    // Extraer si un proyecto esta activo
    const proyectsContext = useContext(proyectContext);
    const { actualproyect } = proyectsContext;

    // Si no hay tareas para mostrar
    if(!actualproyect) return null;

    const [ actualProyect ] = actualproyect;

    return (  
        <div className="formulario">
            <form>
                <div className="contenedor">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nameTarea"
                    />

                    <div className="contenedor-input">
                        <button
                            type="submit" 
                            className="btn btn-primario btn-submit-tarea btn-block"  
                        ><i class="fas fa-plus estado"></i>Agregar Tarea</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormTarea;