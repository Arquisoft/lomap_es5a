import {fireEvent, render} from '@testing-library/react';
import React from "react";
import LoginForm from "./LoginForm";

test('Probamos el funcionamiento del formulario de login', async ()=>{
    const {container,getByText} = render(<LoginForm/>);
    //comprobamos el provider
    const inputWebId = container.querySelector('input[label="WebId"]')!;
    fireEvent.change(inputWebId, {target: {value :"lomap_es5a"}});
    //comprobamos las opciones de provedores
    //const select = container.querySelector();

    //const select = getByLabelText('Select field');
    //fireEvent.change(select, { target: { value: 'option 2' } });
    //const option = getByText('Option 2');
    //expect(option.selected).toBeTruthy();
    //comprobamos elementos presentes
    expect(getByText("Iniciar sesión")).toBeInTheDocument;
    expect(getByText("Únete ya")).toBeInTheDocument;
});