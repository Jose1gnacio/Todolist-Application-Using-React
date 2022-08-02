import React, {useState} from "react";
import PropTypes from 'prop-types';


//create your first component
const TareasForm = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);
    const manejarFormulario = (event) => {
        setInputText (event.target.value);
        /* console.log(input); */
    };
    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    };
    return (
        <div className="formulario">
            <form className="form" onSubmit={submit}>
                <input className='' value={inputText} onChange={manejarFormulario} placeholder='Task'/>
                <button>Add Task</button>
                {
                  !validacion && <div className='validacion'>Añadir Tarea</div>
                }
            </form>
        </div>
    );
};

TareasForm.propTypes = {
    tarea: PropTypes.string,
    borrar: PropTypes.func,
    id: PropTypes.number,
    nuevaTarea: PropTypes.string
    
  };
export default TareasForm;