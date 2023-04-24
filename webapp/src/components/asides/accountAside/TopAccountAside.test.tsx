import { cleanup, render, fireEvent} from '@testing-library/react';
import TopAccountAside from './TopAccountAside';
import { BrowserRouter as Router } from "react-router-dom";
describe('Comprobamos el componente de TopAccountAside', () => {
    afterAll(cleanup);

    it('Importamos el componente completo y comprobamos que existe', () =>{
        const {getByText, getByRole} = render( 
        <Router>
            <TopAccountAside />
        </Router>
        );
        //Comprobamos vuelta atras
        expect(getByRole("back")).toBeInTheDocument();
        //Comprobamos titulo
        expect(getByText("Mi cuenta")).toBeInTheDocument();
        //Comprobamos los botones
        //Boton 1
        expect(getByText("Inicio")).toBeInTheDocument();
        //Boton 2
        expect(getByText("Guardados")).toBeInTheDocument();
        //Boton 3
        expect(getByText("Añadir punto")).toBeInTheDocument();
        //Boton 4
        expect(getByText("Ver perfil")).toBeInTheDocument();
        //Boton 5
        expect(getByText("Preguntas frecuentes")).toBeInTheDocument();
        //Boton 6
        expect(getByText("Cerrar sesión")).toBeInTheDocument();
    })

    it('Comprobamos el boton LogOut' , () => {
        const {getByText} = render( 
            <Router>
                <TopAccountAside />
            </Router>
            );
        const handleClick = jest.fn();
        fireEvent.click(getByText("Cerrar sesión"));
        expect(handleClick).toHaveBeenCalledTimes(0);
    })

    it('Comprobamos el boton volver atras' , () => {
        const {getByRole} = render( 
            <Router>
                <TopAccountAside />
            </Router>
            );
        const handleClick = jest.fn();
        fireEvent.click(getByRole("back"));
        expect(handleClick).toHaveBeenCalledTimes(0);
    })

    it('Comprobamos el navegar' , () => {
        const {getByText} = render( 
            <Router>
                <TopAccountAside />
            </Router>
            );
        const handleClick = jest.fn();
        fireEvent.click(getByText("Añadir punto"));
        expect(handleClick).toHaveBeenCalledTimes(0);
    })


});