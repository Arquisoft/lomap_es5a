import React from 'react';
import {render} from '@testing-library/react';
import ComercialInfo from "./ComercialInfo";
import { shallow } from 'enzyme';
import ComercialBox from './comercial/ComercialBox';
import BaseButton from '../buttons/BaseButton';

test('Comprobamos el componente de comercial box',async () => {
    const message:string = "¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!";
    const { getByText } = render(<ComercialInfo/>);
    expect(getByText(message)).toBeInTheDocument();

    const wrapper = shallow(<ComercialInfo />);
    expect(wrapper.find(ComercialBox).find(BaseButton));
});