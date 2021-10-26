import React, { Fragment, useState } from 'react';

const NewProyect = () => {

    // State del proyecto
    const [proyect, setProyect] = useState({
        nameProyect: ''
    });

    // Extraer nombre del proyecto
    const { nameProyect } = proyect;

    const onChangeProyect = e => {
        setProyect({
            ...proyect,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el user envia un proyecto
    const onSubmitProyect = e => {
        e.preventDefault();

        // Validar proyecto

        // Agregar al state

        // Reiniciar el proyecto
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-grey"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyect}
            >
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="nameProyect"
                    value={nameProyect}
                    onChange={onChangeProyect}
                />

                <input 
                    type="submit" 
                    className="btn btn-block btn-grey"
                    value="Agregar Proyecto" 
                />
            </form>
        </Fragment>
    );
}

export default NewProyect;