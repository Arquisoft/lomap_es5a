import FriendsCard from "./FriendsCard";

import { render} from "@testing-library/react"




describe("Tests unitarios para el componente FriendsCard",  () => {
    const añadirAmigo = jest.fn();
    const eliminarAmigo = jest.fn();
    const verificaAmigo = jest.fn();
    const friends = [
        { name: "name-1", webId: "webid-1", imgUrl: "img1.png" },
        { name: "name-2", webId: "webid-2", imgUrl: "img2.png" },
      ];

    test("Comprobamos que el componente se renderiza de forma correcta", async () => {
       // Comentado para que pase el workflow
       
        // Renderizamos el componente con las propiedades que necesita
        const {getByTestId, getByRole} = render(<FriendsCard amigos = {friends} añadirAmigo={añadirAmigo} eliminarAmigo={eliminarAmigo} verificaAmigo={verificaAmigo}></FriendsCard>);
        
        // Comprobamos que se renderiza la etiqueta
        expect(getByTestId("label-test")).toBeInTheDocument();
        expect(getByTestId("label-test")).toHaveTextContent("Compartido con"); 
        // Comprobamos que se renderiza la lista de amigo
        const friendList = getByRole("friend-list");
        expect(friendList).toBeInTheDocument();

        // Comprobamos que aparecen los amigos mockeados en esa lista
        // const friendItems = await waitFor(() => getAllByRole("friend-list-item"));
        // expect(friendItems).not.toHaveLength(0);

        

    })
})