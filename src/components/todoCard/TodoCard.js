import './TodoCard.css'
const TodoCard = ({todo, onToggle, onDelete}) => {
    return (
        <li className={todo.done ? 'todo-list__item done' : 'todo-list__item not-done'}>
                <div className="todo-list__item-info" onClick={() => onToggle(todo.id)}>
                    <h2>{todo.title}</h2>
                    <p>{todo.desc}</p>
                </div>
                {todo.done && <button className="todo-list__item__remove-btn" onClick={() => onDelete(todo.id)}>Remove</button>}
        </li>
    );
}

export default TodoCard;