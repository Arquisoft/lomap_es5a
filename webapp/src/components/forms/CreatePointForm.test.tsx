import {cleanup, fireEvent, render} from '@testing-library/react';
import React from "react";
import CreatePointForm from './CreatePointForm';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import BaseTextInput from '../inputs/BaseTextInput';
import BaseSelect from '../inputs/BaseSelect';
import BaseButton from '../buttons/BaseButton';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Enzyme.configure({ adapter: new Adapter() });

describe('Creacion de un punto para comprobarlo con el formulario',()=>{
    
   afterEach(cleanup);
    afterAll(cleanup);
    

    it("Comprobacion de componentes del test",()=>{
        const wrapper = mount(<CreatePointForm/>);
        const basetextinput = wrapper.find(BaseTextInput);
        expect(basetextinput.length).toEqual(1);
        const baseselect = wrapper.find(BaseSelect);
        expect(baseselect.length).toEqual(1);
        const basebutton = wrapper.find(BaseButton);
        expect(basebutton.length).toEqual(2);
    });


    it("Caso de prueba",()=>{
        //crear un punto propio
        //introducir los datos del formulario y comparar con lo esperado
        const {getByLabelText,getByTestId,getByText} = render(<CreatePointForm/>);
        
        expect(getByText("Publicar")).toBeInTheDocument;

        const name = getByLabelText('Nombre');
        const latitud = getByLabelText('Latitud');
        const longitud = getByLabelText('Longitud');
        const address = getByLabelText('Dirección postal');
        const category = getByLabelText('Categoría');
        const description = getByLabelText('Descripción');

        fireEvent.change(name,{target :{value: "Pedro"}});
        fireEvent.change(latitud,{target :{value: "43.12345"}});
        fireEvent.change(longitud,{target :{value: "43"}});
        fireEvent.change(address,{target :{value: "calle/Pepe"}});
        fireEvent.change(category,{target :{value: "Restaurantes"}});
        fireEvent.change(description,{target :{value: "descripcion"}});

        const point = getByTestId('point');

        expect(point).toHaveProperty("name","Pedro");
        expect(point).toHaveProperty("lat","43.12345");
        expect(point).toHaveProperty("lng","43");
        expect(point).toHaveProperty("address","calle/Pepe");
        expect(point).toHaveProperty("category","Restaurantes");
        expect(point).toHaveProperty("description","descripcion");
    });

    

});