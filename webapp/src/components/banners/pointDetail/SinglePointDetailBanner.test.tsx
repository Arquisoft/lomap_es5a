import {cleanup, render, screen} from '@testing-library/react';
import SinglePointDetailBanner from "./SinglePointDetailBanner";
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Comprobamos el componente de SinglePointDetailBanner', () => {
    //tras ejecutar los test limpia
    afterAll(cleanup);

    test("Valor de borderRadius si isRadius es false", () => {
        render(
            <MemoryRouter>
                <SinglePointDetailBanner
                />
            </MemoryRouter>
        );
    
        const styles = screen.getByRole("single-point-banner"); 
        expect(styles).toBeInTheDocument();
      });
     
});