import { cleanup, render } from '@testing-library/react';
import HomePage from "../../pages/home/HomePage";

describe("Comprobacion del mapa",()=>{
    afterAll(cleanup);
    it("Comprobamos el componente se renderiza correctamente",()=>{
        const {getByTestId} = render(<HomePage/>);
        const map = getByTestId("home-map");
        expect(map).toBeInTheDocument();
    });
});