import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo';

describe('AddTodo component', () => {
    test('should render input field for title and description and a submit button', () => {
        render(<AddTodo />);
        expect(screen.getByPlaceholderText('Add title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Add description')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    test('should update the value in the input fields', async () => {
        const setTitle = jest.fn((value) => {});
        const setDesc = jest.fn((value) => {});

        render(<AddTodo setTitle={setTitle} setDesc={setDesc}/>);

        const title = screen.getByPlaceholderText('Add title');
        const desc = screen.getByPlaceholderText('Add description');

        fireEvent.change(title, {target: { value: 'test title'} });
        fireEvent.change(desc, {target: { value: 'test description'} });

        expect(title.value).toEqual('test title');
        expect(desc.value).toEqual('test description');
    });
});