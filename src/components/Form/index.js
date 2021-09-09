import { useState } from "react"
import "./styles.css";

function Form ({ addTodo }) {

    const [input, setInput] = useState("");

    return (

        <div className="container-form">
            <input className="input" type="text" placeholder="Digite sua tarefa" value={input} onChange={event => setInput(event.target.value)} />
            <button className="btn-input" onClick={() => addTodo(input)} > Adicionar </button>
        </div>
    )
}

export default Form;