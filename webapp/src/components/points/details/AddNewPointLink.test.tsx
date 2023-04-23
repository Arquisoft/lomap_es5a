import { cleanup, render, fireEvent } from '@testing-library/react';
import AddNewPointLink from './AddNewPointLink';
import { Point } from '../../../shared/shareddtypes';
import { Category } from '../../../shared/shareddtypes';
let point: Point;

describe('Comprobamos el componente de AddNewPointLink', () => {

    beforeAll( () => {
        point = ({
            _id: 1 + "_",
            name: "b",
            description: "b",
            location: {
              address: "b",
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
            isOwner: false,
            category: Category.NONE,
            createdAt: new Date(),
            updatedAt: new Date(),
            friends:[]
        } as Point)
    }) 

    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole un punto',()=>{
        const { getByRole, getByText } = render( <AddNewPointLink pointToShow={point} />)
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("text")).toBeInTheDocument();
        expect(getByRole("arrow-icon")).toBeInTheDocument();
        expect(getByText("Añadir valoración")).toBeInTheDocument();  
    });

    it('Comprobamos que funciona el boton', () =>{
        const {getByText } = render( <AddNewPointLink pointToShow={point} />)
        const handleClick = jest.fn();
        fireEvent.click(getByText("Añadir valoración"));
        expect(handleClick).toHaveBeenCalledTimes(0);
    })

      
});