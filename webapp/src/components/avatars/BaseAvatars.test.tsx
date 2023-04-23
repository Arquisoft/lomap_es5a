import { cleanup, render } from '@testing-library/react';
import BaseAvatar from './BaseAvatar';

describe("Comprobacion de componente baseavatar",()=>{
    afterAll(cleanup);

    it("Renderizado",()=>{
        //do nothing
        const func = ()=>{
            console.log("click");
        };
        
        const {getByRole} = render(<BaseAvatar img='imagen/source' imgAlt='Avatar image' onClick={func}/>);
        const imgComponent = getByRole('img', { name: 'Avatar image' });
        expect(imgComponent).toBeInTheDocument();
    });

    // eslint-disable-next-line jest/expect-expect
    it("Renderizado sin imagen",()=>{
        //do nothing
        const func = ()=>{
            console.log("click");
        };
        
        render(<BaseAvatar onClick={func} img={''}/>);
    });
});
