import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <br/>
            <form className="login-form shared-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Senha: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
                <button type="submit">Entrar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Não tem uma conta? Cadastre-se aqui.</button>
        </div>
    )
}