import { cleanup,render,screen } from "@testing-library/react";
import ComercialBox from "./ComercialBox";


describe("Componente ComercialBox",()=>{
    afterEach(cleanup);
    afterAll(cleanup);

    it("Comprobamos renderizado", ()=>{
        const {getByRole,getByText} = render(<ComercialBox/>);
        expect(getByRole("comercialbox-total")).toBeInTheDocument();
        expect(getByRole("comercialbox-title")).toBeInTheDocument();
        expect(getByText("Lomap")).toBeInTheDocument();
        expect(getByText("Mapas")).toBeInTheDocument(); 
        expect(getByRole("comercialbox-slogan")).toBeInTheDocument();
        expect(getByRole("comercialbox-discount")).toBeInTheDocument();
    });

});