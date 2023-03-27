import React from 'react';
import {render} from '@testing-library/react';
import ComercialInfo from "../../components/about/ComercialInfo";

test('Comprobamos el componente de comercial box',async () => {
    const message:string = "¡Explora todos los rincones de tu ciudad y compartelos con amigos y todo el mundo!";
    const { getByText } = render(<ComercialInfo/>);
    expect(getByText(message)).toBeInTheDocument();
});