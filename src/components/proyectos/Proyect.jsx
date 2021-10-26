import React from 'react';

const Proyect = ({proyect}) => {
    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank ft-sidebar"
            >{proyect.nameProyect}</button>
        </li>
    );
}

export default Proyect;