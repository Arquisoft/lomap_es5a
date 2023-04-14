import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import BaseButton from '../buttons/BaseButton';
import BaseSelect from '../inputs/BaseSelect';
import BaseTextInput from '../inputs/BaseTextInput';
import CreatePointForm from './CreatePointForm';
import { MemoryRouter } from "react-router-dom";
import { CREATE_POINT_PATH } from '../../routes';


describe('Creacion de un punto para comprobarlo con el formulario',()=>{
    mount(
        <MemoryRouter>
          <CreatePointForm />
        </MemoryRouter>
      );
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
});