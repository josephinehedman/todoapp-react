import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  test('should render Header, AddTodo and TodoList components', () => {
    const app = shallow(<App />);
    expect(app.find('Header').exists()).toBeTruthy();
    expect(app.find('AddTodo').exists()).toBeTruthy();
    expect(app.find('TodoList').exists()).toBeTruthy();
  });
});