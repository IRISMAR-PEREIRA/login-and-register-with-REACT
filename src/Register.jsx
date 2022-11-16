import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <h2>Cadastro</h2> 
            <br/>
            <form className="register-form shared-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome completo: </label>
                <input type="text" id="name" name="name" placeholder="nome + sobrenome" />
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Senha: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
                <button type="submit">Confirmar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já tem uma conta? Entre aqui.</button>
        </div>
    )
}