//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css"; // include your styles into the webpack bundle
import TareaForm from './component/TareaForm.jsx';
import Tarea from './component/Tarea.jsx';


const Index = () => {
    const [listaTareas, setListaTareas] = useState([]);

    const nuevaTarea = (tarea) => {
        setListaTareas([tarea, ...listaTareas]);
    };

    const borrar = (id) => {
        const listaFiltrada = listaTareas.filter((e,index)=> index !== id);
        setListaTareas(listaFiltrada);
    };

    const actualizarTarea = (id, tarea) => {
        const listaActualziada = listaTareas.map((e, index)=> {
            if (index === id) {
                e = tarea;
            }

            return e;
        });
        setListaTareas(listaActualziada);
    };

    return (
        <div className="App">
            
            <h1 className="title">Todo List!</h1>
            
            <TareaForm 
            nuevaTarea = {nuevaTarea}
            />

            <div className='lista'> {
                listaTareas.map((e, index) => <Tarea  key={index}
                                                        tarea={e}
                                                        borrar={borrar}
                                                        id={index}
                                                        editar={actualizarTarea} />)}
            </div>
            <h6 className="pendientes">You have {listaTareas.length} tasks!</h6>                
        

            
        </div>
    );
};

export default Index;

//render your react application
ReactDOM.render(<Index />, document.querySelector("#app"));
