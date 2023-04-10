import React from 'react';
import { cleanup, render } from '@testing-library/react';
import HomePage from "../../pages/home/HomePage";

describe("Comprobacion del mapa",()=>{
    afterAll(cleanup);
    it("Comprobamos el componente se renderiza correctamente",()=>{

        //const {container} = 
        render(<HomePage/>);
        //const basemap = findByType(container,BaseMap);
        //expect(basemap).toBeInTheDocument();
    });
});