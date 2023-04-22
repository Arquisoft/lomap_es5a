import { cleanup, render} from '@testing-library/react';
import TopAsideButton from './TopAsideButton';

let icon: React.ReactNode;


describe('Comprobamos el componente de TopAsideButton', () => {

    beforeAll ( () => {
        icon = "home_rounded";       
    })

    //tras ejecutar los test limpia
    afterAll(cleanup);
    it('Le paso un icono y un texto, si ninguna action', () => {
        const {getByText, getByRole} = render(
            <TopAsideButton
                 icon = {icon} 
                 text='Inicio'
                 isActive = {false}
            />
        )
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByText("Inicio")).toBeInTheDocument();
    })

    it('Le paso con un action' , () => {
        const {getByText, getByRole} = render(
            <TopAsideButton
                 icon = {icon} 
                 text='Inicio'
                 isActive = {true}

            />
        )
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByText("Inicio")).toBeInTheDocument();
    })




});

