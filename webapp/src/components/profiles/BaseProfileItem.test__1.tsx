import {render, screen, cleanup } from '@testing-library/react';
import BaseProfileItem from "./BaseProfileItem";
import { MemoryRouter } from 'react-router-dom';

//mockeamos la consola pra realizar la prueba
console.log = jest.fn();

describe('BaseProfileItem componente', () => {

    afterAll(cleanup);

    test("renderiza el componente sin profile", () => {
        render(
            <MemoryRouter>
                <BaseProfileItem profileImage={''} name={'name'} email={'email'} />
            </MemoryRouter>
        );
    
        const styles = screen.getByTestId("baseprofile"); 
        expect(styles).toBeInTheDocument();

        const labelName = screen.getByText('name');
        expect(labelName).toBeInTheDocument();

        const labelEmail = screen.getByText('email');
        expect(labelEmail).toBeInTheDocument();
      });
    
    test("renderiza el componente con profile", () => {
        render(
            <MemoryRouter>
                <BaseProfileItem profileImage={'profile'} name={'name'} email={'email'} />
            </MemoryRouter>
        );
    
        const styles = screen.getByTestId("baseprofile"); 
        expect(styles).toBeInTheDocument();

        const labelName = screen.getByText('name');
        expect(labelName).toBeInTheDocument();

        const labelEmail = screen.getByText('email');
        expect(labelEmail).toBeInTheDocument();
      });
  
   
  });