import React from 'react';
import NewProyect from '../proyectos/NewProyect';
import ListProyects from '../proyectos/ListProyects';

const Sidebar = () => {
    return (  
        <aside>
            <h1 className="ft-sidebar">MAVAJ<span>Tool</span></h1>
            <NewProyect></NewProyect>

            <div className="proyectos">
                <h2 className="ft-sidebar">Tus Proyectos</h2>
                <ListProyects/>
            </div>
        </aside>
    );
}

export default Sidebar;