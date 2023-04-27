import { cleanup, render } from '@testing-library/react';
import { Category, Point } from '../../../shared/shareddtypes';
import SingleDetail from "./SingleDetails";


let pointNotSaved: Point;



describe('Comprobamos el componente de SingleDetail', () => {

    beforeAll( () => {
      pointNotSaved = ({
            _id: 1 + "_",
            name: "La Pixueta",
            description: "b",
            location: {
              address: "Calle Pablo Laloux",
              postalCode: 0,
              city: "b",
              country: "b",
              coords: {
                lat: 0,
                lng: 0,
              },
            },
            owner: {
              webId: "a",
              name: "a",
              imageUrl: "a",
            },
            reviews: [],
            image: {
              url: "a",
              alt: "a",
            },
            isOwner: true,
            category: Category.NONE,
            createdAt: new Date(),
            updatedAt: new Date(),
            friends : []
        } as Point)    

    }) 

    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole un punto', () =>{
        const { getByRole, getByText } = render(<SingleDetail pointToShow={pointNotSaved} /> )
        //Compruebo la fila 1
        expect(getByRole("details")).toBeInTheDocument();
        expect(getByRole("details-name")).toBeInTheDocument();
        expect(getByRole("name")).toBeInTheDocument();
        expect(getByText("Nombre:")).toBeInTheDocument(); 
        expect(getByText("La Pixueta")).toBeInTheDocument();
        //Compruebo la fila 2
        expect(getByRole("container-coords")).toBeInTheDocument();
        expect(getByRole("coords")).toBeInTheDocument();
        expect(getByText("Coordenadas:")).toBeInTheDocument();
        
        //Compruebo la fila 3
        expect(getByRole("direction")).toBeInTheDocument();
        expect(getByRole("direction-text")).toBeInTheDocument();
        expect(getByText("Dirección:")).toBeInTheDocument();
        expect(getByText("Calle Pablo Laloux")).toBeInTheDocument();
        //Compruebo la fila 4
        expect(getByRole("category")).toBeInTheDocument();
        expect(getByRole("category-text")).toBeInTheDocument();
        expect(getByText("Categoria:")).toBeInTheDocument();
        //Compruebo la fila 5
        expect(getByRole("user")).toBeInTheDocument();
        expect(getByText("Usuario:")).toBeInTheDocument();
        //Compruebo la fila 6
        //expect(getByRole("saved")).toBeInTheDocument();
        //expect(getByText("Guardado:")).toBeInTheDocument();
        
    })

});