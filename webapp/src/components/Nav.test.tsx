





import BaseNav from "./Nav";
import { cleanup, render} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";




const mockedSessionLogIn = {
    session: {
        info: {
            isLoggedIn: true
        }
    }
}
jest.mock("@inrupt/solid-ui-react", () => ({            
    // 4- Mock the required hook
    useSession: () => mockedSessionLogIn
}));



 

describe("Comp NavBar", () => {

    afterAll(cleanup);

    test ("Comprobamos que se renderizan todos los elementos de la navBar que no dependen del login", () => {
        
        
        // Renderizamos el componente
        
        const {getByTestId, getByText} = render(
        <Router>
            <BaseNav />
        </Router>
        );
       
    
        // Recuperamos todos los elementos que lo componen
        const appLogo = getByTestId("logo");
        const menuItems = getByText("Inicio");

        

                
    
        // Comprobamos que aparecen todos los elementos recuperados
        expect(appLogo).toBeInTheDocument();
        expect(menuItems).toBeInTheDocument();

                
    });
    
    
    
    
    test ("Comprobamos que se renderizan todos los elementos de la navBar estando logeados", () => {
        

        
        // Renderizamos el componente
        
        const {getByTestId} = render(
        <Router>
            <BaseNav />
        </Router>
        );
       
    
        // Recuperamos todos los elementos que lo componen
        const avatar = getByTestId("skeleton");
        expect(avatar).toBeInTheDocument();
                
    
                
    });

    

});



