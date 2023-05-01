import { cleanup, render } from '@testing-library/react';
import SingleReview from './SingleReview';
import { Reviewer } from '../../../../../shared/shareddtypes';
import { BrowserRouter as Router } from "react-router-dom";

let reviewerWithName : Reviewer;
let reviewerWithoutName : Reviewer;
let reviewerNoImage: Reviewer;
let date : Date;

describe('Comprobamos el componente de SingleReview', () => {

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
            <Router>
                <SingleReview 
                    comment={'No me ha gustado mucho'} 
                    rating = {5}
                    createdAt={date}
                    reviewer={reviewerWithName}
                    pointId= ''
                    reviewId=''
                    ownerId=''
                />
            </Router>
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
        expect(getByText("Richard")).toBeInTheDocument();  
        expect(getByText("No me ha gustado mucho")).toBeInTheDocument(); 
        expect(getByRole("delete")).toBeInTheDocument();
    });

    it('Comprobamos pasandole reviewer sin nombre', () => {
        const { getByRole, getByText } = render(
            <Router>
                <SingleReview 
                    comment={'No me ha gustado mucho'} 
                    rating = {5}
                    createdAt={date}
                    reviewer={reviewerWithoutName}
                    pointId= ''
                    reviewId=''
                    ownerId=''
                />
            </Router>
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
        expect(getByText("No me ha gustado mucho")).toBeInTheDocument(); 
    });

    it('Comprobamos pasandole reviewer con incorrecta imagen' , () =>{
        const { getByRole,} = render(
            <Router>
                <SingleReview 
                    comment={'No me ha gustado mucho'} 
                    rating = {5}
                    createdAt={date}
                    reviewer={reviewerNoImage}
                    pointId= ''
                    reviewId=''
                    ownerId=''
                />
            </Router>
        );
        expect(getByRole("container")).toBeInTheDocument();
        expect(getByRole("data")).toBeInTheDocument();
        expect(getByRole("user-data")).toBeInTheDocument();
    })

      
});