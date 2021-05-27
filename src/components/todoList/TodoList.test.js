import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList component', () => {
    const mockList = 
    [
        {
            id: 1,
            title: 'first todo',
            desc: 'first todo',
            done: 'true',
        },
        {
            id: 2,
            title: 'second todo',
            desc: 'second todo',
            done: 'false',
        }
    ]; 

    test('should render all todo cards from the todo list', () => {
        render(<TodoList list={mockList}/>);
        const todos = screen.getAllByRole('listitem');
        expect(todos).toHaveLength(2);
        expect(todos[0]).toHaveTextContent('first todo');
        expect(todos[1]).toHaveTextContent('second todo');
    });

    test('should render TodoCard component', () => {
        const todoCard = shallow(<TodoList list={mockList}/>);
        expect(todoCard.find('TodoCard').exists()).toBeTruthy();
    });
});