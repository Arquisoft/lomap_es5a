import React from 'react';
import {render, cleanup,fireEvent, act, findByLabelText, findByText} from '@testing-library/react';
import BaseAvatar from './BaseAvatar';


{/**test('Comprobamos BaseAvatar',async () => {
    //La funcion a la que se llama se encuentra en components/Nav.tsx
    //jest.spyOn(funcion,'metodoOnClick').mockImplementation((user:User):Promise<boolean> => Promise.resolve(false))
    await act(async () => {
        const {container, getByText} = render(<BaseAvatar img="imagen" imgAlt='imagen' onClick={()=>{}}/>)
        //... completar ya que actualmente no esta añadida la funcionalidad, es solo estatico.
    });
}); */}

describe("Comprobacion de componente baseavatar",()=>{
    afterEach(cleanup);
    afterAll(cleanup);

    it("Renderizado",()=>{
        //do nothing
        const func = ()=>{};
        
        const {getByRole} = render(<BaseAvatar img='imagen/source' imgAlt='Avatar image' onClick={func}/>);
        const imgComponent = getByRole('img', { name: 'Avatar image' });
        expect(imgComponent).toBeInTheDocument();
    });
});
