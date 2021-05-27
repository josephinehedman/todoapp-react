import renderer from 'react-test-renderer';
import Header from './Header'

describe('Header component', () => {
    test('should render the heading (by matching snapshot)', () => {
        const header = renderer.create(<Header />).toJSON();
        expect(header).toMatchSnapshot();
    });
});