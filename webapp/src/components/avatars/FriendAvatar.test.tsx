import FriendAvatar from "./FriendAvatar";
import {cleanup, render} from '@testing-library/react'


describe("Comprobacion de componente friendAvatar", () => {
    afterAll(cleanup);

    it("Renderizamos el componente con todas las propiedades", () => {
        const props = {
            name : "Pepe",
            imgUrl : "imagenes/pepe",
            webId: "pepe.inrupt"
        };
        const {getByRole} = render(<FriendAvatar {...props}/>);
        const friendComponent = getByRole('friend-comp');
        const imagen = getByRole('friend-imagen');
        const p1 = getByRole('friend-name');
        const p2 = getByRole('friend-webid');

        // Comprobamos que el div aparece en el documento
        expect(friendComponent).toBeInTheDocument();
        // Comprobamos que el atributo src del elemento img coincide
        expect(imagen).toHaveAttribute('src',props.imgUrl);
        // Comprobamos que los parrafos contienen el texto esperado
        expect(p1).toHaveTextContent(props.name);
        expect(p2).toHaveTextContent(props.webId);

        
    });

    it ("Renderizamos el componente con la única propiedad obligatoria", () => {
        const props = {
            name : "Pepe" 
        }
        const {getByRole} = render(<FriendAvatar {...props}/>);
        const friendComponent = getByRole('friend-comp');
        const imagen = getByRole('friend-imagen');
        const p1 = getByRole('friend-name');
        const p2 = getByRole('friend-webid');

        // Comprobamos que el div aparece en el documento
        expect(friendComponent).toBeInTheDocument();
        // Comprobamos que el atributo src del elemento img no existe
        expect(imagen).not.toHaveAttribute('src');
        // Comprobamos que el parrafo del nombre contiene lo que debe
        expect(p1).toHaveTextContent(props.name);
        // Comprobamos que el parrafo del webid no contiene texto
        expect(p2).toHaveTextContent("");
    })
});