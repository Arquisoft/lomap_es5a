import {cleanup, fireEvent, render} from '@testing-library/react';
import React from "react";
import LoginForm from "./LoginForm";
import {mount} from 'enzyme';


//mount renderiza en el arbol DOM todos los elementos incluidos los hijos, shallow solo el principal

describe("Funcionamiento del login",()=>{

    afterAll(cleanup);
    it("Comprobamos ciertos campos de texto",()=>{
        const {getByText} = render(<LoginForm/>);
        expect(getByText("Iniciar sesión")).toBeInTheDocument;
        expect(getByText("Únete ya")).toBeInTheDocument;
    });

    it("Comprobamos que cambia la propiead webId cuando se selecciona una opcion",()=>{
        // Crear una instancia del componente
        const wrapper = mount(<LoginForm />);
        // Encontrar el select
        const select = wrapper.find('select[name="provider"]');
        // Simular el cambio de valor en el select
        select.simulate('change', { target: { value: 'https://inrupt.net' } });
        // Comprobar que el valor de webId ha cambiado
        expect(wrapper.state('webId')).toEqual('https://inrupt.net');
    });

    it('Activamos el boton de logeo', () => {
        // Crear una instancia del componente
        const wrapper = mount(<LoginForm />);
        // Encontrar el botón de inicio de sesión
        const loginButton = wrapper.find('button[type="button-blue-outlined"]');
        // Espiar la función handleLogin
        const handleLoginSpy = jest.spyOn(LoginForm.prototype, 'handleLogin');
        // Simular el clic en el botón de inicio de sesión
        loginButton.simulate('click');
        // Comprobar que la función handleLogin se ha llamado
        expect(handleLoginSpy).toHaveBeenCalled();
        // Limpiar el espía
        handleLoginSpy.mockRestore();
      });

    it("Comprobamos que se guardan valores y realiza funcion",()=>{
        //introducimos el nombre del WEBID
        const component //{container,getByLabelText, getByText} 
        = render(<LoginForm/>);
        const inputWebId = component.container.querySelector('input[label="WebId"]')!;
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