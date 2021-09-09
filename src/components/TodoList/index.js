
import "./styles.css";

function TodoList ({ list, handleTodo }) {

    return (
        
        <section>
            <ul className="container-list">

                {list.map((item, index) => 
                    <li className="list" key={index}>
                        {item} 
                        <button className="btn-remove" onClick={() => handleTodo(item)} >Concluir tarefa</button>
                    </li>)
                }

            </ul>

            
        </section>
    )
}


export default TodoList