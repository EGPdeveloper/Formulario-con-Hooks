import React, {useState} from 'react'
//props.firstName, props.lastName, props.age, props.city
//a traves de props estoy recibiendo un diccionario con los argumentos o parametros
//useState: const [state, setState] = setState = ({edoCivil: "Casado"})
const PersonCardFuncional = ({firstName, lastName, age, city}) => {

    const [edoCivil, setEdoCivil] = useState("Soltero");
    const [edad, setEdad] = useState(age);

    const cambiarEdoCivil = () => {
        if(edoCivil === "Soltero"){
            setEdoCivil("Casado");
        }else {
            setEdoCivil("Soltero");
        }
    }

    const cumpleanios = () => {
        setEdad(edad+1);
    }
    
    return (
        <div className="card">
            <small>Card Funcional</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Edad:</b>{edad}
            </p>
            <p>
                <b>Ciudad:</b>{city}
            </p>
            <p>
                <b>Estado Civil:</b>{edoCivil}
            </p>
            <button className='btn btn-success' onClick={cambiarEdoCivil}>Cambiar Estado Civil</button>
            <button className="btn btn-info" onClick={cumpleanios}>Boton de cumpleanios {firstName}</button>

        </div>
    )

}

export default PersonCardFuncional;