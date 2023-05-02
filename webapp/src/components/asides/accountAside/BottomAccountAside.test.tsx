import { cleanup, render } from '@testing-library/react';
import BottomAccountAside from './BottomAccountAside';
import { BrowserRouter as Router } from "react-router-dom";




describe('Comprobamos el componente de BottomAccountAside', () => {
    afterAll(cleanup);

    it('Importamos el componente completo y comprobamos que se renderiza correctamente', () =>{
        const {getByText, getByRole, getByPlaceholderText} = render( 
        <Router>
            <BottomAccountAside />
        </Router>
        );
        expect(getByRole("friends-aside")).toBeInTheDocument();
        expect(getByText("Amigos")).toBeInTheDocument();
        expect(getByText("Agregar amigo")).toBeInTheDocument();
        expect(getByText("Recargar amigos")).toBeInTheDocument();
        expect(getByPlaceholderText("ej: amigo.inrupt.net"));
        expect(getByRole("friend-list-aside")).toBeInTheDocument();
    });



});