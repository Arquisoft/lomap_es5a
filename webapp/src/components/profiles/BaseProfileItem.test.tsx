import { cleanup, screen } from '@testing-library/react';

describe("Componente BaseProfileItem" ,()=>{

    afterAll(cleanup);

    it("Renderizado",()=>{
        const props = {
            profileImage: 'https://example.com/image.png',
            name: 'Pedro',
            email: 'pedor@hotmail.com'
          };
          
        expect(screen.getByRole('img')).toHaveAttribute('src',props.profileImage);
        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByText(props.email)).toBeInTheDocument();
    })
});