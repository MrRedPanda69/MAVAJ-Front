import React from 'react';

const Bar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Pepito</span></p>
            <nav className="nav-principal">
                {/* <a href="#!"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a> */}
                <button class="btn btn-block btn-logout"><i class="fas fa-sign-out-alt logout-red"></i> Cerrar Sesión</button>
            </nav>
        </header>
    );
}

export default Bar;