import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import * as helper from "../../helpers/AuthHelper"


const mockedSignIn = jest.fn();






describe("tests para el componente LoginForm", () => {
    test("Comprobamos que el componente se renderiza de forma correcta", () => {
        // Renderizamos el componente
        const {getByLabelText,getByTestId} = render(<LoginForm/>);

        // Recuperamos sus elementos y comprobamos que estan presentes
        expect(getByLabelText("Proveedor de POD")).toBeInTheDocument();
        expect(getByTestId("button")).toBeInTheDocument();


    });

    test("Comprobamos que si hacemos click en el boton se ejecuta la funcion handlelogin", () => {
        jest.spyOn(helper, "signIn").mockImplementation(mockedSignIn);
        
        // Renderizamos el componente
        const {getByTestId} = render(
        <Router>
            <LoginForm/>
        </Router>
        );

        // Recuperamos el boton
        const button = getByTestId("button");
        // Simulamos un click en el boton
        fireEvent.click(button);
        // Comprobamos que se ha invocado a la funcion
        expect(mockedSignIn).toHaveBeenCalledTimes(1);

    });

})