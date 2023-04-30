import { cleanup, render, screen } from '@testing-library/react';
import BottomAccountAside from './BottomAccountAside';
import { BrowserRouter as Router } from "react-router-dom";
import BaseTextInput from '../../inputs/BaseTextInput';
describe('Comprobamos el componente de BottomAccountAside', () => {
    afterAll(cleanup);

    it('Importamos el componente completo y comprobamos que existe', () =>{
        const {getByText, getByRole} = render( 
        <Router>
            <BottomAccountAside />
        </Router>
        );
        expect(getByRole("friends-aside")).toBeInTheDocument();
        expect(getByText("Amigos")).toBeInTheDocument();
        expect(getByText("Agregar amigo")).toBeInTheDocument();
    })

});