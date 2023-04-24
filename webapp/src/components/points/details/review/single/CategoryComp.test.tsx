import { cleanup, render } from '@testing-library/react';
import CategoryComp from './CategoryComp';
import { Category } from '../../../../../shared/shareddtypes';




describe('Comprobamos el componente de category comp', () => {


    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole una categoria',()=>{
        const { getByRole, getByText } = render(<CategoryComp category={Category.RESTAURANT} />);
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByText("restaurant")).toBeInTheDocument();    
    });

      
});