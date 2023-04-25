import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import IconMenuItem from "./IconMenuItem";
import { cleanup, fireEvent, render, screen} from "@testing-library/react";
import { LOGIN_PATH } from "../../routes";
import { shallow } from "enzyme";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

describe("Testing para el componente IconMenuItem", () => {
    const mockUseSession = jest.fn();
    const mockUseNavigate = jest.fn();
    const mockedSession = {
        logout: jest.fn(),
    };
    
      beforeEach(() => {
        mockUseSession.mockReturnValue({session : mockedSession});
        mockUseNavigate.mockReturnValue(jest.fn());
      });
    
      afterEach(() => {
        jest.resetAllMocks();
      });
    
      it("should navigate to the provided url when the menu item is clicked", () => {
        const url = "/example";
        render(
        <Router>
            <IconMenuItem name="Example" iconName="example" url={url} />
        </Router>,
        {
            wrapper: ({children}) => (
                <div>{children}</div>
            )
        });
    
        fireEvent.click(screen.getByText("Example"));
    
        expect(mockUseNavigate).toHaveBeenCalledWith(url);
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