import { cleanup, render } from "@testing-library/react";
import ProfileInfoWithFollowButton from "./ProfileInfoWithFollowButton";

//mockeamos la consola pra realizar la prueba
console.log = jest.fn();

describe("ProfileInfoWithFollowButton componente", () => {
  afterAll(cleanup);

  it("Renderiza", () => {
    const { getByText, getByAltText } = render(
      <ProfileInfoWithFollowButton
        name="John Doe"
        imageUrl="https://example.com/image.jpg"
        webId="https://example.com/johndoe"
      />
    );

    const nameElement = getByText("John Doe");
    const imageElement = getByAltText("John Doe");

    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
