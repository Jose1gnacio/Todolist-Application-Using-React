import React, { useState } from "react";
import PropTypes from 'prop-types';


const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const editar = () => {
        setModoEdit(true);
    };

    const manejarEditar = (event) => {
        setEditText(event.target.value);
    };

    const submitEdit = (event) => {
        event.preventDefault();
        props.editar(props.id, editText);
        setEditText("");
        setModoEdit(false);
    };

    const borrarTarea = () => {
        props.borrar(props.id);

    };

    return (
        <div>

            {
                !modoEdit ? <div className='tarea'>
                <span className="inputTarea">{props.tarea}</span>
                <span className="editar" btn onClick={editar} >editar</span>
                <span className="borrar" onClick={borrarTarea}>Borrar</span>
            </div>
            :
            <form className='formedit' onSubmit={submitEdit}>
                <input value={editText} onChange= {manejarEditar}/>
                <button>Guardar</button>
            </form>
            }

            

        </div>

    );
};

Tarea.propTypes = {
    tarea: PropTypes.string,
    borrar: PropTypes.func,
    id: PropTypes.number,
    editar: PropTypes.any
    
  };

export default Tarea;