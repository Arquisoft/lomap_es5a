import {cleanup, render} from '@testing-library/react';
import BaseBadge from './BaseBadge';

describe("Comprobacion del componente BaseBadge",()=>{
    
    afterEach(cleanup);
    afterAll(cleanup);

    it("Se renderiza correctamente",()=>{
        const {getByText,getByRole} = render(<BaseBadge text='hola'/>);
        expect(getByText("hola")).toBeInTheDocument();
        expect(getByRole("base-badge")).toBeInTheDocument();
    });
});