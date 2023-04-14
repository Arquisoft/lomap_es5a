import {cleanup, render} from '@testing-library/react';
import ComercialInfo from "./ComercialInfo";
import ComercialBox from './comercial/ComercialBox';
import BaseButton from '../buttons/BaseButton';




describe('Comprobamos el componente de comercial box', () => {
    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos  Comercial-box',()=>{
        const message = "¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!";
        const { getByText } = render(<ComercialInfo/>);
        expect(getByText(message)).toBeInTheDocument();
    });


    it('Comprobamos textos',()=>{
        const {getByText} = render(<ComercialBox />);
        expect(getByText("Compartir")).toBeInTheDocument();
        expect(getByText("Únete")).toBeInTheDocument();
    });    
});