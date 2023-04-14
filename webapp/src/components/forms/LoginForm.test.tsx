import { cleanup, fireEvent, render } from '@testing-library/react';

import LoginForm from "./LoginForm";


//mount renderiza en el arbol DOM todos los elementos incluidos los hijos, shallow solo el principal

describe("Funcionamiento del login",()=>{

    afterAll(cleanup);
    it("Comprobamos ciertos campos de texto",()=>{
        const {getByText} = render(<LoginForm/>);
        expect(getByText("Iniciar sesión")).toBeInTheDocument();
        expect(getByText("Únete ya")).toBeInTheDocument();
    });


    it("Comprobamos que se guardan valores y realiza funcion",()=>{
        //introducimos el nombre del WEBID
        const component = render(<LoginForm/>);

        const inputWebId = component.getByLabelText('WebId');

        fireEvent.change(inputWebId, {target: {value :"lomap_es5a"}});
        //esperamos que el campo de texto sea el valor introducido
        expect(inputWebId).toEqual("lomap_es5a");

        //Escogemos el proveedor
        // Selecciona el elemento <select> por su label
        const selectElement = component.getByLabelText('Proveedor de POD') as HTMLSelectElement;
        // Selecciona la opción por su valor o texto
        fireEvent.change(selectElement, { target: { value: 'https://login.inrupt.com' } });
        // Verifica que la opción seleccionada sea la correcta
        expect(selectElement.value).toBe('https://login.inrupt.com');
        //accionamos el boton
        const buttonElement = component.getByText('Iniciar sesión'); //as BaseButton;
        const handleLoginSpy = jest.spyOn(LoginForm.prototype, 'handleLogin');
        fireEvent.click(buttonElement);
        //esperamos a que se realicen las funciones
        expect(handleLoginSpy).toHaveBeenCalled();
        // Limpiar el espía
        handleLoginSpy.mockRestore();
    });
});