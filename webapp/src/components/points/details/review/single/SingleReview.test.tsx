import { cleanup, render } from '@testing-library/react';
import SingleReview from './SingleReview';
import { Reviewer } from '../../../../../shared/shareddtypes';

let reviewerWithName : Reviewer;
let reviewerWithoutName : Reviewer;
let reviewerNoImage: Reviewer;
let date : Date;

describe('Comprobamos el componente de user comp', () => {

    beforeAll( () => {
        reviewerWithName = ({
            name:'Richard',
            imageUrl:'https://randomuser.me/api/portraits/men/68.jpg',
            webId:'localhost:8443'
        } as Reviewer)
        reviewerWithoutName = ({
            imageUrl:'https://randomuser.me/api/portraits/men/68.jpg',
            webId:'localhost:8443'
        } as Reviewer)
        reviewerNoImage = ({
            name:'Richard',
            webId:'localhost:8443'
        } as Reviewer)

        date = new Date();
    })

    //tras ejecutar los test limpia
    afterAll(cleanup);

    it('Comprobamos pasandole todas las propiedades',()=>{
        const { getByRole, getByText } = render(
            <SingleReview 
                comment={'No me ha gustado mucho'} 
                rating = {5}
                createdAt={date}
                reviewer={reviewerWithName}
            />
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
        expect(getByText("Richard")).toBeInTheDocument();  
        expect(getByText("No me ha gustado mucho")).toBeInTheDocument(); 
    });

    it('Comprobamos pasandole reviewer sin nombre', () => {
        const { getByRole, getByText } = render(
            <SingleReview 
                comment={'No me ha gustado mucho'} 
                rating = {5}
                createdAt={date}
                reviewer={reviewerWithoutName}
            />
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
        expect(getByText("No me ha gustado mucho")).toBeInTheDocument(); 
    });

    it('Comprobamos pasandole reviewer con incorrecta imagen' , () =>{
        const { getByRole,} = render(
            <SingleReview 
                comment={'No me ha gustado mucho'} 
                rating = {5}
                createdAt={date}
                reviewer={reviewerNoImage}
            />
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
    })

      
});