import { render, screen } from '@testing-library/react';
import TodoCard from './TodoCard';

describe('TodoCard component', () => {
    const mockTodo = 
    {
        id: 1,
        title: 'first todo',
        desc: 'first todo',
        done: 'true'
    };

    test('should render todo card as a list item', () => {
        render(<TodoCard todo={mockTodo} />);
        const todoItem = screen.getByRole('listitem');
        expect(todoItem).toBeInTheDocument(); 
    });
});