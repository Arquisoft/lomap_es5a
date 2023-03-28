import React from 'react';
import {render, fireEvent, act, findByLabelText, findByText} from '@testing-library/react';
import BaseAvatar from '../../components/avatars/BaseAvatar';


test('Comprobamos BaseAvatar',async () => {
    //La funcion a la que se llama se encuentra en components/Nav.tsx
    //jest.spyOn(funcion,'metodoOnClick').mockImplementation((user:User):Promise<boolean> => Promise.resolve(false))
    await act(async () => {
        const {container, getByText} = render(<BaseAvatar img="imagen" imgAlt='imagen' onClick={()=>{}}/>)
        //... completar ya que actualmente no esta añadida la funcionalidad, es solo estatico.
    });
});