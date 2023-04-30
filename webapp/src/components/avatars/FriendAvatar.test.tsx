import FriendAvatar from './FriendAvatar';
import {act, cleanup, render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";









describe("Testing de componente friendAvatar", () => {    
    
    afterAll(cleanup);




    it("Comprobamos que se renderiza correctamente con las propiedaes nombre,imgurl y webid", async () => {


        const props = {
            name: "Pepe",
            imgUrl: "imagenes/pepe",
            webId: "pepe.inrupt"
        };
        await act(async () => {
            render(
                <Router>
                    <FriendAvatar {...props} />
                </Router>
            );
        });
        const friendComponent = screen.getByRole('friend-comp');
        const imagen = screen.getByRole('friend-imagen');
        const p1 = screen.getByRole('friend-name');



        // Comprobamos que el div aparece en el documento
        expect(friendComponent).toBeInTheDocument();
        // Comprobamos que el atributo src del elemento img coincide
        expect(imagen).toHaveAttribute('src', props.imgUrl);
        // Comprobamos que los parrafos contienen el texto esperado
        expect(p1).toHaveTextContent(props.name);


    });

    it("Comprobamos que el boton eliminar se renderiza correctamente is la vista no es add-point", async () => {
        const props = {
            name: "Pepe",
            imgUrl: "imagenes/pepe",
            webId: "pepe.inrupt",
            vista: "vista-cualquiera"
        };

        await act(async () => {
            render(
                <Router>
                    <FriendAvatar {...props} />
                </Router>
            );
        });
        // Comprobamos que se renderiza el boton eliminar

        expect(screen.getByTestId("icon")).toBeInTheDocument();



    });

});