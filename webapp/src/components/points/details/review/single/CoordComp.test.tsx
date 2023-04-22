import { cleanup, render } from '@testing-library/react';
import CoordComp from './CoordComp';



describe('Comprobamos el componente de coord comp', () => {


    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole una coordenada',()=>{
        const { getByRole, getByText } = render(<CoordComp  coord={20.456783}/>);
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByText("20.456783")).toBeInTheDocument();  
    });

      
});