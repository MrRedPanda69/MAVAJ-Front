import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    // State para new-account
    const [user, setUser] = useState({
        nameUser: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { nameUser, email, password, confirm } = user;

    const onChangeLogIn = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el user quiere hacer login
    const onSubmitForm = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Password de al menos 6 caracteres

        // Ambas passwords debens er las mismas

        // Pasarlo al action
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmitForm}
                >
                    <div className="campo-form">
                        <label htmlFor="nameUser">Nombre</label>
                        <input 
                            type="text" 
                            id="nameUser" 
                            name="nameUser" 
                            placeholder="Berny el Oso"
                            value={nameUser}
                            onChange={onChangeLogIn}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="ejemplo@ejemplo.com"
                            value={email}
                            onChange={onChangeLogIn}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChangeLogIn}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm">Confirma tu Password</label>
                        <input 
                            type="password" 
                            id="confirm" 
                            name="confirm" 
                            placeholder="Repite tu password"
                            value={confirm}
                            onChange={onChangeLogIn}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear Cuenta"/>
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;