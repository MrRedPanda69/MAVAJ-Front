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
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-submit-tarea btn-block"  
                            value="Agregar Tarea" 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormTarea;