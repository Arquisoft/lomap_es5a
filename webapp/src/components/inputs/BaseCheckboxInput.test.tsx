
// import { cleanup, fireEvent, render } from "@testing-library/react";
// import BaseCheckboxInput from "./BaseCheckboxInput";



// describe("Tests para el componente BaseCheckboxInput", () => {
//     afterAll(cleanup);

//     it("Comprobamos que el checkbox no esta seleccionado", () => {
//         const {getByRole} = render(<BaseCheckboxInput onCheckboxChange={() => {}} />);
//         const checkbox = getByRole('checkbox');
//         expect(checkbox).not.toBeChecked();
//     })

//     it("Comprobamos que el checkbox no esta seleccionado, lo seleccionamos y comprobamos que pasa a estar seleccionado", () => {
//         const {getByRole} = render(<BaseCheckboxInput onCheckboxChange={() => {}} />);
//         const checkbox = getByRole('checkbox');
//         // Comprobamos que no esta seleccionado
//         expect(checkbox).not.toBeChecked();
//         // Hacemos click sobre el checkbox
//         fireEvent.click(checkbox);
//         // Comprobamos que esta seleccionado
//         expect(checkbox).toBeChecked();
//     });

//     it("Comprobamos que el checkbox esta seleccionado, hacemos click y deja de estarlo", () => {
//         const {getByRole} = render(<BaseCheckboxInput onCheckboxChange={() => {}} />);
//         const checkbox = getByRole('checkbox');
//         // Comprobamos que no esta seleccionado
//         expect(checkbox).not.toBeChecked();
//         // Hacemos click sobre el checkbox
//         fireEvent.click(checkbox);
//         // Comprobamos que esta seleccionado
//         expect(checkbox).toBeChecked();
//         // Hacemos click sobre el checkbox
//         fireEvent.click(checkbox);
//         // Comprobamos que no esta seleccionado
//         expect(checkbox).not.toBeChecked();


//     })

// })