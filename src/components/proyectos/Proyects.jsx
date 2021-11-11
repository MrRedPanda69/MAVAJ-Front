import React from 'react';
import Bar from '../layout/Bar';
import Sidebar from '../layout/Sidebar';
import FormTarea from '../tareas/FormTarea';
import ListTareas from '../tareas/ListTareas';

const Proyects = () => {
    return (  
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Bar/>
                <main>
                    <FormTarea/>

                    <div className="contenedor-tareas">
                        <ListTareas/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyects;