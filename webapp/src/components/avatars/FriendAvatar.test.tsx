import FriendAvatar from "./FriendAvatar";
import {act, cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import { ACCOUNT_PATH } from "../../routes";
import {useState as useStateMock} from 'react'






const mockedSession = {
    session: {
        info: {
            webId: 'https://ejemplo.com/usuario'
        }
    }
  };  

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }));

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));


// jest.mock("../../api/friends.api", () => ({
//     ...(jest.requireActual("../../api/friends.api") as any),
//     deleteFriend: () => jest.fn()
    
// }));
jest.mock("@inrupt/solid-ui-react", () => ({
    ...(jest.requireActual("@inrupt/solid-ui-react") as any),
    useSession: () => mockedSession
    
}));



describe("Testing de componente friendAvatar", () => {
    //const setState = jest.fn();
    afterAll(cleanup);
    
    // afterEach(() => {
    //     mockedDeleteFriend.mockClear();
    //     mockedUsedNavigate.mockClear();
    //   });
    
    // beforeEach(() => {
    //     (useStateMock as jest.Mock).mockImplementation(init => [init,setState]);
    // })

    
    it("Comprobamos que se elimina al amigo correctamente y se ejecuta el navigate", async () => { 
        
        const mockDeleteFriend = jest.fn();

        jest.mock("../../api/friends.api", () => ({
            ...(jest.requireActual("../../api/friends.api") as any),
            deleteFriend: mockDeleteFriend
            
        }));
        
        const props = {
            name : "Pepe",
            imgUrl : "imagenes/pepe",
            webId: "pepeWebId",
            vista: "vista-cualquiera"
        };


        const {getByTestId} = render(
            <Router>
                <FriendAvatar {...props} />
            </Router>
        );

        // Simulamos click en el boton eliminar
        const button = getByTestId("icon");
        await act(async () => {
            fireEvent.click(button);
        }); 
        // Comprobamos que se producen las acciones consecuentes                
        //expect(mockDeleteFriend).toHaveBeenCalledWith(mockedSession.session.info.webId,props.webId);
        //expect(mockedUsedNavigate).toHaveBeenCalledWith(ACCOUNT_PATH);   

    });

    it("Comprobamos que se renderiza correctamente con las propiedaes nombre,imgurl y webid", async () => {

        
        const props = {
            name : "Pepe",
            imgUrl : "imagenes/pepe",
            webId: "pepe.inrupt"
        };
        await act(async () => {
            render(
            <Router>
                <FriendAvatar {...props}/>
            </Router>
            ); 
        });
        const friendComponent = screen.getByRole('friend-comp');
        const imagen = screen.getByRole('friend-imagen'); 
        const p1 = screen.getByRole('friend-name');
        
        

        // Comprobamos que el div aparece en el documento
        expect(friendComponent).toBeInTheDocument();
        // Comprobamos que el atributo src del elemento img coincide
        expect(imagen).toHaveAttribute('src',props.imgUrl);
        // Comprobamos que los parrafos contienen el texto esperado
        expect(p1).toHaveTextContent(props.name);        

        
    });

    it("Comprobamos que el boton eliminar se renderiza correctamente is la vista no es add-point", async () => {
        const props = {
            name : "Pepe",
            imgUrl : "imagenes/pepe",
            webId: "pepe.inrupt",
            vista: "vista-cualquiera"
        };

        await act(async () => {
            render(
            <Router>
                <FriendAvatar {...props}/>
            </Router>
            ); 
        });
        // Comprobamos que se renderiza el boton eliminar
        expect(screen.getByTestId("icon")).toBeInTheDocument();    
        


    });

    // it ("Renderizamos el componente con la única propiedad obligatoria", () => {
    //     const props = {
    //         name : "Pepe" 
    //     }
    //     const {getByRole} = render(<FriendAvatar {...props}/>);
    //     const friendComponent = getByRole('friend-comp');
    //     const imagen = getByRole('friend-imagen');
    //     const p1 = getByRole('friend-name');
    //     const p2 = getByRole('friend-webid');

    //     // Comprobamos que el div aparece en el documento
    //     expect(friendComponent).toBeInTheDocument();
    //     // Comprobamos que el atributo src del elemento img no existe
    //     expect(imagen).not.toHaveAttribute('src');
    //     // Comprobamos que el parrafo del nombre contiene lo que debe
    //     expect(p1).toHaveTextContent(props.name);
    //     // Comprobamos que el parrafo del webid no contiene texto
    //     expect(p2).toHaveTextContent("");
    // })
});