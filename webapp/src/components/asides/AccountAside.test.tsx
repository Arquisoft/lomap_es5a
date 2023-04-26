import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AccountAside from "./AccountAside";
describe('Comprobamos el componente de AccountAside', () => {
    afterAll(cleanup);

    it('Renderizamos el componente', () => {
        const {getByRole} = render(
            <Router>
                <AccountAside _className=""/>
            </Router>
            );

        expect(getByRole("top")).toBeInTheDocument();
       
    })

})