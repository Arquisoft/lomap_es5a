import { cleanup, render } from '@testing-library/react';
import LoginPage from './LoginPage';

const HEADING_TEXT = "Iniciar sesión";

test('Login Page', () => {
    afterAll(cleanup);
    it('Page heading appears on the page', () => {
        const { getByText } = render(<LoginPage />);
        const headingElement = getByText(HEADING_TEXT);
        expect(headingElement).toBeInTheDocument();
    });
});

