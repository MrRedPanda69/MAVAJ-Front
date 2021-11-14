import React, { Fragment, useState, useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const NewProyect = () => {
    //Obtener el state del form
    const proyectsContext = useContext(proyectContext);
    const { form, errorform, showForm, addProyect, showError } = proyectsContext;

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
        if(nameProyect === '') {
            showError();
            return;
        }

        // Agregar al state
        addProyect(proyect);

        // Reiniciar el proyecto
        setProyect({
            nameProyect: ''
        })
    }
    
    const onClickForm = () => {
        showForm();
    }
    
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-grey"
                onClick={onClickForm}
            ><i class="fas fa-folder-plus estado"></i>Nuevo Proyecto</button>

            {form
                ? (
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
                        
                        <button
                            type="submit" 
                            className="btn btn-block btn-grey"
                            value=" Agregar Proyecto" 
                        ><i class="fas fa-plus estado"></i>Agregar Proyecto</button>
                    </form>
                ) : null
            }
            { errorform ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null }
        </Fragment>
    );
}

export default NewProyect;