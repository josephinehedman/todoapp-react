import './AddTodo.css'
import { useState } from 'react';
const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            alert('Please add a title and description!');
            return;
        }
        addTodo(title, desc);
        setTitle('');
        setDesc('');
    }

    return (
        <article className="form-container">
            <form className="todo__form" onSubmit={onSubmit}>
                <fieldset>
                    <legend className="legend"></legend>
                    <label htmlFor="title" className="label">Title</label>
                    <input type="text" id="title" placeholder="Add title" className="form-input-field form-input__title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <label htmlFor="desc" className="label">Description</label>
                    <input type="text" id="desc" placeholder="Add description" className="form-input-field form-desc" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                    <input type="submit" value="Add task" className="form__submit-btn"></input>
                </fieldset>
            </form>
        </article>
    );
}

export default AddTodo;