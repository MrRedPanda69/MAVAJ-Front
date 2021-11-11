import React from 'react';

const FormTarea = () => {
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