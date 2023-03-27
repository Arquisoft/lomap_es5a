import React from 'react';
import {render} from '@testing-library/react';
import PageInfo from "../../components/about/PageInfo";

test('Comprobamos pageinfo',async () => {
    const message1:string = "Tu decides que puntos compartir. La información se almacena de forma distribuida.";
    const message2:string = "Si eres un negocio local, compártelo con tus amigo y el resto de usuarios.";
    const message3:string = "Tu eres el propietario de tus publicaciones, no almacenamos tus publicaciones.";
    const { getByText } = render(<PageInfo/>);
    expect(getByText(message1)).toBeInTheDocument();
    expect(getByText(message2)).toBeInTheDocument();
    expect(getByText(message3)).toBeInTheDocument();
});