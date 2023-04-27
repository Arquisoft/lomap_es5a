
import UserAccountBanner from './UserAccountBanner'
import {cleanup, render, screen} from '@testing-library/react'

describe("Comprobacion de componente userAccountBanner", () => {
    afterAll(cleanup);

    it("Renderizamos el componente pasandole todas las propiedades", () => {
        const props = {
            _className: "testing",
            imgBackground : "img/test"
        };


        // Renderizamos el componente
        render(<UserAccountBanner {...props} />);
        // Comprobamos que se renderiza la imagen de fondo cuando se recibe
        expect(screen.getByAltText("").getAttribute("src")).toBe(props.imgBackground);
        // Comprobamos que se renderiza el BaseProfileItem
        expect(screen.getByTestId("test-user-account-profile-item")).toBeInTheDocument();
              
    });

    
});