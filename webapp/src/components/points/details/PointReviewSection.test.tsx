import React from 'react';
import { shallow } from 'enzyme';
import PointReviewSection from './PointReviewSection';
import BaseStarRating from '../../stars/BaseStarRating';
import PointReviewSummary from './review/PointReviewSummary';
import { cleanup } from '@testing-library/react';

describe('PointReviewSection', () => {
    afterAll(cleanup)
    it('renders', () => {
        const point = { pointToShow: { reviews: [] } };
        const wrapper = shallow(<PointReviewSection {...point} />);
        expect(wrapper.find('h2').text()).toEqual('Valoraciones');
        expect(wrapper.find('.point-review-section-review-summary').exists()).toBe(true);
        //expect(wrapper.find(PointReviewSummary).prop('media')).toEqual(0);
        expect(wrapper.find('p').text()).toEqual(' 0 valoraciones');
        //expect(wrapper.find(BaseStarRating).prop('rating')).toEqual(0);
    });

    it('comprobaciones reviews', () => {
        const point = { pointToShow: { reviews: [{ rating: 3 }, { rating: 4 }, { rating: 5 }] } };
        const wrapper = shallow(<PointReviewSection {...point} />);
        expect(wrapper.find('h2').text()).toEqual('Valoraciones');
        expect(wrapper.find('.point-review-section-review-summary').exists()).toBe(true);
        expect(wrapper.find(PointReviewSummary).prop('media')).toEqual(4);
        expect(wrapper.find('p').text()).toEqual(' 3 valoraciones');
        expect(wrapper.find(BaseStarRating).prop('rating')).toEqual(4);
    });
});
