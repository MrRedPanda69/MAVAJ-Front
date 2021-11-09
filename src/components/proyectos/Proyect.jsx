import React from 'react';

const Proyect = ({proyect}) => {
    return (  
        <li>
            <button
                type="button"
                className="btn btn-block btn-bar ft-sidebar"
            >{proyect.nameProyect}</button>
        </li>
    );
}

export default Proyect;