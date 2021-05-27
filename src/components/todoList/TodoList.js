import TodoCard from '../todoCard/TodoCard';
import './TodoList.css';

const TodoList = ({ list, onToggle, onDelete }) => {
    return (
        <article className="todo-list-container">
            <ul className="todo-list">
                {list.map(todo => (
                    <TodoCard key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                ))}
            </ul>
        </article>
    );
}

export default TodoList;