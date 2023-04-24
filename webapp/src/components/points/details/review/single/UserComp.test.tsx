import { cleanup, render } from '@testing-library/react';
import UserComp from './UserComp';



describe('Comprobamos el componente de user comp', () => {


    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole un nombre',()=>{
        const { getByRole, getByText } = render(<UserComp name='Richard'/>);
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByText("Richard")).toBeInTheDocument();  
    });

      
});