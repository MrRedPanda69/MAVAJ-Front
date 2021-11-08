import React from 'react';
import Bar from '../layout/Bar';
import Sidebar from '../layout/Sidebar';

const Proyects = () => {
    return (  
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Bar/>
                <main>
                    

                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyects;