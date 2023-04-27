import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import IconMenuItem from "./IconMenuItem";
import { cleanup, fireEvent, render, screen} from "@testing-library/react";
import { LOGIN_PATH } from "../../routes";
import { shallow } from "enzyme";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";



// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// const mockedUsedSession = {
//   logout: jest.fn()
// }


// jest.mock("@inrupt/solid-ui-react", () => ({
//   // 3- Import non-mocked library and use other functionalities and hooks
//   ...(jest.requireActual("@inrupt/solid-ui-react") as any),
//   useSession: () => mockedUsedSession
// }));

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual("react-router-dom") as any),
  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate
}));



describe("Testing para el componente IconMenuItem", () => {
 

  it("Comprobamos que se renderiza el componente", () => {
    render(
      <Router>
        <IconMenuItem name="Example" iconName="example" url="/example" />
      </Router>
    );

    //fireEvent.click(screen.getByText("Example"));

    //expect(mockUseNavigate).toHaveBeenCalledWith(url);
    expect(screen.getByRole('listitem')).toBeInTheDocument();

  });

  it("Comprobamos que se redirige a la url indicada cuando se hace click sobre el componente", () => {
    
    const props = {
      name: "Home",
      iconName: "home",
      url: "/home",
    };
    
    const { getByRole } = render(
      <Router>
        <IconMenuItem {...props} />
      </Router>
    ); 
    fireEvent.click(getByRole("listitem"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(props.url);

  });

  it("Comprobamos que si el nombre es Cerrar sesión, se limpia el storage", () => {
    
    const props = {
      name: "Cerrar sesión",
      iconName: "example",
      url: "",
    };
    
    
    
    const { getByRole } = render(
      <Router>
        <IconMenuItem {...props} />
      </Router>
    ); 
    // Añadimos algo al sessionStorage
    sessionStorage.setItem("testing", "testing");
    fireEvent.click(getByRole("listitem"));
    // Comprobamos que tras hacer click el sessionStorage no tiene ese elemento
    expect(sessionStorage.getItem("testing")).toBeNull();
    // Comprobamos que se invoca el logout

    //expect(mockedUsedSession.logout).toHaveBeenCalled();

  });


    
    //   it("should clear sessionStorage and call session.logout when 'Cerrar sesión' is clicked", async () => {
    //     const clearSpy = jest.spyOn(window.sessionStorage, "clear");
    //     render(<IconMenuItem name="Cerrar sesión" iconName="logout" />);
    
    //     fireEvent.click(screen.getByText("Cerrar sesión"));
    
    //     expect(clearSpy).toHaveBeenCalled();
    //     expect(mockedSession.logout).toHaveBeenCalled();
    //     expect(window.location.href).toEqual(LOGIN_PATH);
    //   });
});