import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ComercialInfo from "./ComercialInfo";
import ComercialBox from './comercial/ComercialBox';
import BaseButton from '../buttons/BaseButton';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});


describe('Comprobamos el componente de comercial box', () => {
    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos  Comercial-box',()=>{
        const message = "¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!";
        const { getByText } = render(<ComercialInfo/>);
        expect(getByText(message)).toBeInTheDocument();
    });

    it('Comprobamos Comercial info',()=>{
        //Comprobamos que exista un ComercialBox
        const wrapper = shallow(<ComercialInfo />);
        const childWrapper = wrapper.find(ComercialBox);
        expect(childWrapper.length).toEqual(1);
    });

    it('Comprobamos  Base button',()=>{
        const wrapper = shallow(<ComercialBox />);
        const childWrapper = wrapper.find(BaseButton);
        expect(childWrapper.length).toEqual(2);
    });

    it('Comprobamos textos',()=>{
        const {getByText} = render(<ComercialBox />);
        expect(getByText("Compartir")).toBeInTheDocument();
        expect(getByText("Únete")).toBeInTheDocument();
    });    
});