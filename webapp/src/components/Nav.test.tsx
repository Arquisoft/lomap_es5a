import BaseNav from "./Nav";
import { cleanup, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";



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
            

    // Assert
    expect(appLogo).toBeInTheDocument();
    expect(menuItems).toBeInTheDocument();
            
});


test ("Comprobamos que se renderizan todos los elementos de la navBar que no dependen del login", () => {
    
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
    
    // Renderizamos el componente
    
    const {getByTestId, getByText} = render(
    <Router>
        <BaseNav />
    </Router>
    );
   

    // Recuperamos todos los elementos que lo componen
    const appLogo = getByTestId("logo");
    const menuItems = getByText("Inicio");
            

    // Assert
    expect(appLogo).toBeInTheDocument();
    expect(menuItems).toBeInTheDocument();
            
});

test ("Comprobamos que si no estamos logeados se muestra el boton", () => {
    const mockedSessionLogOut = {
        session: {
            info: {
                isLoggedIn: false
            }
        }
    }
    
    
    jest.mock("@inrupt/solid-ui-react", () => ({            
        // 4- Mock the required hook
        useSession: () => mockedSessionLogOut
    }));


    // Renderizamos el componente
    const {getByTestId} = render(
        <Router>
            <BaseNav/>
        </Router>
    );

    // Comprobamos que se muestra el BaseAvatar (NoImageSkeleton al no tener imagen)
    const button = getByTestId("button");
    expect(button).toBeInTheDocument();

});
