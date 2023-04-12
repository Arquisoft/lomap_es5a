import ReviewListing from './ReviewListing';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';

describe('ReviewListing', () => {
    afterAll(cleanup)
    it('renderiza la lista de reviews', () => {
        const pointToShow = {
        id: 1,
        name: 'Example Point',
        location: 'Example Location',
        description: 'Example description',
        imageUrl: 'http://example.com/image.jpg',
        reviews: [
            {
            title: 'First review',
            comment: 'Lorem ipsum dolor sit amet',
            rating: 4,
            reviewer: 'John Doe',
            createdAt: new Date('2023-03-29T12:34:56.789Z'),
            },
            {
            title: 'Second review',
            comment: 'Consectetur adipiscing elit',
            rating: 3,
            reviewer: 'Jane Doe',
            createdAt: new Date('2023-03-28T12:34:56.789Z'),
            },
        ],
        };

        const wrapper = shallow(<ReviewListing pointToShow={pointToShow} />);

        expect(wrapper.find('.review-listing-listReviews')).toHaveLength(1);
        expect(wrapper.find('SingleReview')).toHaveLength(2);
    });
});
