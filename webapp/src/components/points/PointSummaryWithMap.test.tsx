import { cleanup, render, screen } from '@testing-library/react';
import PointSummaryWithMap from './PointSummaryWithMap';
import { BrowserRouter as Router } from "react-router-dom";
describe('Comprobamos el componente de PointSummaryWithMap', () => {
    afterAll(cleanup);

    it('Importamos el componente completo y comprobamos que existe', () =>{
        const {getByRole} = render( 
        <Router>
            <PointSummaryWithMap name={'point'} address={'address'} lat={0} lng={0} hasMap={true} />
        </Router>
        );
        expect(getByRole("point-summary")).toBeInTheDocument();
        expect(getByRole("point-summary-with-map")).toBeInTheDocument();
        expect(getByRole("point-summary-body")).toBeInTheDocument();
        expect(getByRole("point-summary-details")).toBeInTheDocument();
        expect(screen.getByTestId("button")).toBeInTheDocument();
    })

});