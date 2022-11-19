import React, {useState} from 'react';

const Formulario = () => {

// Crear una variable por cada campo del formulario: Nombre, apellido y edad    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    const [usuarios, setUsuarios] = useState({firstName, lastName, email, password, confirmPassword});



    return (
        <>
        
    <form>
        <div className="form-group">
            <label>Nombre:</label>
            <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            {firstName.length > 5 ? <h6>Muy bien</h6> : <h6>Escribe tu nombre, es obligatorio</h6>}
        </div>
        <div className="form-group">
            <label>Apellido:</label>
            <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </div>
        <div className="form-group">
            <label>E-Mail:</label>
            <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" disabled/>
    </form>
    <h5>Nombre: {firstName}</h5>
    <h5>Apellido: {lastName}</h5>
    <h5>E-Mail: {email}</h5>
    <h5>Password: {password}</h5>
    <h5>Confirm Password: {confirmPassword}</h5>
    </>         

        
    )

}

export default Formulario;